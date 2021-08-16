//Login section
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    const userEmail = emailField.value;
    if (userEmail == 'abc@gmail.com' && userPass == '2523') {
        window.location.href = 'banking.html';
    }
    else {
        alert("Incorrect email or password");

    }
})

