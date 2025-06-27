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



document.getElementById("homeLink").onclick = function (e) {
  e.preventDefault();
  window.location.href = "index.html";
};

document.getElementById("designsLink").onclick = function (e) {
  e.preventDefault();
  window.location.href = "workpage.html";
};

document.getElementById("contactLink").onclick = function (e) {
  e.preventDefault();
  window.location.href = "contact.html";
};


function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

