document.getElementById("wishForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const theme = document.getElementById("theme").value;

  if (name) {
    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("theme", theme);

    // Redirect to the wish page
    window.location.href = "wish.html";
  }
});
