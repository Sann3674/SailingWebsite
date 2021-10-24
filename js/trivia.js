// Declaring array of objects for questions and answers
const questions = [
    {
        'question': 'When was Ellen Macurthur born?',
        'correctAnswer': '1975',
        'wrongAns1': '1983',  
        'wrongAns2': '1989',  
        'wrongAns3': '2012',  
    },
    {
        'question': 'Who founded the Vendee Globe?',
        'correctAnswer': 'Phillipe Jeantot',
        'wrongAns1': 'Marcus Bent',  
        'wrongAns2': 'Lucas Digne',  
        'wrongAns3': 'Arthur Remaud',  
    }
]

// Selecting question container
const questionContainer = document.querySelector('#question');

// Selecting four answer options containers
const answersContainer  = document.querySelectorAll('.option');

//add a question when window loads
window.addEventListener('load', (e) => {
    addingQuestion(0);
});

//add answers in when window loads
// window.addEventListener('load', () => {
//     for (let answer in answersContainer) {
//         let para = 
//         answer.innerText = questions[0].correctAnswer;
//     }
// })


function addingQuestion(index) {
    questionContainer.innerHTML = questions[index].question;
}


//gives a random integer from 0 to 3
function assignRandomIndex(){
    return Math.floor((Math.random()*4));
}