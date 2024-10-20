// Function to load passwords from localStorage
function loadPasswords() {
    const passwordList = document.getElementById('passwordList');
    passwordList.innerHTML = '';

    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

    passwords.forEach((passwordItem, index) => {
        const div = document.createElement('div');
        div.classList.add('password-item');
        div.innerHTML = `
            <div>
                <strong>Website:</strong> ${passwordItem.website} <br>
                <strong>Username:</strong> ${passwordItem.username} <br>
                <strong>Password:</strong> ${passwordItem.password}
            </div>
            <button class="delete-btn" onclick="deletePassword(${index})">Delete</button>
        `;
        passwordList.appendChild(div);
    });
}

// Function to save password to localStorage
function savePassword() {
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (website && username && password) {
        const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

        passwords.push({ website, username, password });
        localStorage.setItem('passwords', JSON.stringify(passwords));

        document.getElementById('website').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        loadPasswords();
    } else {
        alert('Please fill all fields!');
    }
}

// Function to delete password
function deletePassword(index) {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.splice(index, 1);
    localStorage.setItem('passwords', JSON.stringify(passwords));
    loadPasswords();
}

document.getElementById('saveBtn').addEventListener('click', savePassword);

// Load passwords when the page loads
window.onload = loadPasswords;
