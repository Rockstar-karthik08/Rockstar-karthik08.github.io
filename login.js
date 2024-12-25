import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Attempt to log in the user
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "categories.html"; // Redirect to categories page after successful login
  } catch (error) {
    // Handle specific Firebase error codes
    switch (error.code) {
      case "auth/invalid-email":
        alert("The email address is not valid. Please check and try again.");
        break;
      case "auth/user-not-found":
        alert("No account found with this email. Please sign up or check the email.");
        break;
      case "auth/wrong-password":
        alert("Incorrect password. Please try again.");
        break;
      case "auth/too-many-requests":
        alert("Too many failed login attempts. Please try again later.");
        break;
      default:
        alert("An error occurred: " + error.message);
        break;
    }
  }
});
