/**
 * URL for backend integration
 */

setURL('http://stefanie-nader.developerakademie.com/smallest_backend_ever-master');


/**
 * Backend Functions
 */

/*Definition for backend functions*/
let users = [];

/**
 * async function for downloading data from backend to required pages
 */
async function init() {
    await downloadFromServer();
    conversations = JSON.parse(backend.getItem('conversations')) || [];
}

/**
 * saving Conversations to backend
 */
function addConversation() {
    conversations.push('Apulien');
    backend.setItem('conversations', JSON.stringify(conversations));
}

/**
 * deleting a conversation from backend
 * @param {current user} destination
 */
function deleteUser(destination) {
    backend.deleteItem('conversations');
  }