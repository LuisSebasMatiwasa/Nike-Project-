// script.js
function handleLogin() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username.trim() === "" || email.trim() === "") {
        alert("Llene los espacios correspondientes");
    } else {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; // Cambia a la página principal
    }
}
