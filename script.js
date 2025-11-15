
document.getElementById("poll-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Save all inputs to localStorage
  const inputs = document.querySelectorAll("#poll-form input, #poll-form select");

  inputs.forEach(input => {
    localStorage.setItem(input.previousElementSibling?.innerText || "field", input.value);
  });

  // Add fade-out animation
  const poll = document.getElementById("poll-container");
  poll.classList.add("fade-out");

  setTimeout(() => {
    poll.style.display = "none";
    document.getElementById("site-content").style.display = "block";

    // Fade-in animation for website
    document.getElementById("site-content").classList.add("fade-in");
  }, 600);
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// SKIP BUTTON — just show the site, do not save anything
document.getElementById("skip-btn").addEventListener("click", () => {
    document.getElementById("poll-container").style.display = "none";
    document.getElementById("site-content").style.display = "block";
});
