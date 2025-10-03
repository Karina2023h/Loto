const modal = document.getElementById("searchModal");
const openBtn = document.getElementById("openSearch");
const closeBtn = document.querySelector(".close");

openBtn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}