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
 * Functions for selecting buttons with current continent 
 */
function showAfrika() {
    let filteredConversation =  getConversationsByDestination('Afrika');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}


function showAsien() {
    let filteredConversation =  getConversationsByDestination('Asien');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showNordamerika() {
    let filteredConversation =  getConversationsByDestination('Nordamerika');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}

function showSüdamerika() {
    let filteredConversation =  getConversationsByDestination('Südamerika');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showEuropa() {
    let filteredConversation =  getConversationsByDestination('Europa');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAustralien() {
    let filteredConversation =  getConversationsByDestination('Australien');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAntarktis() {
    let filteredConversation =  getConversationsByDestination('Antarktis');
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
        <div class="continent-post"> 
            <div class="destination">
             
                ${element['destination']}<br>
            </div>
            <div class="date">${element['date']}<br></div>
            <div class="title"><b>${element['title']}</b></div><br>
            <div class="question">${element['question']}</div><br>
            <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>
            ______________________________________
            <div class="comment-row">
            <img src="icons/questionanswer.svg" class="comment-icons">
            <img src="icons/like.svg" class="comment-icons">
                </div>
                <input class="comment-input" placeholder="Schreibe einen Kommentar">
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}

