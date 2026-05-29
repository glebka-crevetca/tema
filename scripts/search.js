document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    { name: "готика", url: "goth.html" },
    { name: "нуар", url: "noir.html" },
  ];

  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestions");
  const searchBtn = document.getElementById("searchBtn");

  function showSuggestions(query) {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery === "") {
      suggestionsList.style.display = "none";
      return;
    }

    const filtered = pages.filter((page) =>
      page.name.toLowerCase().includes(lowerQuery),
    );

    if (filtered.length === 0) {
      suggestionsList.style.display = "none";
      return;
    }

    suggestionsList.innerHTML = "";
    filtered.forEach((page) => {
      const li = document.createElement("li");
      li.textContent = page.name.charAt(0).toUpperCase() + page.name.slice(1); 
      li.addEventListener("click", () => {
        window.location.href = page.url;
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = "block";
  }

  searchInput.addEventListener("input", function (e) {
    showSuggestions(e.target.value);
  });

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const found = pages.find((page) => page.name === query);
    if (found) {
      window.location.href = found.url;
    } else if (query !== "") {
      alert('Ничего не найдено. Попробуйте "готика" или "нуар".');
    }
    suggestionsList.style.display = "none";
  }

  searchBtn.addEventListener("click", performSearch);

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !searchInput.contains(e.target) &&
      !suggestionsList.contains(e.target)
    ) {
      suggestionsList.style.display = "none";
    }
  });
});
