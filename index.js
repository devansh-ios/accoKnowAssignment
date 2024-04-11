document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle_button");
  const navbarLinks = document.querySelector(".navbar-links");

  toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });
});

// search button functionaliy
// document.addEventListener("DOMContentLoaded", function() {
//     const searchForm = document.getElementById("searchForm");
//     const searchInput = document.getElementById("searchBar");
//     const errorMessage = document.getElementById("errorMessage");

//     searchForm.addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent form submission

//         // Validate input
//         if (searchInput.value.trim() === "") {
//             errorMessage.textContent = "Please enter a search term";
//             errorMessage.style.display = "block";
//         } else {
//             errorMessage.style.display = "none";
//             // Redirect to search page with query parameter
//             window.location.href = `index.html?query=${encodeURIComponent(searchInput.value)}`;
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const colors = [
        { color: "Red", value: "#f00" },
        { color: "Green", value: "#0f0" },
        { color: "Blue", value: "#00f" },
        { color: "Cyan", value: "#0ff" },
        { color: "Magenta", value: "#f0f" },
        { color: "Yellow", value: "#ff0" },
        { color: "Black", value: "#000" }
    ];

    const searchInput = document.getElementById('searchInput');
    const colorList = document.getElementById('colorList');

    // Function to render color cards
    function renderColors(colors) {
        colorList.innerHTML = ''; // Clear previous content
        colors.forEach(color => {
            const card = document.createElement('div');
            card.classList.add('color-card');
            
            card.innerHTML = `
                <div class="color" style="background-color: ${color.value}; 
                height:100px;
                width:100px;
                "></div>
                <p class="color-name" style="text-align:center" >${color.color}</p>
            
                `;
            colorList.appendChild(card);
        });
    }

    // Initial render
    renderColors(colors);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const filteredColors = colors.filter(color =>
            color.color.toLowerCase().includes(searchValue)
        );
        renderColors(filteredColors);
    });
});

 