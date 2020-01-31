function hasCompletedQuiz(questions, user) {
    questions.forEach((question) => {
        if (!user.completed[question.id]) {
            return false;
        } else return true;
    });

    
}

export default hasCompletedQuiz;