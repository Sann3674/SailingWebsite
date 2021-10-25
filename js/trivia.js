// Declaring array of objects for questions and answers
const questions = [
    {
        'question': 'When was Ellen Macurthur born?',
        'correctAnswer': '1975',
        'wrongAns1': '1983',
        'wrongAns2': '1989',
        'wrongAns3': '1971',
    },
    {
        'question': 'Who founded the Vendee Globe?',
        'correctAnswer': 'Phillipe Jeantot',
        'wrongAns1': 'Marcus Bent',
        'wrongAns2': 'Lucas Digne',
        'wrongAns3': 'Arthur Remaud',
    },
    {
        'question': 'In what year was the shipping forecast first broadcast?',
        'correctAnswer': '1861',
        'wrongAns1': '1812',
        'wrongAns2': '1874',
        'wrongAns3': '1891',
    }
]

// Selecting question container
const questionContainer = document.querySelector('#question');

// Selecting four answer options containers
const answersContainer = document.querySelectorAll('.option');

populateFull();

//function for generating random index & using that to populate question and answers
function populateFull() {
    let index = assignRandomIndex(questions.length);
    addingQuestion(index);
    addingAnswers(index);
}

function addingQuestion(index) {
    questionContainer.innerHTML = questions[index].question;
}

function addingAnswers(index) {
    answersContainer[0].innerText = `A: ${questions[index].wrongAns1}`;
    answersContainer[1].innerText = `B: ${questions[index].wrongAns2}`;
    answersContainer[2].innerText = `C: ${questions[index].correctAnswer}`;
    answersContainer[3].innerText = `D: ${questions[index].wrongAns1}`;
}

//gives a random number from 0 to n (length of object / number of questions we have)
function assignRandomIndex(length) {
    return Math.floor((Math.random() * (length)));
}