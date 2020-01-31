
function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.appendChild(span);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;
    label.appendChild(input);
   
    return label;
    
}

export default createChoice;

