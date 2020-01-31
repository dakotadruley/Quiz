export default function renderNewQuestion(questions) {
    const link = document.createElement('a');
    link.href = './Quiz/?id=' + questions.id;

    return window.location = link.href;
}