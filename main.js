/**
 * load all stuff from backend
 */
 async function initMain(){
    await loadAllConversations();
    showMain();
}


/**
 * Open Overlay to start a new conversation
 */
 function openOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.remove('hidden');
}


/**
 * Close Overlay to start a new conversation
 */
function closeOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.add('hidden');
}


/**
 * add Post an save it into backend
 */
async function addPost() {
    let user = document.getElementById('user').value;
    let destination = document.getElementById('destination').value; 
    let date = document.getElementById('date').value;
    let title = document.getElementById('title').value; 
    let question = document.getElementById('question').value;  

    conversation.push({
        "user": user,
        "id": new Date().getTime(),
        "destination": destination,
        "date": date,
        "title": title,
        "question": question,
        "comments": []
    });

    await backend.setItem('conversation', JSON.stringify(conversation));

    showMain();

    document.getElementById('user').value = '';
    document.getElementById('destination').value = '';
    document.getElementById('date').value = '';
    document.getElementById('title').value = '';
    document.getElementById('question').value = '';
}


/**
 * show update version of html
 */
function showMain() {
    let conversations = document.getElementById('myposts'); 

    conversations.innerHTML = '';  

    for(let i = 0; i < conversation.length; i++) {
        
        let color = 'blue';

        if(conversation[i]['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
            
        if(conversation[i]['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }

        if(conversation[i]['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }

        if(conversation[i]['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }

        if(conversation[i]['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }

        if(conversation[i]['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }

        if(conversation[i]['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }

        let comments = conversation[i]['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }

        conversations.innerHTML += `
        <div id="post">
            <div class="post">
                <div class="destination" style="color: ${color};">
                    <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${i})">
                    ${conversation[i]['destination']}<br>
                </div>

                <div class="date">${conversation[i]['date']}<br></div>

                <div class="user-area">
                    <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
                    <div>${conversation[i]['user']}</div>
                </div>

                <div class="title"><b>${conversation[i]['title']}</b></div><br>

                <div class="question">${conversation[i]['question']}</div><br>

                <img src="icons/linecool.png" class="line">

                <div class="comment-row">
                    <img src="icons/questionanswer.svg" class="comment-icons">

                    <div>
                        <input id="comment${i}" placeholder="Schreibe einen Kommentar" class="comment-input">

                        <button class="button-comment" onclick="addComment(${i})">Post</button>
                    </div>

                    <img onclick="like()" src="icons/like.svg" class="comment-icons">
                    <div class="badge id="badge">0</div>
                </div>

                <div class="commentrow" id="comments">
                    <div class="comment" id="mypostcomment">${commentsHTML}</div>
                </div>

                <div class="smileys">
                    <button class="S-button" onclick="pushSmiley">🤔</button>
                    <button class="S-button" onclick="pushSmiley('😎')">😎</button>
                    <button class="S-button" onclick="pushSmiley('😂')">😂</button>
                    <button class="S-button" onclick="pushSmiley('😍')">😍</button>
                    <button class="S-button" onclick="pushSmiley('😭')">😭</button>
                </div>
            </div>
        </div>
    `; 
    }

    myComment = JSON.parse(localStorage.getItem('users')) || [];
}


/**
 * Function to add a Comment to post
 */
 function addComment(postIndex) {
    let myComment = document.getElementById('comment' + postIndex).value;
    conversation[postIndex].comments.push(myComment); 
    showMain(); 
    updateComments();

    myComment = JSON.stringify(localStorage.setItem('comment')) || [];
}


/**
 * Remove Question
 */
 async function deletePost(itemi) {
    conversation.splice(itemi, 1);
    await backend.setItem("conversation", JSON.stringify(conversation));
    showMain();
}



/**
 * Loading the currently logged in user.
 */

 function loadCurrentUser() {
    let currentUserAsString = localStorage.getItem("currentUser");

    if (currentUserAsString) {
        currentUser = JSON.parse(currentUserAsString);
    }

    document.getElementById("user-pic").src=`${users[userIndex]['image']}`;
}


/**
 * Push smiley into inputfield
 */
function pushSmiley(e) {
    myPostComment = document.getElementById('mypostcomment');
    myPostComment.value += e;
}


/**
 * counting likes on badge
 */
function like() {
    let numberOfComments = 0;

    for (let index = 0; index < conversation.length; index++) {
        const posti = conversation[index];
    
        for (let j = 0; j < posti['comments'].length; j++) {
            const element = posti['comments'];
            numberOfComments += 1; 
        }
    }
    document.getElementById('badge').innerText = numberOfComments;
}
