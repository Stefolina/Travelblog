/**
 * Function for selecting buttons with respective continent 
 */

 function selectAsien() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Asien </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function selectAfrika() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Afrika </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`

    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}

function selectNordamerika() {
     document.getElementById('continents').innerHTML = `
     <div class="h3-headings"> <h3> Nordamerika </h3> 
     <div class="continent-post"> Bild <br>
     Land <br>
     Frage <br>
     Kommentare <br>
     </div>
     </div>`
 }

 function selectSüdamerika() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Südamerika </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function selectEuropa() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Europa </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}


function selectAustralien() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Australien </h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

function selectAntarktis() {
    document.getElementById('continents').innerHTML = `
    <div class="h3-headings"> <h3> Antarktis</h3> 
    <div class="continent-post"> BlaBla </div>
    </div>`
}

/**
 * Function to Filter destination
 */

function getConversationsByDestination(destination) {
    return conversations.filter(c => c ['destinations'] == destination);
}

/**
 * Function to show updated HTML
 */

function showPosts(destination) {
    let Afrika = destination('Afrika');

    for (let index = 0; index < Afrika.length; index++) {
        const element = Afrika[index];
    
    document.getElementById('continents').innerHTML =+ `
        ${element[index]['destination']}<br>
        ${element[index]['date']}<br>
        ${element[index]['title']}<br>
        ${element[index]['question']}<br>
    `
    }
}

/**
 * load all stuff from backend
 */
 async function initMain(){
    await loadAllConversations();
}