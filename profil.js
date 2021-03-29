/**
 * profildata Definition
 */
let usernames = [];
let prenames = [];
let familynames = [];
let emails = [];

/**
 * create a new profile
 */
function createprofil() {
    let username = document.getElementById("username").value;
    let prename = document.getElementById("prename").value;
    let familyname = document.getElementById("familyname").value;
    let email = document.getElementById("email").value;

    usernames.push(username);
    prenames.push(prename);
    familynames.push(familyname);
    emails.push(email);

    showprofil();
}

function showprofil(){

    let profil = document.getElementById('newProfile');

    profil.innerHTML = ''; 

    for (let index = 0; index < usernames.length; index++) {

        profil.innerHTML += `
            <div class="profil-div">
                ${usernames[index]}<br>
                ${prenames[index]}<br>
                ${familynames[index]}<br>
                ${emails[index]}<br>
            </div>
        `;
    }
}