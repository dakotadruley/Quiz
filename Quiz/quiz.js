import findById from '../common/findById.js';
import questions from '../data/questions.js';
import { flower1, flower2, flower3, flower4 } from '../data/results.js';
import loadProfile from '../common/loadProfile.js';
import { getUser } from '../data/saveUser.js';
import hasCompletedQuiz from './hasCompletedQuiz.js';
import createChoice from './createChoice.js';

loadProfile();

const user = getUser();

if (hasCompletedQuiz(questions, user)) {
    window.loaction = '../Results/results.html';
}

// const quizQuestions = document.getElementById('question');

const searchParams = new URLSearchParams(window.location.search);
const questionId = searchParams.get('id'); 
const question = findById(questions, questionId);


if (!question) {
    window.location = '../Home';
}

const quizQuestion = document.getElementById('quizQuestion');
const quizForm = document.getElementById('quizForm');
const quizChoices = document.getElementById('quizChoices');

// get title of the question and render 
quizQuestion.textContent = question.title;

question.choices.forEach((choice) => {
    const choiceDOM = createChoice(choice);
    quizChoices.appendChild(choiceDOM);
    
});




// render questions
    // get form from dom
    // create a label for each choice with span and input inside
        // get the data for the correct question using the query parameter and findById
            // put question in a div
        // for each option or choice render a radio button 
            // make a label
            // make a span
            // add the choice.choice to the span
            // make an input of: 
                // type: radio
                // name: question
        // for the form, add an event listener on 'submit'
            // in the event listner get the formData
            // use the user selection in the form data to udpate the dom and chnage state (increment to their flower score)
