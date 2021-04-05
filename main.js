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
    let destination = document.getElementById('destination').value; 
    let date = document.getElementById('date').value;
    let title = document.getElementById('title').value; 
    let question = document.getElementById('question').value; 

    conversation.push({
        "destination": destination,
        "date": date,
        "title": title,
        "question": question
    });

    await backend.setItem('conversation', JSON.stringify(conversation));

    localStorage.setItem('myID', new Date ().getTime());

    showMain();

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

        conversations.innerHTML += `
        <div id="post">
            <div class="post">
                <div class="destination">
                    <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${i})">
                    ${conversation[i]['destination']}<br>
                </div>
                <div class="date">${conversation[i]['date']}<br></div>
                <div class="title"><b>${conversation[i]['title']}</b></div><br>
                <div class="question">${conversation[i]['question']}</div><br>
                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
                ______________________________________
                <div class="comment-row">
                <img src="icons/questionanswer.svg" class="comment-icons">
                <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
            </div>
        </div>
    `; 
    }

    coloredCategory(conversation['destination'], i);
}


/**
 * load all stuff from backend
 */
async function initMain(){
    await loadAllConversations();
    showMain();
}


/**
 * Remove Question
 */
async function deletePost(itemi) {
    conversation.splice(itemi, 1);
    await backend.setItem("conversation", JSON.stringify(conversation));
    showMain();
}