/**
 * load all stuff from backend
 */
 async function initMain(){
    await loadAllConversations();
}


/**
 * Function to Filter for current User
 */
 function getConversationsByUserID(author) {
    return conversation.filter(c => c ['user'] == author);
}


/**
 * Generating Post vor Continents
 */
function generatePost(element) {

    return ` <div class="continent-post-d"> 
        <div class="destination-d">${element['destination']}<br></div>
        <div class="date-d">${element['date']}<br></div>
        <div class="user-area">
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic">
            <div>${element['user']}</div>
        </div>
        <div class="title-d"><b>${element['title']}</b></div><br>
        <div class="question-d">${element['question']}</div><br>
        <img src="icons/linecool.png" class="line">
        <div class="comment-row-d">
                <img src="icons/questionanswer.svg" class="comment-icons-d">
                <div>
                    <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                </div>
                <img src="icons/like.svg" class="comment-icons-d">
        </div>
                <div class="smileys">
                    <button class="S-button" onclick="pushSmiley('🤔')">🤔</button>
                    <button class="S-button" onclick="pushSmiley('😎')">😎</button>
                    <button class="S-button" onclick="pushSmiley('😂')">😂</button>
                    <button class="S-button" onclick="pushSmiley('😍')">😍</button>
                    <button class="S-button" onclick="pushSmiley('😭')">😭</button>
                </div>
    </div>
    `;
}


/**
 * Functions for selecting buttons with current continent 
 */
function showforCurrentUser() {
    let filteredConversation =  getConversationsByUserID('user');

    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('question-area').innerHTML += generatePost(element);
    }
}