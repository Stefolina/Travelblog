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
let conversation = [];


/**
 * Postgenerator for main, destination and myQuestions
 * @param color - color for selected continent
 * @param i - Textarea, comment, smiley or like for current post
 * @param post - synonym for conversation[i]
 */
function generatePost(color, i, post) {
    let commentsHTML = generateCommentsHTML(post['comments']);

    return `<div id="post${i}">
    <div class="post">
        <div class="destination" style="color: ${color};">
            <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${i})">
            ${post['destination']}<br>
        </div>
        <div class="date">${post['date']}<br></div>
        <div class="user-area">
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
            <div>${post['user']}</div>
        </div>
        <div class="title"><b>${post['title']}</b></div><br>
        <div class="question">${post['question']}</div><br>
        <img src="icons/linecool.png" class="line">
        <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <div>
                <input id="myTextarea${i}" placeholder="Schreibe einen Kommentar" class="comment-input">
                <button class="button-comment" onclick="addComment(${i}, ${destination})">Post</button>
            </div>
            <img onclick="like(${i})" src="icons/like.svg" class="comment-icons" id="like-btn">
            <div class="badge" id="badge${i}">0</div>
        </div>
        <div class="commentrow" id="comments">
            <div class="comment" id="mypostcomment${i}">${commentsHTML}</div>
        </div>
        <div class="smileys">
                <button class="S-button" onclick="pushSmileys(${i},'🤔')">🤔</button>
                <button class="S-button" onclick="pushSmileys(${i},'😎')">😎</button>
                <button class="S-button" onclick="pushSmileys(${i},'😂')">😂</button>
                <button class="S-button" onclick="pushSmileys(${i},'😍')">😍</button>
                <button class="S-button" onclick="pushSmileys(${i},'😭')">😭</button>
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
 * @param i - created comment in current post
 */
 function addComment(i) {
    let myComment = document.getElementById(`myTextarea${i}`).value;
    let filteredConversation = getConversationsByDestination(destination);
    filteredConversation[i].comments.push(myComment); 
    saveComments();
    showMain(); 
    showDestinations(continent);
}


/**
 * Function to save all Comments
 */
 function saveComments(){
    let commentAsString = JSON.stringify(conversation);
    backend.setItem('conversation', commentAsString);
}


/**
 * Push smiley into inputfield
 * @param i - current Textarea 
 * @param g - selected emoji for current textarea
 */
 function pushSmileys(i,g) {
    let myPostComment = document.getElementById(`myTextarea${i}`);
    myPostComment.value += g;
}


/**
 * counting likes on badge
 * @param i -current badge in selected post
 */
 function like(i) {
    let badge = document.getElementById(`badge${i}`);
    badge.innerText = +badge.innerText + 1;
}


/**
 * async function for downloading data from backend to required pages
 */
 async function loadAllConversations() {
    await downloadFromServer();

    conversation = jsonFromServer['conversation'] ? JSON.parse(jsonFromServer['conversation']) : [];
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
