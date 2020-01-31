const question1 = {
    id: '1',
    title: 'It is finally friday night! What sounds like the best option?',
    image: '',
    choices: [{
        id: 'q1c1',
        description: 'Romantic dinner at home with your lover.',
        result: 'rose',
    },
    {
        id: 'q1c2',
        description: 'Game night with all your freinds.',
        result: 'daffodil', 
    },
    {
        id: 'q1c3',
        description: 'Dinks at a fancy new bar downtown.',
        result: 'orchid', 
    },
    {
        id: 'q1c4',
        description: 'Staying in to catch up on household chores and prep for the week ahead.',
        result: 'magnolia', 
    }]
};

const question2 = {
    id: '2',
    title: 'What is Lorem Ipsum?',
    image: '',
    choices: [{
        id: 'q2c1',
        description: 'is simply dummy text of the printing and typesetting industry.',
        result: 'rose', 
    },
    {
        id: 'q2c2',
        description: 'Lorem Ipsum has been the industry.',
        result: 'magnolia', 
    },
    {
        id: 'q2c3',
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting,',
        result: 'orchid', 
    },
    {
        id: 'q2c4',
        description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
        result: 'daffodil', 
    }]
};

const question3 = {
    id: '3',
    title: 'Where does it come from?',
    image: '',
    choices: [{
        id: 'q3c1',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        result: 'daffodil', 
    },
    {
        id: 'q3c2',
        description: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        result: 'orchid', 
    },
    {
        id: 'q3c3',
        description: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.',
        result: 'magnolia', 
    },
    {
        id: 'q3c4',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        result: 'rose', 
    }]
};

const question4 = {
    id: '4',
    title: 'Why do we use it?',
    image: '',
    choices: [{
        id: 'q4c1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        result: 'orchid', 
    },
    {
        id: 'q4c2',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        result: 'rose', 
    },
    {
        id: 'q4c3',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
        result: 'magnolia', 
    },
    {
        id: 'q4c4',
        description: 'Various versions have evolved over the years, sometimes by accident.',
        result: 'daffodil', 
    }]
};

const question5 = {
    id: '5',
    title: 'Where can I get some?',
    image: '',
    choices: [{
        id: 'q5c1',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        result: 'rose', 
    },
    {
        id: 'q5c2',
        description: 'by injected humour, or randomised words which... ',
        result: 'daffodil', 
    },
    {
        id: 'q5c3',
        description: 'f you are going to use a passage of Lorem Ipsum.',
        result: 'magnolia', 
    },
    {
        id: 'q5c4',
        description: 'you need to be sure there.',
        result: 'orchid', 
    }]
};

const question6 = {
    id: '6',
    title: 'Is this the last question?',
    image: '',
    choices: [{
        id: 'q6c1',
        description: 'Yes',
        result: 'orchid', 
    },
    {
        id: 'q6c2',
        description: 'this',
        result: 'magnolia', 
    },
    {
        id: 'q6c3',
        description: 'is',
        result: 'daffodil', 
    },
    {
        id: 'q6c4',
        description: 'last',
        result: 'rose', 
    }]
};

const questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
];

export default questions;

///
// const RAVENCLAW = 'ravenclaw',
// ...  

// export [{
//     question: 'You see a snake, what do you do?',
//     choices: [{
//         id: `snake-${HUFFLEPUFF}`,
//         description: 'You befriend it',
//         result: HUFFLEPUFF,
//     }, {
//         id: '',
//         description: 'You go to the library',
//         result: RAVENCLAW,
//     }, {
//         id: '',
//         description: 'You torture it',
//         result: SLYTHERIN,
//     }, {
//         id: '',
//         description: 'You rescue it',
//         result: GRIFENDOR,
//     }
//     ]
// }]