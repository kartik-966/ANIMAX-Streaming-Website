// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const episodeBoxes = document.querySelectorAll(".episode-box");
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const closeButton = document.querySelector(".close-button");

  episodeBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const videoSrc = box.getAttribute("data-video");
      modalVideo.querySelector("source").setAttribute("src", videoSrc);
      modalVideo.load();
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
      modalVideo.pause();
    }
  });
});
