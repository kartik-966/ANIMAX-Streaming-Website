document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchQuery = document.getElementById("search-box").value.toLowerCase();

  // Sample data of anime with their respective URLs
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
  ];

  // Filter anime based on the search query
  const results = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchQuery)
  );

  // Get the search results container
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Clear previous results

  if (results.length > 0) {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
      searchResults.appendChild(resultItem);
    });
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = '<div class="result-item">No anime found</div>';
    searchResults.style.display = "block";
  }
});
