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

    destinations = jsonFromServer['destinations'] ? JSON.parse(jsonFromServer['destinations']) : [];
    dates = jsonFromServer['dates'] ? JSON.parse(jsonFromServer['dates']) : [];
    titles = jsonFromServer['titles'] ? JSON.parse(jsonFromServer['titles']) : [];
    names = jsonFromServer['names'] ? JSON.parse(jsonFromServer['names']) : [];
    questions = jsonFromServer['questions'] ? JSON.parse(jsonFromServer['questions']) : [];
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
