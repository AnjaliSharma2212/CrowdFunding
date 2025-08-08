import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Handle Form Navigation
document.addEventListener("DOMContentLoaded", () => {
  function nextStep(step) {
    const allSteps = document.querySelectorAll(".form-step");
    const targetStep = document.getElementById(`form-step-${step}`);
    if (targetStep) {
      allSteps.forEach((el) => el.classList.add("hidden"));
      targetStep.classList.remove("hidden");

      // Populate preview on Step 4
      if (step === 4) {
        updatePreview();
      }
    } else {
      console.error(`Element with id "form-step-${step}" not found`);
    }
  }

  function prevStep(step) {
    nextStep(step);
  }
  // Update the live preview with user inputs
  function updatePreview() {
    const title = document.getElementById("campaign-title").value || "No Title";
    const description =
      document.getElementById("campaign-description").value || "No Description";
    const goal = document.getElementById("campaign-goal").value || "No Goal";

    // Update preview elements
    document.getElementById("preview-title").innerText = `Title: ${title}`;
    document.getElementById(
      "preview-description"
    ).innerText = `Description: ${description}`;
    document.getElementById(
      "preview-goal"
    ).innerText = `Fundraising Goal: ${goal}`;
  }

  // Add event listeners for live preview updates
  document
    .getElementById("campaign-title")
    .addEventListener("input", updatePreview);
  document
    .getElementById("campaign-description")
    .addEventListener("input", updatePreview);
  document
    .getElementById("campaign-goal")
    .addEventListener("input", updatePreview);
  window.nextStep = nextStep;
  window.prevStep = prevStep;

  // File Drop Handler
  let uploadedFile = null;
  const uploadFile = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileDisplay = document.getElementById("file-name-display");
    const removeBtn = document.getElementById("remove-file-btn");

    if (files.length > 0) {
      const file = files[0];
      uploadedFile = file;

      // Example validation for file size
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        fileDisplay.innerText = "File too large. Please upload a smaller file.";
        return;
      }

      fileDisplay.innerText = `Uploaded File: ${file.name}`;
      removeBtn.style.display = "block"; // show the removeBtn
    } else {
      fileDisplay.innerText = "No file detected!";
    }
  };

  const removeUploadedFile = () => {
    const fileDisplay = (document.getElementById(
      "file-name-display"
    ).innerText = "No file uploaded.");
    const removeBtn = document.getElementById("remove-file-btn");
    uploadedFile = null;
    fileDisplay.innerText = "No file Uploaded yet!";
    removeBtn.style.display = "none"; // hide the remove btn
    // Additional logic to handle file removal from Firebase if uploaded
    console.log("Uploaded file removed!");
  };
  window.uploadFile = uploadFile;
  window.removeUploadedFile = removeUploadedFile;

  // Campaign Submission
  async function submitCampaign() {
    const title = document.getElementById("campaign-title").value || "No Title";
    const description =
      document.getElementById("campaign-description").value || "No Description";
    const goal = document.getElementById("campaign-goal").value || "0";
    const uploadedFile =
      document.getElementById("file-name-display").innerText ||
      "No Media Uploaded";

    if (
      !title ||
      !description ||
      !goal ||
      uploadedFile === "No Media Uploaded"
    ) {
      alert("Please fill out all fields and upload media before submitting.");
      return;
    }

    try {
      const campaignData = {
        title: title,
        description: description,
        goal: parseInt(goal),
        media: uploadedFile.split(", "),
        createdAt: new Date().toISOString(),
      };

      // Use the Firestore instance (`db`) to save the campaign
      await addDoc(collection(db, "campaigns"), campaignData);
      alert("Campaign submitted successfully!");

      // Clear form fields
      document.getElementById("campaign-title").value = "";
      document.getElementById("campaign-description").value = "";
      document.getElementById("campaign-goal").value = "";
      document.getElementById("file-name-display").innerText =
        "No Media Uploaded";

      // Redirect (optional)
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Error submitting campaign:", error);
      alert(
        "An error occurred while submitting the campaign. Please try again."
      );
    }
  }

  window.submitCampaign = submitCampaign;
});
