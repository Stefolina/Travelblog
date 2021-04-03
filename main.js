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
            <img src="icons/X.svg" class="button-close-overlay" onclick="deletePost(${i})">

                ${conversation[i]['destination']}<br>
                ${conversation[i]['date']}<br>
                ${conversation[i]['title']}<br>
                ${conversation[i]['question']}<br>
            </div>
        </div>
    `; 
    }
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

//new Date().getTime()