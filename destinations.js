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
 * @param continent filtered continent by destination
 */

function showDestinations(continent) { // Hier Variable verwenden
    let filteredConversations =  getConversationsByDestination(continent); // Hier eine Variable einsetzen
    document.getElementById('continents').innerHTML = '';
        for (let index = 0; index < filteredConversations.length; index++) {
            const element = filteredConversations[index];

            let color = getColorForDestination(conversation['destination']);
        
            document.getElementById('continents').innerHTML += generatePost(color, index, element);

            currentBackground(destination);
        }
}


function currentBackground(element){
    if(element == 'Afrika'){
        document.getElementById('continents').style.backgroundImage = "url('img/africa.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Asien'){
        document.getElementById('continents').style.backgroundImage = "url('img/asien.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Nordamerika'){
        document.getElementById('continents').style.backgroundImage = "url('img/nordamerika.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Südamerika'){
        document.getElementById('continents').style.backgroundImage = "url('img/südamerika.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Europa'){
        document.getElementById('continents').style.backgroundImage = "url('img/europa.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Australien'){
        document.getElementById('continents').style.backgroundImage = "url('img/australien.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
    if(element == 'Antarktis'){
        document.getElementById('continents').style.backgroundImage = "url('img/antarktis.jpeg')";
        document.getElementById('continents').style.backgroundPosition = "center";
    }
}