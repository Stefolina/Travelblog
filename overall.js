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
 */
function generatePost(color, i, commentsHTML, apfel) {
    return `<div id="post${i}">
    <div class="post">
        <div class="destination" style="color: ${color};">
            <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${i})">
            ${apfel['destination']}<br>
        </div>
        <div class="date">${apfel['date']}<br></div>
        <div class="user-area">
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
            <div>${apfel['user']}</div>
        </div>
        <div class="title"><b>${apfel['title']}</b></div><br>
        <div class="question">${apfel['question']}</div><br>
        <img src="icons/linecool.png" class="line">
        <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <div>
                <input id="myTextarea${i}" placeholder="Schreibe einen Kommentar" class="comment-input">
                <button class="button-comment" onclick="addComment(${i})">Post</button>
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
 * Function to add a Comment to post
 */
 function addComment(postIndex, continent) {
    let myComment = document.getElementById('myTextarea' + postIndex).value;
    conversation[postIndex].comments.push(myComment); 
    saveComments();
    showMain(); 
    showDestinations(continent);
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
