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
    if (conversations){
        conversations.innerHTML = '';  
        for(let i = 0; i < conversation.length; i++) {
            conversations.innerHTML += generatePost();
        }
    }
}


/**
 * Remove Question
 * @param item - selected post which you want to delete
 */
 async function deletePost(item) {
    conversation.splice(item, 1);
    await backend.setItem("conversation", JSON.stringify(conversation));
    showMain();
}