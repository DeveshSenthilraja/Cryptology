const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // If the credentials are valid, show an alert box and reload the page
    window.open("https://sites.google.com/view/cryptologymithunnv2","_self");
})
