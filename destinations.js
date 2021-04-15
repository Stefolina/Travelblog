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
 
 function showAfrika() {
    let filteredConversation =  getConversationsByDestination('Afrika');
        document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
          let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }
    document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}


function showAsien() {
    let filteredConversation =  getConversationsByDestination('Asien');
        document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
          let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showNordamerika() {
    let filteredConversation =  getConversationsByDestination('Nordamerika');
        document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
          let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "top";
}

function showSüdamerika() {
    let filteredConversation =  getConversationsByDestination('Südamerika');
        document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
          let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }
    
    document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showEuropa() {
    let filteredConversation =  getConversationsByDestination('Europa');
    document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }
    document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAustralien() {
    let filteredConversation =  getConversationsByDestination('Australien');
    document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }
    document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}


function showAntarktis() {
    let filteredConversation =  getConversationsByDestination('Antarktis');
    document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversation.length; index++) {
        const element = filteredConversation[index];
        let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}
*/

/**
 * Global function show Destinations 
 */

function showDestinations() {
    let filteredConversationAfrika =  getConversationsByDestination('Afrika');
    document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversationAfrika.length; index++) {
        const element = filteredConversationAfrika[index];
        let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }

    document.getElementById('continents').style.backgroundImage = "url('img/afrika.jpeg')";
    document.getElementById('continents').style.backgroundPosition = "center";
}