import findById from '../common/findById.js';
import questions from '../data/questions.js';
import { flower1, flower2, flower3, flower4 } from '../data/results.js';
import { getUser, saveUser, loadProfile } from '../User/user.js';
import hasCompletedQuiz from './hasCompletedQuiz.js';
import createChoice from './createChoice.js';
import scoreQuestion from './scoreQuestion.js';

loadProfile();

const user = getUser();

if (hasCompletedQuiz(questions, user)) {
    window.location = '../Results/results.html';
}

const searchParams = new URLSearchParams(window.location.search);
const questionId = searchParams.get('id'); 
const question = findById(questions, questionId);

const quizQuestion = document.getElementById('quizQuestion');
const quizForm = document.getElementById('quizForm');
const quizChoices = document.getElementById('quizChoices');

quizQuestion.textContent = question.title;

question.choices.forEach((choice) => {
    const choiceDOM = createChoice(choice);
    quizChoices.appendChild(choiceDOM);
    
});

const qLink = Number(questionId);
const qURL = qLink + 1;
const qString = qURL.toString();
const linkId = document.getElementById('linkId');
linkId.href = `./?id=${qString}`;


quizForm.addEventListener('sumbit', function(e) {
    e.preventDefault();

    const formData = new FormData(quizForm);
    const choiceId = formData('choice');

    const choice = findById(question.choices, choiceId);

    const user = getUser();

    scoreQuestion(choice, question.id, user);

    saveUser(user);
    
});


