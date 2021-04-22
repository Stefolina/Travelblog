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
 * Global function show Destinations 
 */

function showDestinations(continent) { // Hier Variable verwenden
    let filteredConversations =  getConversationsByDestination(continent); // Hier eine Variable einsetzen
    document.getElementById('continents').innerHTML = '';
    for (let index = 0; index < filteredConversations.length; index++) {
        const element = filteredConversations[index];
        let color = 'blue';
        if(element['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
            document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
            document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
            document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
            document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
            document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
            document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        if(element['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
            document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
            document.getElementById('continents').style.backgroundPosition = "center";
        }
        let comments = element['comments'];
        let commentsHTML = '';
        for(let j=0; j<comments.length; j++){
            commentsHTML += `<div>${comments[j]}</div>`;
        }
        document.getElementById('continents').innerHTML += generatePost(color, index, commentsHTML, element);
    }
}