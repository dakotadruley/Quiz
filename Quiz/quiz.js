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



