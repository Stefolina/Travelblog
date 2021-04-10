/**
 * URL for backend integration
 */

setURL('http://stefanie-nader.developerakademie.com/smallest_backend_ever-master');


/**
 * Backend Functions
 */

/*Definition for backend functions*/
let conversation = [];


/**
 * async function for downloading data from backend to required pages
 */
 async function loadAllConversations() {
    await downloadFromServer();

    conversation = jsonFromServer['conversation'] ? JSON.parse(jsonFromServer['conversation']) : [];
}


/**
 * template Integration function
 */

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

/*
function coloredDestination() {
    let color = 'blue';

        if(conversation[i]['destination'] == 'Afrika'){
            color = "rgb(100,165,187)";
        }
            
        if(conversation[i]['destination'] == 'Asien'){
            color = "rgb(245,238,205)";
        }

        if(conversation[i]['destination'] == 'Nordamerika'){
            color = "rgb(255,202,228)";
        }

        if(conversation[i]['destination'] == 'Südamerika'){
            color = "rgb(150,147,178)";
        }

        if(conversation[i]['destination'] == 'Europa'){
            color = "rgb(181,240,218)";
        }

        if(conversation[i]['destination'] == 'Australien'){
            color = "rgb(255,184,136)";
        }

        if(conversation[i]['destination'] == 'Antarktis'){
            color = "rgb(195,195,195)";
        }
}*/