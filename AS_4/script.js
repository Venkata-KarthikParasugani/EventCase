const events = [
  { title: "Web Dev Bootcamp", category: "tech", description: "Learn HTML, CSS, and JS from scratch." },
  { title: "Music Fiesta", category: "music", description: "Live concert with popular bands." },
  { title: "AI Conference", category: "tech", description: "Explore the future of AI." },
  { title: "Football Mania", category: "sports", description: "Exciting local football tournament." },
  { title: "Jazz Nights", category: "music", description: "Evening of smooth jazz." },
  { title: "Cricket Clash", category: "sports", description: "Intercity cricket championship." }
];

function displayEvents(filteredEvents) {
  const grid = document.getElementById("eventsGrid");
  grid.innerHTML = "";

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <button onclick="bookNow('${event.title}')">Book Now</button>
    `;
    grid.appendChild(card);
  });
}

function filterEvents() {
  const selected = document.getElementById("category").value;
  if (selected === "all") {
    displayEvents(events);
  } else {
    const filtered = events.filter(event => event.category === selected);
    displayEvents(filtered);
  }
}

function bookNow(title) {
  alert(`You selected "${title}". Proceed to the booking page.`);
  window.location.href = "booking.html";
}

window.onload = () => {
  displayEvents(events);
};
function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventName = document.getElementById("event").value.trim();
  const messageEl = document.getElementById("confirmationMessage");

  if (name && email && eventName) {
    messageEl.textContent = `Thank you, ${name}! Your booking for "${eventName}" has been confirmed.`;
    messageEl.style.color = "green";
    document.getElementById("bookingForm").reset();
  } else {
    messageEl.textContent = "Please fill in all fields.";
    messageEl.style.color = "red";
  }
}
