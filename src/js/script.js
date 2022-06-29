const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
const form = document.querySelector("form");
const signinButton = document.querySelector("button#sign-in");

togglePasswordButton.addEventListener("click", togglePassword);

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Hide password";
    togglePasswordButton.setAttribute("aria-label", "Hide password.");
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Show password";
    togglePasswordButton.setAttribute(
      "aria-label",
      "Show password as plain text. Warning: This will display your password on the screen."
    );
  }
}

passwordInput.addEventListener("input", resetCustomValidity);

function resetCustomValidity() {
  passwordInput.setCustomValidity("");
}

// Basic password validation
function validatePassword() {
  let message = "Your password should contain: ";
  if (!/.{8,}/.test(passwordInput.value)) {
    message += "eight or more characters; ";
  }
  if (!/.*[A-Z].*/.test(passwordInput.value)) {
    message += "at least one uppercase letter; ";
  }
  if (!/.*[a-z].*/.test(passwordInput.value)) {
    message += "at least one lowercase letter;";
  }
  passwordInput.setCustomValidity(message);
}

form.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(event) {
  event.preventDefault();
  validatePassword();
  form.reportValidity();
  if (form.checkValidity() === false) {
  } else {
    // Simulating user login when inputs are valid
    alert("Logging in!");
    signinButton.disabled = "true";
  }
}
