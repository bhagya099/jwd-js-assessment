/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

// grabing the html element
const submitButton = document.querySelector('#btnSubmit');
const resetButton = document.querySelector('#btnReset');
const scoreButton = document.querySelector('#score');
const quizWrap = document.querySelector('#quizWrap');
const quizArray = [{
        q: 'Which is the third planet from the sun?',
        o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
        a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
        q: 'Which is the largest ocean on Earth?',
        o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        a: 3,
    },
    {
        q: 'What is the capital of Australia',
        o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
        a: 1,
    },
    {
        q: 'Which one of these is a JavaScript package manager?',
        o: ['Angular', 'Node.js', 'npm', 'Typescript'],
        a: 2,
    },
    {
        q: ' Which is the largest planet in the solar system?',
        o: ['Jupiter', 'Earth', 'Mars', 'Neptune'],
        a: 0,
    },

];
window.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('#start');
    start.addEventListener('click', function(e) {
        document.querySelector('#quizBlock').style.display = 'block';
        start.style.display = 'none';
        // calling the time function
        timer();
        // declaring the time function
        function timer() {
            var sec = 60;
            var timer = setInterval(function() {
                document.getElementById('time').innerHTML = '00:' + sec + ' left';
                sec--;
                if (sec < 0) {
                    clearInterval(timer);
                    alert("Time out!! :(")
                    reset();
                }
            }, 1000);
        }
    });

    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/



    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {

        let quizDisplay = '';
        quizArray.map((quizItem, index) => {
            quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"  value=0> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1" value =1> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2" value=2> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3" ><input type="radio" name="radio${index}" id="radio_${index}_3"  value=3> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
            quizWrap.innerHTML = quizDisplay;
        });
    };
    // call the displayQuiz function
    displayQuiz();
    // for reset
    function reset() {
        displayQuiz();
        scoreButton.innerHTML = "";
        document.querySelector('#quizBlock').style.display = 'none';
        start.style.display = 'block';
    }

    // calling the score function
    submitButton.addEventListener('click', calculateScore);
    // resert the quiz
    resetButton.addEventListener('click', reset);
});

// Calculate the score
const calculateScore = () => {
    console.log("hello");
    let score = 0;
    quizArray.map((quizItem, index) => {
        for (let i = 0; i < 4; i++) {
            //highlight the li if it is the correct answer
            let li = `li_${index}_${i}`;
            let r = `radio_${index}_${i}`;
            liElement = document.querySelector('#' + li);
            radioElement = document.querySelector('#' + r);
            if (quizItem.a == i) {
                //change background color of li element here
                liElement.style.backgroundColor = 'green';
                if (radioElement.checked) {
                    // code for task 1 goes here
                    console.log("hello");
                    score++;
                }
            }
        }
        scoreButton.innerHTML = `Your score is : ${score}`;
    });
};