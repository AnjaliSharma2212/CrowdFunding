async function addPatientDetails() {
  let patient = {
    name: document.getElementById("patient-name").value,
    age: document.getElementById("patient-age").value,
    condition: document.getElementById("patient-condition").value,
    image: document.getElementById("patient-image").value,
    donation: document.getElementById("patient-donation").value,
  };
  let res = await fetch(
    "https://crowdfunding-245b3-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    }
  );
  (document.getElementById("patient-name").value = ""),
    (document.getElementById("patient-age").value = ""),
    (document.getElementById("patient-condition").value = ""),
    (document.getElementById("patient-image").value = ""),
    (document.getElementById("patient-donation").value = "");
  window.location.href = "index.html";
}
async function fetchPatients() {
  let res = await fetch(
    "https://crowdfunding-245b3-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json"
  );
  let data = await res.json();
  let patientList = document.getElementById("patient-list");
  patientList.innerHTML = "";

  let patientArray = Object.entries(data).map(([id, patient]) => ({
    id,
    ...patient,
  }));
  patientArray.forEach((patient) => {
    let patientCard = document.createElement("div");
    patientCard.className = "patient-card";

    patientCard.innerHTML = `
        <img src="${patient.image}" alt="${patient.name}">
        <h4>${patient.name} (${patient.age})</h4>
        <p>${patient.condition}</p>
        <button class="delete-btn" onclick="deleteMovie('${patient.id}')">Delete</button>
    `;

    patientList.appendChild(patientCard);
  });
}
async function deleteMovie(patientId) {
  await fetch(
    `https://crowdfunding-245b3-default-rtdb.asia-southeast1.firebasedatabase.app/patients/${patientId}.json`,
    {
      method: "DELETE",
    }
  );
  fetchPatients();
}
fetchPatients();
