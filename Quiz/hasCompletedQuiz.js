function hasCompletedQuiz(questions, user) {
    questions.forEach((question) => {
        if (!user.completed[question.id]) {
            return false;
        }
    });

    return true;
}

export default hasCompletedQuiz;