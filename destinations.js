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
    
        document.getElementById('continents').innerHTML = '';

    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                <div class="title-d"><b>${element['title']}</b></div><br>

                <div class="question-d">${element['question']}</div><br>

                <img src="icons/linecool.png" class="line">
                
                <div class="comment-row-d">
                        <img src="icons/questionanswer.svg" class="comment-icons-d">

                        <form onclick="Enter(); return false;">
                            <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                        </form>

                        <img src="icons/like.svg" class="comment-icons-d">
                </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}


function showAsien() {
    let filteredConversation =  getConversationsByDestination('Asien');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                <div class="title-d"><b>${element['title']}</b></div><br>

                <div class="question-d">${element['question']}</div><br>

                <img src="icons/linecool.png" class="line">
                
                <div class="comment-row-d">
                        <img src="icons/questionanswer.svg" class="comment-icons-d">

                        <form onclick="Enter(); return false;">
                            <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                        </form>

                        <img src="icons/like.svg" class="comment-icons-d">
                </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showNordamerika() {
    let filteredConversation =  getConversationsByDestination('Nordamerika');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
            <div class="continent-post-d"> 
                    <div class="destination-d">${element['destination']}<br></div>

                    <div class="date-d">${element['date']}<br></div>

                    <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                    <div class="title-d"><b>${element['title']}</b></div><br>

                    <div class="question-d">${element['question']}</div><br>

                    <img src="icons/linecool.png" class="line">
                    
                    <div class="comment-row-d">
                            <img src="icons/questionanswer.svg" class="comment-icons-d">

                            <form onclick="Enter(); return false;">
                                <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                            </form>

                            <img src="icons/like.svg" class="comment-icons-d">
                    </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}

function showSüdamerika() {
    let filteredConversation =  getConversationsByDestination('Südamerika');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML += `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

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
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showEuropa() {
    let filteredConversation =  getConversationsByDestination('Europa');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                <div class="title-d"><b>${element['title']}</b></div><br>

                <div class="question-d">${element['question']}</div><br>

                <img src="icons/linecool.png" class="line">
                
                <div class="comment-row-d">
                        <img src="icons/questionanswer.svg" class="comment-icons-d">

                        <form onclick="Enter(); return false;">
                            <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                        </form>

                        <img src="icons/like.svg" class="comment-icons-d">
                </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAustralien() {
    let filteredConversation =  getConversationsByDestination('Australien');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                <div class="title-d"><b>${element['title']}</b></div><br>

                <div class="question-d">${element['question']}</div><br>

                <img src="icons/linecool.png" class="line">
                
                <div class="comment-row-d">
                        <img src="icons/questionanswer.svg" class="comment-icons-d">

                        <form onclick="Enter(); return false;">
                            <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                        </form>

                        <img src="icons/like.svg" class="comment-icons-d">
                </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAntarktis() {
    let filteredConversation =  getConversationsByDestination('Antarktis');

        document.getElementById('continents').innerHTML = '';
    
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        
        document.getElementById('continents').innerHTML = `
            <div class="continent-post-d"> 
                <div class="destination-d">${element['destination']}<br></div>

                <div class="date-d">${element['date']}<br></div>

                <img src="icons/profilpic.svg" class="profilpic" id="profilpic"><br>

                <div class="title-d"><b>${element['title']}</b></div><br>

                <div class="question-d">${element['question']}</div><br>

                <img src="icons/linecool.png" class="line">
                
                <div class="comment-row-d">
                        <img src="icons/questionanswer.svg" class="comment-icons-d">

                        <form onclick="Enter(); return false;">
                            <input placeholder="Schreibe einen Kommentar" class="comment-input-d">
                        </form>

                        <img src="icons/like.svg" class="comment-icons-d">
                </div>
            </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}

