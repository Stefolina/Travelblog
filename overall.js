/**
 * URL for backend integration
 */

setURL('http://stefanie-nader.developerakademie.com/smallest_backend_ever-master');


/**
 * Push Message with "Enter"
 */
 function init() {
    document.addEventListener("keydown", function (u) {
        if (u.keyCode == 13) {  //checks whether the pressed key is "Enter"
        login();
        addComment();
    }
    });
}


/**
 * Definition for backend functions
 */
let conversations = [];


/**
 * Postgenerator for main, destination and myQuestions
 * @param post - synonym for conversation[i]
 */
function generatePost(conversation) {
    let commentsHTML = generateCommentsHTML(conversation['comments']);
    let color = getColorForDestination(conversation['destination']);

    return `<div id="post${conversation['id']}">
    <div class="post">
        <div class="destination" style="color: ${color};">
            <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${conversation['id']})">
            ${conversation['destination']}<br>
        </div>
        <div class="date">${conversation['date']}<br></div>
        <div class="user-area">
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
            <div>${conversation['user']}</div>
        </div>
        <div class="title"><b>${conversation['title']}</b></div><br>
        <div class="question">${conversation['question']}</div><br>
        <img src="icons/linecool.png" class="line">
        <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <div>
                <input id="myTextarea${conversation['id']}" placeholder="Schreibe einen Kommentar" class="comment-input">
                <button class="button-comment" onclick="addComment(${conversation['id']})">Post</button>
            </div>
            <img onclick="like(${conversation['id']})" src="icons/like.svg" class="comment-icons" id="like-btn">
            <div class="badge" id="badge${conversation['id']}">0</div>
        </div>
        <div class="commentrow" id="comments">
            <div class="comment" id="mypostcomment${conversation['id']}">${commentsHTML}</div>
        </div>
        <div class="smileys">
                <button class="S-button" onclick="pushSmileys(${conversation['id']},'🤔')">🤔</button>
                <button class="S-button" onclick="pushSmileys(${conversation['id']},'😎')">😎</button>
                <button class="S-button" onclick="pushSmileys(${conversation['id']},'😂')">😂</button>
                <button class="S-button" onclick="pushSmileys(${conversation['id']},'😍')">😍</button>
                <button class="S-button" onclick="pushSmileys(${conversation['id']},'😭')">😭</button>
        </div>
    </div>
</div>
`;
}


/**
 * colordefinition for mainpage
 * @param {string} destination "Afrika"
 * @returns {string} color e.g. "rgb(150,147,178)"
 */
 function getColorForDestination(destination){
    let color = 'blue';
            if(destination == 'Afrika'){
                color = "rgb(100,165,187)";
            }
            if(destination == 'Asien'){
                color = "rgb(245,238,205)";
            }
            if(destination == 'Nordamerika'){
                color = "rgb(255,202,228)";
            }
            if(destination == 'Südamerika'){
                color = "rgb(150,147,178)";
            }
            if(destination == 'Europa'){
                color = "rgb(181,240,218)";
            }
            if(destination == 'Australien'){
                color = "rgb(255,184,136)";
            }
            if(destination == 'Antarktis'){
                color = "rgb(195,195,195)";
            }

        return color;
}


/**
 * Showing commentsHTML for destinations and main page
 * @param {array>strings} comments -comments of a conversation object
 * @returns HTML Code of comments
 */
function generateCommentsHTML(comments){
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }

    return commentsHTML;
}


/**
 * Function to add a Comment to post
 * @param id {number} e.g. 1618589389873
 */
 function addComment(id) {
    let myComment = document.getElementById(`myTextarea${id}`).value;
    let myConversation = conversations.find(c => c.id ==id);
    myConversation.comments.push(myComment);
    saveComments();
    showMain(); 
    showDestinations(destination)
}


/**
 * Function to save all Comments
 */
 function saveComments(){
    let commentAsString = JSON.stringify(conversations);
    backend.setItem('conversations', commentAsString);
}


/**
 * Push smiley into inputfield
 * @param i - current Textarea 
 * @param g - selected emoji for current textarea
 */
 function pushSmileys(id,g) {
    let myPostComment = document.getElementById(`myTextarea${id}`);
    myPostComment.value += g;
}


/**
 * counting likes on badge
 * @param i -current badge in selected post
 */
 function like(id) {
    let badge = document.getElementById(`badge${id}`);
    badge.innerHTML = +badge.innerHTML + 1;
}


/**
 * async function for downloading data from backend to required pages
 */
 async function loadAllConversations() {
    await downloadFromServer();

    conversations = jsonFromServer['conversations'] ? JSON.parse(jsonFromServer['conversations']) : [];
}


/**
 * template Integration function
 */

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


/**
 * Function to open and close the responsive Menu
 */
function showMenu() {
    document.getElementById('menu').classList.remove('d-none');
    document.getElementById('menu').classList.add('responsive-menu');
}

function closeMenu() {
    document.getElementById('menu').classList.remove('responsive-menu');    
    document.getElementById('menu').classList.add('d-none');     
}
