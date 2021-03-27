/**
 * profildata Definition
 */
let profildata = [];

/**
 * create a new profile
 */
function createprofil() {
    let username = document.getElementById("username").value;
    let prename = document.getElementById("prename").value;
    let familyname = document.getElementById("familyname").value;
    let email = document.getElementById("email").value;

    profildata.push(username);
    profildata.push(prename);
    profildata.push(familyname);
    profildata.push(email);

    showprofil();
}

function showprofil(){
        for (let index = 0; index < profildata.length; index++) {
            let profil = profildata[index]
        document.getElementById('newProfile').innerHTML = `
        <div class="profil-div">
            ${profil[username]}<br>
            ${profil[prename]}<br>
            ${profil[familyname]}<br>
            ${profil[email]}<br>
        </div>
    `; 
    }
}