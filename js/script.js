// Adding animation to header navigation links
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ff5252";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#fff";
    });
});

// Adding placeholder animations to the search input
const searchInput = document.querySelector("main input");
let placeholderText = "Search for restaurant, cuisine or a dish";
let currentIndex = 0;

function typePlaceholder() {
    searchInput.setAttribute("placeholder", placeholderText.substring(0, currentIndex));
    currentIndex++;
    if (currentIndex > placeholderText.length) {
        currentIndex = 0;
    }
}

setInterval(typePlaceholder, 200);

// Adding smooth scroll to top functionality
window.addEventListener("scroll", () => {
    const scrollTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

document.querySelector(".scroll-to-top").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
