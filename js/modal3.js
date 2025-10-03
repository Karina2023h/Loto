
  const winningIcon = document.querySelector(".winning-trigger");
  const winningModal = document.getElementById("winningModal");
  const winningClose = document.querySelector(".winning-close-btn");
  const winningCloseFooter = document.querySelector(".winning-close-footer");

  // Відкрити
  winningIcon.addEventListener("click", () => {
    winningModal.style.display = "flex";
  });

  // Закрити (хрестик і кнопка)
  [winningClose, winningCloseFooter].forEach(btn => {
    btn.addEventListener("click", () => {
      winningModal.style.display = "none";
    });
  });

  // Клік поза модалкою
  window.addEventListener("click", (e) => {
    if (e.target === winningModal) {
      winningModal.style.display = "none";
    }
  });
