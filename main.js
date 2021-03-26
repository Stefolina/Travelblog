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
let posts = []; 
let names = []; 
let destinations = [];
let dates = [];
let titles = [];
let texts = [];

function addPost() {
    let question = document.getElementById('question').value; 
    let name = document.getElementById('name').value; 

    posts.push(question); 
    names.push(name);

    let myposts = document.getElementById('myposts'); 

    myposts.innerHTML = '';  

    for(let i = 0; i < posts.length; i++) {

        myposts.innerHTML += `
        <div>
            <img src="icons/X.svg" class="button-close-overlay" onclick="removePost(' + index + '); addPost();">
        
            <div class="post-div">

                <div class="post">
                    <b>${names[i]}</b><br>
                    ${posts[i]}<br>
                </div>
            </div>
        </div>
    `; 
    }

    document.getElementById('question').value = ''; 
    document.getElementById('name').value = ''; 
}

function removePost(itemi) {
    posts.splice(itemi, 1); 
    names.splice(itemi, 1);
}