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
    },
    {
        'question': 'In what year was sailing first introduced to the Olympic Games?',
        'correctAnswer': '1896',
        'wrongAns1': '1812',
        'wrongAns2': '1900',
        'wrongAns3': '1924',
    },
    {
        'question': 'On 15 May 2010, who became the youngest person to complete a solo and unassisted around the world sailing trip?',
        'correctAnswer': 'Jessica Watson',
        'wrongAns1': 'Ben Ainslie',
        'wrongAns2': 'Joe Bloggs',
        'wrongAns3': 'Rebecca Adlington',
    },
    {
        'question': 'What is the name of the holes that are cut to let water run off the deck?',
        'correctAnswer': 'Scuppers',
        'wrongAns1': 'Port holes',
        'wrongAns2': 'Cleats',
        'wrongAns3': 'Jibs',
    },
    {
        'question': ' What type of sailing yacht was the original "America", which gave its name to the Americas Cup?',
        'correctAnswer': 'Schooner',
        'wrongAns1': 'Ketch',
        'wrongAns2': 'Sloop',
        'wrongAns3': 'Yawl',
    },
    {
        'question': ' How many nautical miles were covered by the youngest person to sail solo around the world in 2010?',
        'correctAnswer': '23,000',
        'wrongAns1': '1,250',
        'wrongAns2': '40,000',
        'wrongAns3': '7,500',
    },
    {
        'question': 'What colour flag must be flown when first entering the territorial waters of another Country?',
        'correctAnswer': 'Yellow',
        'wrongAns1': 'Red',
        'wrongAns2': 'The colour of your own national flag',
        'wrongAns3': 'Blue',
    },
    {
        'question': 'Which of the following is NOT a term for a sailing knot?',
        'correctAnswer': 'Double Fishermans knot',
        'wrongAns1': 'Clove hitch',
        'wrongAns2': 'Two half hitch',
        'wrongAns3': 'Figure-eight knot',
    },
    {
        'question': 'Which of the following is not a type of sail?',
        'correctAnswer': 'Yawl',
        'wrongAns1': 'Mizzen',
        'wrongAns2': 'Spanker',
        'wrongAns3': 'Course',
    }
]

// Selecting whole quiz section
let wholeDiv = document.querySelector('#quiz');

// Selecting question container
const questionContainer = document.querySelector('#question');

// Selecting four answer options containers
const answersContainer = document.querySelectorAll('.option');

//Selecting failure section
let failure = document.querySelector('#failure');

//selecting display of no. of correct answers
let streakNo = document.querySelector('#streak');

//selecting the update paragraph (which says 'correct' and latest streak)
let updateContainer = document.querySelector('#update');

// Initializing variables

let answerStreak = 0;

let correctAnswer = answersContainer[2];

let incorrectOne = answersContainer[0];

let incorrectTwo = answersContainer[1];

let incorrectThree = answersContainer[3];

//call main function to generate question and answers
populateFull();

//defining function for generating random question & populating answers
function populateFull() {
    //remove any event listeners
    correctAnswer.removeEventListener('click', onCorrectClick);
    incorrectOne.removeEventListener('click', onFailure);
    incorrectTwo.removeEventListener('click', onFailure);
    incorrectThree.removeEventListener('click', onFailure);

    //getting a random order for the 4 answers 
    let answerArray = [0, 1, 2, 3]
    shuffle(answerArray);

    //generating a random question from the list
    let index = assignRandomIndex(questions.length);

    //populating the question and answers using that random question just generated 
    addingQuestion(index);
    addingAnswers(index, answerArray);

    //making sure the 4 answer options have a variable indicating if they are correct or wrong
    correctAnswer = answersContainer[(addingAnswers(index, answerArray)[0])];
    incorrectOne = answersContainer[(addingAnswers(index, answerArray)[1])];
    incorrectTwo = answersContainer[(addingAnswers(index, answerArray)[2])];
    incorrectThree = answersContainer[(addingAnswers(index, answerArray)[3])];


    //add an event listener to correct answer & run function again when this is clicked
    correctAnswer.addEventListener('click', onCorrectClick);

    //add an event listener to incorrect answers & show new html container when this is clicked
    incorrectOne.addEventListener('click', onFailure);
    incorrectTwo.addEventListener('click', onFailure);
    incorrectThree.addEventListener('click', onFailure);


}

function addingQuestion(index) {
    questionContainer.innerHTML = questions[index].question;
}

function addingAnswers(index, array) {
    answersContainer[array[0]].innerText = `${questions[index].wrongAns1}`;
    answersContainer[array[1]].innerText = `${questions[index].wrongAns2}`;
    answersContainer[array[2]].innerText = `${questions[index].correctAnswer}`;
    answersContainer[array[3]].innerText = `${questions[index].wrongAns3}`;
    
    //return array with this order [correct, wrong, wrong, wrong]
    let arr = [];
    arr.push(array[2]);
    arr.push(array[0]);
    arr.push(array[1]);
    arr.push(array[3]);
    return arr;
}

//define shuffle function.  returns random order of array
function shuffle(array) {
    let currentIndex = array.length, randomIndex, t;
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        t = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = t;
    }
    return array;
}

//gives a random number from 0 to n (length of object / number of questions we have)
function assignRandomIndex(length) {
    return Math.floor((Math.random() * (length)));
}

//function for when a wrong answer is clicked (any one of the 3 wrong answers for any question)
function onFailure() {
    let streakUpdate = document.querySelector('#streakUp');
    if (answerStreak > 1) {
        streakUpdate.innerText = `Your streak was ${answerStreak} correct answers, well done!`;
    }
    else if (answerStreak === 1) {
        streakUpdate.innerText = `You managed ${answerStreak} correct answer, well done!`;
    }
    else {
        streakUpdate.innerText = `Bad luck, you didn't manage any correct answers this time.`;
    }
    wholeDiv.classList.toggle('hidden');
    failure.classList.toggle('hidden');
}

//when a correct answer is clicked
function onCorrectClick() {
    answerStreak++;
    if (answerStreak === 1) {
        streakNo.innerText = `${answerStreak} correct answer`;
    }
    else if (answerStreak > 1) {
        streakNo.innerText = `${answerStreak} correct answers`;
    }
    updateContainer.classList.remove("hidden");
    populateFull();
}

//fixing bug where hover state is sticky on touchscreen devices
//removing class which adds hover behaciour by default
let firstAnswer = answersContainer[0];
let secondAnswer = answersContainer[1];
let thirdAnswer = answersContainer[2];
let fourthAnswer = answersContainer[3];

let classes = firstAnswer.classList;
console.log(classes);

firstAnswer.classList.remove('btn-outline-dark:hover');
firstAnswer.classList.remove('btn:hover');

classes = firstAnswer.classList;
console.log(classes);

const isTouch = !!("ontouchstart" in window) || window.navigator.msMaxTouchpoints > 0;

if (!isTouch) {

}