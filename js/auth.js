import { auth, db } from "../js/firebase-config.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import {
  getDoc,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
// Authentication Logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-btn");
  const registerForm = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");

  if (loginForm) {
    loginForm.addEventListener("click", async () => {
      const email = document.getElementById("input-email-login").value;
      const password = document.getElementById("input-password-login").value;
      const loginErrorElement = document.getElementById("login-error");

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "compaign.html";
      } catch (error) {
        loginErrorElement.innerText = handleError(error); // Inline error feedback
        if (loginErrorElement) {
          loginErrorElement.innerText =
            "Invalid email or password. Please try again.";
        }
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("click", async () => {
      const name = document.getElementById("input-name-signup").value;
      const email = document.getElementById("input-email-signup").value;
      const password = document.getElementById("input-password-signup").value;

      if (password.length < 6) {
        alert("Password should be at least 6 characters long!");
        return;
      }

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(
          "succesfully created credinatials",
          userCredentials.user.uid
        );
        const uid = userCredentials.user.uid;

        // save in firestore
        await setDoc(doc(db, "users", uid), {
          name: name,
          email: email,
          createAt: new Date().toISOString(),
          role: document.getElementById("role").value,
        });
        alert("Registration successful! Please log in.");
        window.location.href = "loginPage.html";
      } catch (error) {
        alert(handleError(error));
      }
    });
  }
  function handleError(error) {
    switch (error.code) {
      case "auth/invalid-email":
        return "Invalid email format.";
      case "auth/user-disabled":
        return "User account has been disabled.";
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  }
});
