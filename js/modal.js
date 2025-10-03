const loginModalBox = document.getElementById("loginModalBox");
const openLoginModal = document.getElementById("openLoginModal");
const loginClose = loginModalBox.querySelector(".login-close");
const loginCancel = loginModalBox.querySelector(".login-cancel");

// Відкрити
openLoginModal.onclick = function() {
  loginModalBox.style.display = "block";
}

// Закрити по хрестику
loginClose.onclick = function() {
  loginModalBox.style.display = "none";
}

// Закрити по Cancel
loginCancel.onclick = function() {
  loginModalBox.style.display = "none";
}

// Закрити по кліку поза вікном
window.onclick = function(e) {
  if (e.target == loginModalBox) {
    loginModalBox.style.display = "none";
  }
}