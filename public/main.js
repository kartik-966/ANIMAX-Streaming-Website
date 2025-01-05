// script.js

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  speed: 800, // Set the transition speed in milliseconds
});

var swiper = new Swiper(".anime-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  loop: true,
});

var swiper = new Swiper(".action-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  loop: true,
});

var swiper = new Swiper(".child-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  loop: true,
});

var swiper = new Swiper(".family-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  loop: true,
});

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
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
  });
});

// Search Functionality
// Search Functionality with Redirect on Enter
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");

  // List of anime with titles and links
  const animeList = [
    { title: "Demon Slayer", url: "anime/download.html" },
    { title: "Death Note", url: "anime/deathnote.html" },
    { title: "Jujutsu Kaisen", url: "anime/jjk.html" },
    { title: "Ninja Kamui", url: "anime/ninja.html" },
    { title: "Attack On Titan", url: "anime/aot.html" },
    { title: "Solo Leveling", url: "anime/solo.html" },
    { title: "Blue Lock", url: "anime/bluelock.html" },
    { title: "Berserk", url: "anime/berserk.html" },
    { title: "One Punch Man", url: "anime/op.html" },
    { title: "Naruto Shippuden", url: "anime/naruto.html" },
    { title: "Baki", url: "anime/baki.html" },
    { title: "Chainsaw Man", url: "anime/chainsaw.html" },
    { title: "Doraemon", url: "anime/doremon.html" },
    { title: "Kaiju No. 8", url: "anime/kaiju.html" },
    { title: "Lookism", url: "anime/chainsaw.html" },
    { title: "Pokemon", url: "anime/pokemon.html" },
    { title: "Shinchan", url: "anime/shinchan.html" },
    { title: "Tekken", url: "anime/tekken.html" },
    { title: "Tom and Jerry", url: "anime/tom&jerry.html" },
    { title: "Wind Breaker", url: "anime/wind.html" },
  ];


  // Search input event listener
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const matchedAnime = animeList.find((anime) =>
        anime.title.toLowerCase().includes(searchTerm)
      );

      if (matchedAnime) {
        // Redirect to the matched anime URL
        window.location.href = matchedAnime.url;
      } else {
        alert("No matching anime found");
      }
    }
  });
});

