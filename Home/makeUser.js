function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        flower1: 0,
        flower2: 0,
        flower3: 0,
        flower4: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    flower1: 0,
    flower2: 0,
    flower3: 0,
    flower4: 0,
    completed: {}
});

export default makeUser;
