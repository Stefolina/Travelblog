/**
 * Showing the questions
 */
function showQuestions() {
    document.getElementById('question-area').innerHTML = '';
    for (let i = 0; i < allQuestions.length; i++) {
        const element = allQuestions[i];
        document.getElementById('question-area').innerHTML += `
    `;
    }
}