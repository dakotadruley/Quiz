export default function scoreQuestion(choices, questionId, user) {
    if (choices.result === 'daffodil') {
        user.flower1 + 1;}
    else if (choices.result === 'rose') {
        user.flower2 + 1;} 
    else if (choices.result === 'orchid') {
        user.flower3 + 1;}
    else if (choices.result === 'magnolia') {
        user.flower4 + 1;}

    user.completed[questionId] = true;
}

