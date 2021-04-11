/**
 * URL for backend integration
 */

setURL('http://stefanie-nader.developerakademie.com/smallest_backend_ever-master');


/**
 * Push Message with "Enter"
 */
 function init() {
    document.addEventListener("keydown", function (u) {
        if (u.keyCode == 13) {  //checks whether the pressed key is "Enter"
        login();
        addComment();
    }
    });
}


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
 * userinformations
 */
 let users = [
    {
        'id': 0,
        'name': 'Marina',
        'password': 'Marina123!',
        'image': 'img/marina.jpg',
        'e-mail': 'marina@web.de',
    },
    {
        'id': 1,
        'name': 'Yvonne',
        'password': 'Yvonne123!',
        'image': 'img/yvonne.jpg',
        'e-mail': 'yvonne@web.de',
    },
    {
        'id': 2,
        'name': 'Steffi',
        'password': 'Steffi123!',
        'image': 'img/steffi.jfif',
        'e-mail': 'steffi@web.de',
    },
    {
        'id': 3,
        'name': 'Junus',
        'password': 'Junus123!',
        'image': 'img/junus.jfif',
        'e-mail': 'junus@web.de',
    }
];


/**
 * define currentUser from Local Storage
 */
 let currentUserFromLocalStorage = {};


/**
 * Checking current user for navigationbar
 */
 function checkCurrentUser() {
    if (localStorage.getItem('currentUser')) { // Check if user exists
        currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById('user-pic').src = currentUserFromLocalStorage.image;
    }
}


/**
 * to init important functions in body onload
 */
function initOverallApp() {
    checkCurrentUser();
}


/**
 * Logout current user
 */
function logout() {
    localStorage.removeItem('currentUser');
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