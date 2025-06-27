// Placeholder for any future interactions (e.g., menu toggle)
console.log("Site loaded");

document.getElementById("card").onclick = function() {
  window.location.href= "workpage.html"
}
document.getElementById("card2").onclick = function() {
  window.location.href= "workpage.html"
}
document.getElementById("card3").onclick = function() {
  window.location.href= "workpage.html"
}


document.getElementById("home").onclick = function() {
  window.location.href= "home.html"
}
document.getElementById("design").onclick = function() {
  window.location.href= "workpage.html"
}
document.getElementById("contact").onclick = function() {
  window.location.href= "contact.html"
}

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}
