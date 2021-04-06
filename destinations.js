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
        
        document.getElementById('continents').innerHTML =+ `
        <div class="h3-headings"> <h3> Afrika </h3> 
        <div class="continent-post"> 
            ${element[index]['destination']}<br>
            ${element[index]['date']}<br>
            ${element[index]['title']}<br>
            ${element[index]['question']}<br>
            </div>
        </div>
        `;
    }

    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


 function showAsien() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Asien </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function showNordamerika() {
     document.getElementById('continents').innerHTML = `
     <div class="h3-headings"> <h3> Nordamerika </h3> 
     <div class="continent-post"> Bild <br>
     Land <br>
     Frage <br>
     Kommentare <br>
     </div>
     </div>`
 }

 function showSüdamerika() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Südamerika </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function showEuropa() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Europa </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}


function showAustralien() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Australien </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function showAntarktis() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Antarktis</h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

