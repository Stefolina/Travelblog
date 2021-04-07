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
    //let user = document.getElementById('user').value; 

    conversation.push({
        "id": new Date().getTime(),
        "destination": destination,
        "date": date,
        "title": title,
        "question": question,
        "comments": []
        //"user": user
    });

    await backend.setItem('conversation', JSON.stringify(conversation));

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
    document.getElementById('myposts').innerHTML = '';  

    for(let i = 0; i < conversation.length; i++) {
        const conversations = conversation[i];

        let conversationHTML = '';

            for (let j = 0; j < conversations.comments.length; j++) {
                const comment = conversations.comments[j];
                conversationHTML += `<div>${comment}</div>`;
            }

            document.getElementById('myposts').innerHTML += `
            <div id="post">
                <div class="post">
                    <div class="destination" style="color: ${color};">
                        <img src="icons/X.svg" class="button-delete-post" onclick="deletePost(${i})">
                        ${conversations[i]['destination']}<br>
                    </div>

                    <div class="date">${conversations[i]['date']}<br></div>

                    <div class="user-area">
                        <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
                        <div>User</div>
                    </div>

                    <div class="title"><b>${conversations[i]['title']}</b></div><br>

                    <div class="question">${conversations[i]['question']}</div><br>

                    <img src="icons/linecool.png" class="line">

                    <div class="comment-row">
                        <img src="icons/questionanswer.svg" class="comment-icons">

                        <div>
                            <input id="comment${i}" placeholder="Schreibe einen Kommentar" class="comment-input">

                            <button class="button-comment" onclick="addComment(${i})" type="submit">Post</button>
                        </div>

                        <img src="icons/like.svg" class="comment-icons">
                        <div class="badge" id="badge"></div>
                    </div>

                    <div class="commentrow" id="comments">
                        ${conversationHTML}
                    </div>
                </div>
            </div>
        `; 

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
        }

    loadAllComments();
}


/**
 * Function to add a Comment to post
 */

 function addComment(postIndex) {
    let myComment = document.getElementById('comment' + postIndex).value;
    conversations[postIndex].comments.push(myComment); 

    localStorage.setItem('comment', myComment);
    showMain(); 
}


/**
 * Saving Comment into LocalStorage 
 */
 function loadAllComments() {
    myComment = localStorage.getItem('comment');
    document.getElementById('comments').innerHTML =+ `${conversationHTML}`;
}


/**
 * Function to push Enter for posting a comment
 
 function Enter() {
     
}*/


/**
 * function for likes

function like(){
    
    let numberOfComments = 0;

    for (let index = 0; index < conversation.length; index++) {
        const like = conversation[index];
    
        for (let j = 0; j < like['comments'].length; j++) {
            const element = like['comments'];
            numberOfComments += 1; 
        }
    }

    document.getElementById('badge').innerText = numberOfComments;
}*/


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