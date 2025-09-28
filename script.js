// DARK MODE TOGGLE
document.getElementById("darkMode").addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});

// EVENTS CONTAINER
const eventsContainer = document.querySelector("#events .container");

// FETCH EVENTS FROM JSON
fetch("https://raw.githubusercontent.com/AbbyMoraa/eventsJSON/refs/heads/main/db.json")
  .then(res => res.json())
  .then(data => {
    data.events.forEach(event => {
      const box = document.createElement("div");
      box.classList.add("box");

      box.innerHTML = `
        <h2 class="${event.category.toLowerCase()}">${event.title}</h2>
        <p>${event.description}</p>
        <img src="${event.image}" alt="${event.title}">
        <p class="date">${event.date}</p>
        <button class="register">Register</button>
      `;

      eventsContainer.appendChild(box);
    });

    // REGISTER BUTTON ALERTS
    document.querySelectorAll(".register").forEach(button => {
      button.addEventListener("click", () => {
        alert("You are registered for this event! 🎉");
      });
    });
  })
  .catch(err => console.error("Error fetching events:", err));

// SEARCH FUNCTIONALITY
document.getElementById("search").addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  document.querySelectorAll(".box").forEach(box => {
    const title = box.querySelector("h2").textContent.toLowerCase();
    box.style.display = title.includes(searchText) ? "block" : "none";
  });
});

// SIMPLE FEEDBACK 
document.addEventListener('DOMContentLoaded', function () {
  const feedbackInput = document.getElementById('feedbackInput');
  const feedbackBtn = document.getElementById('feedbackBtn');

  feedbackBtn.addEventListener('click', function () {
    const feedback = feedbackInput.value.trim();

    if (feedback === '') {
      alert('Please enter your feedback before submitting.');
      return;
    }

    alert(`Thank you for your feedback: "${feedback}"`);

    // Clear the input after submission
    feedbackInput.value = '';
  });
});
