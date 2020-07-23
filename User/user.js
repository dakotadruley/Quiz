export function makeUser(formData) {
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

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function loadProfile() {
    // const name = document.getElementById('name');

    const user = getUser();

    if (!user) {
        window.location = './';
    }
}
