import findById from '../common/findById.js';
import questions from '../data/questions.js';
import { flower1, flower2, flower3, flower4 } from '../data/results.js';

// loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questionId = searchParams.get('id');
const question = findById(questions, questionId);

const quizQuestion = document.getElementById('question');
const quizChoices = document.getElementsByName('choice');

//get choiceform from HTML
choiceForm.addEventListener('sumbit', function(event) {
    event.preventDefault();
});