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
 * Definition for backend functions
 */
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