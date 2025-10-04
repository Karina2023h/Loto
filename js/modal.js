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

// --- Вкладки ---
const loginTabs = loginModalBox.querySelectorAll(".login-tab");
const tabContents = loginModalBox.querySelectorAll(".tab-content");

loginTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Прибрати active у всіх вкладок і контенту
    loginTabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Додати active вибраній вкладці і відповідному контенту
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
