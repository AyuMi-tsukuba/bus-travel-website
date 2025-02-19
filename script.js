console.log("Script loaded!");

// Mock list of cities in Java (you can replace this with a real API call)
const cities = [
  "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", 
  "Yogyakarta", "Malang", "Denpasar", "Makassar", "Palembang"
];

// Populate dropdowns with cities
function populateCities() {
  console.log("Populating cities...");
  const pickup = document.getElementById("pickup");
  const destination = document.getElementById("destination");

  cities.forEach(city => {
    const option1 = document.createElement("option");
    option1.value = city;
    option1.textContent = city;
    pickup.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = city;
    option2.textContent = city;
    destination.appendChild(option2);
  });
}

// Mock function to check bus availability
function searchBuses() {
  console.log("Searching buses...");
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!pickup || !destination || !startDate || !endDate) {
    alert("Please fill all fields!");
    return;
  }

  // Mock API call (replace with actual backend call)
  setTimeout(() => {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>Buses available from <strong>${pickup}</strong> to <strong>${destination}</strong> between <strong>${startDate}</strong> and <strong>${endDate}</strong>:</p>
      <ul>
        <li>Bus A - 10:00 AM</li>
        <li>Bus B - 2:00 PM</li>
        <li>Bus C - 6:00 PM</li>
      </ul>
    `;
  }, 1000);
}

// Initialize the page
window.onload = function () {
  console.log("Page loaded!");
  populateCities();
};