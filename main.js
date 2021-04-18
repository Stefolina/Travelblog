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
            conversations.innerHTML += generatePost(color, i, commentsHTML, conversation[i]);
        }
    }
}


/**
 * Remove Question
 */
 async function deletePost(itemi) {
    conversation.splice(itemi, 1);
    await backend.setItem("conversation", JSON.stringify(conversation));
    showMain();
}