import { saveUser } from '../data/saveUser.js';
import makeUser from './makeUser.js';

const userName = document.getElementById('userName');

userName.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(userName);
    const user = makeUser(formData);

    saveUser(user);

    window.location = '../Quiz/?id=1';
});