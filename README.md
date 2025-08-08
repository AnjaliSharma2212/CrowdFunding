
# Crowdfunding Application

A web-based crowdfunding application that allows users to create campaigns, manage patient details, and authenticate users securely. This application is built with a clear separation of concerns, utilizing **HTML**, **CSS**, **JavaScript**,**DOM** and **Firebase Firestore**.

---

## Project Type

Frontend | Backend

## Deployed App

[Link of project deploy FrontEnd](https://crowdfundingsite20.netlify.app)
[link to backend Firebase](https://console.firebase.google.com/project/crowdfunding-245b3/settings/general)

## Folder Structure

├── css/ │ ├── index.css # Styles for the homepage │ ├── campaign.css # Styles for the campaign page │ ├── dashboard.css # Styles for the dashboard │ ├── signup.css # Styles for the signup page ├── js/ │ ├── index.js # Functionality for the homepage │ ├── campaign.js # Campaign functionality │ ├── dashboard.js # Dashboard functionality │ ├── auth.js # User authentication functionality ├── index.html # Homepage ├── campaign.html # Campaign management page ├── dashboard.html # Dashboard page ├── signup.html # Signup/login page ├── README.md # Project documentation

---

## Video Walkthrough of the project

[link to video of project walkthrough](https://drive.google.com/file/d/1jD4uUy-uSqPKLhsH6Gysn1e9qYxl-tok/view?usp=sharing)

[link to video walkthrough codebase](https://drive.google.com/file/d/1PzNQTUPmnxhcWbGnIpcJ1hQDJbPo9zV5/view?usp=sharing)

## Features

1. **Homepage** (`index.html`):

   - A responsive landing page structured with HTML, styled using `index.css`, and made interactive with `index.js`.

2. **Campaign Management** (`campaign.html`):

   - Users can add campaign details via a form.
   - Campaign data is stored in **Firebase Firestore**.
   - DOM manipulation is used to dynamically display data.

3. **User Authentication**:

   - A **Signup page** allows new users to register, with data securely stored using **Firebase Authentication**.
   - Users can **log in** to access their campaigns and dashboard.

4. **Patient Management** (`dashboard`):

   - Users can add patient details on the dashboard, which are submitted and stored in **Firebase Firestore**.
   - After adding patients, users are redirected to the homepage for further interaction.

5. **Modular Design**:
   - Separate folders for **HTML**, **CSS**, and **JavaScript** files, ensuring a clean and maintainable project structure.
   - Individual CSS files for styling each respective HTML page.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Firestore & Authentication APIs
- **Firebase APIs Used**:
  - **Firebase Authentication**: For secure user signup and login functionality.
  - **Firebase Firestore**: For storing campaign and patient details in the cloud.
- **Styling**:
  - Custom, responsive designs for each page.
  - Separate CSS files for homepage, campaign management, signup, and dashboard.

---

## How to Use

1. **Homepage**:

   - Explore the homepage for an overview of the application.

2. **User Signup**:

   - Register on the **signup page**. User credentials will be securely stored in Firebase Authentication.

3. **Campaign Management**:

   - Log in to access the **campaign page**.
   - Add campaign details, which will be saved to Firebase Firestore.

4. **Dashboard**:

   - Redirect to the **dashboard** to add patient details for your campaign.
   - Patient data is securely stored in Firebase Firestore.

5. **Navigation**:
   - Once the patient data is submitted, the user is redirected back to the homepage (`index.html`).

---

## Future Enhancements

- Improve the UI/UX design for a more interactive experience.
- Add real-time updates using Firebase Realtime Database.
- Implement admin roles for advanced data control and management.
- Add charts or graphs to visualize campaign progress and donation analytics.

---

## Api Used

[link to Api key used in firebase]( apiKey: "AIzaSyDAFaNIfPrPcE_2wxXdjFZ1BGtNAeOLgoI",)

[link of api to store and retrive patients data](https://crowdfunding-245b3-default-rtdb.asia-southeast1.firebasedatabase.app/)

## Technology Stack

- HTML5
- CSS
- DOM
- Firebase

## Credits

This application was developed by **Anjali** using modern web technologies and Firebase for seamless backend integration.

---
