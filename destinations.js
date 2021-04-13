/**
 * load all stuff from backend
 */
 async function initMain(){
    await loadAllConversations();
}


/**
 * Function to Filter destination
 */
 function getConversationsByDestination(destination) {
    return conversation.filter(c => c ['destination'] == destination);
}


/**
 * Generating Post vor Continents
 */
function generatePost(element) {
    let i;
    let commentsHTML;

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
        <div class="comment-row">
                <img src="icons/questionanswer.svg" class="comment-icons">

                <div>
                    <input id="comment${i}" placeholder="Schreibe einen Kommentar" class="comment-input">

                    <button class="button-comment" onclick="addComment(${i})">Post</button>
                </div>

                <img onclick="like(${i})" src="icons/like.svg" class="comment-icons" id="like-btn">
                <div class="badge id="badge">0</div>
            </div>

            <div class="commentrow" id="comments">
                <div class="comment" id="mypostcomment">${commentsHTML}</div>
            </div>
        </div>
    </div>
    `;
}


/**
 * Functions for selecting buttons with current continent 
 */
function showAfrika() {
    let filteredConversation =  getConversationsByDestination('Afrika');
    
        document.getElementById('continents').innerHTML = '';

    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}


function showAsien() {
    let filteredConversation =  getConversationsByDestination('Asien');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showNordamerika() {
    let filteredConversation =  getConversationsByDestination('Nordamerika');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}

function showSüdamerika() {
    let filteredConversation =  getConversationsByDestination('Südamerika');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showEuropa() {
    let filteredConversation =  getConversationsByDestination('Europa');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAustralien() {
    let filteredConversation =  getConversationsByDestination('Australien');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAntarktis() {
    let filteredConversation =  getConversationsByDestination('Antarktis');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += generatePost(element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}

