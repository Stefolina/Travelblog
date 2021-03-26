/**
 * Open Overlay
 */
 function openOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.remove('hidden');
}

/**
 * Close Overlay
 */
function closeOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.add('hidden');
}


/**
 * Post a question
 */

let destinations = [];
let dates = [];
let titles = []; 
let names = []; 
let questions = [];

function addPost() {
    let destination = document.getElementById('destination').value; 
    let date = document.getElementById('date').value;
    let title = document.getElementById('title').value; 
    let name = document.getElementById('name').value; 
    let question = document.getElementById('question').value; 

    destinations.push(destination);
    dates.push(date);
    titles.push(title); 
    names.push(name);
    questions.push(question);

    showMain();
}

function showMain() {
    let myposts = document.getElementById('myposts'); 

    myposts.innerHTML = '';  

    for(let i = 0; i < questions.length; i++) {

        myposts.innerHTML += `
        <div>
            <img src="icons/X.svg" class="button-close-overlay" onclick="removePost(' + index + '); addPost();">
        
            <div class="post-div">
                <div id="conversation" class="post">
                    ${destinations[i]}<br>
                    ${titles[i]}<br>
                    ${dates[i]}<br>
                    <b>${names[i]}</b><br>
                    ${questions[i]}<br>
                </div>
            </div>
        </div>
    `; 
    }

    document.getElementById('destination').value = ''; 
    document.getElementById('date').value = ''; 
    document.getElementById('title').value = ''; 
    document.getElementById('name').value = ''; 
    document.getElementById('question').value = ''; 
}


/**
 * Remove Question
 */
function removePost(itemi) {
    destinations.splice(itemi, 1);
    dates.splice(itemi, 1);
    titles.splice(itemi, 1);
    names.splice(itemi, 1);
    questions.splice(itemi, 1); 
}