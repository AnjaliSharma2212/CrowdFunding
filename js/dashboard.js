import { auth, db } from "./firebase-config.js";

let logoutBtn = document.getElementById("logout-btn");
// Logout functionality
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await auth.signOut();
    window.location.href = "index.html"; // Redirect to homepage
  });
}
