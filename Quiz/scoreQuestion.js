export default function scoreQuestion(choice, questionId, user) {
    if (choice.result === 'daffodil') {
        user.flower1 + 1;}
    else if (choice.result === 'rose') {
        user.flower2 + 1;} 
    else if (choice.result === 'orchid') {
        user.flower3 + 1;}
    else if (choice.result === 'magnolia') {
        user.flower4 + 1;}

    user.completed[questionId] = true;
}

// aim with this is to add their choice to corresponding result.