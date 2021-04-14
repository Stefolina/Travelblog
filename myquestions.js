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
    return conversation.filter(c => c ['id'] == author);
}


/**
 * Functions for selecting buttons with current continent 
 */
function showforCurrentUser() {
    let filteredConversation =  getConversationsByUserID('id');

    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('question-area').innerHTML += generatePost(element);
    }
}