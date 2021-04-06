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

        let commentsHTML = '';

        //for (let j = 0; j < comments.length; j++) {
        //    const comment = comments[j];
        //   commentsHTML += `<div>${comment}</div>`;
        //}

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
                    <div>User</div>
                </div>

                <div class="title"><b>${conversation[i]['title']}</b></div><br>

                <div class="question">${conversation[i]['question']}</div><br>

                <img src="icons/linecool.png" class="line">

                <div class="comment-row">
                    <img src="icons/questionanswer.svg" class="comment-icons">

                    <form onclick="Enter(); return false;">
                        <input id="comment${i}" placeholder="Schreibe einen Kommentar" class="comment-input">

                        <button class="button-comment" onclick="addComment(${i})" type="submit">Post</button>
                    </form>

                    <img src="icons/like.svg" class="comment-icons">
                </div>

                <div class="commentrow" id="comments">
                    ${commentsHTML}
                </div>
            </div>
        </div>
    `; 
    }
}


/**
 * Function to push Enter for posting a comment
 
 function Enter() {
     
}*/


/**
 * Function to add a Comment to post
 */

 function addComment(postIndex) {
    let myComment = document.getElementById('comment' + postIndex).value;

    conversation[postIndex].comments.push(myComment); 

    //savePosts();

    showMain(); 
}


/**
 * load all stuff from backend
 */
async function initMain(){
    await loadAllConversations();
    showMain();
    Enter(); 
}


/**
 * Remove Question
 */
async function deletePost(itemi) {
    conversation.splice(itemi, 1);
    await backend.setItem("conversation", JSON.stringify(conversation));
    showMain();
}