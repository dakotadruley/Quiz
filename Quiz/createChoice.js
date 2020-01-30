function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const question = document.getElementById('quizQuestion');
    question.textContent = choice.question;
    label.appendChild(question);

    return label;
}

export default createChoice;