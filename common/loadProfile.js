import { getUser } from '../data/saveUser.js';

function loadProfile() {
    const name = document.getElementById('name');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    // name.textContent = user.name;
}

export default loadProfile;