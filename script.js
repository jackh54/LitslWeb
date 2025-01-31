document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(14, 227, 11, 1)";
        } else {
            navbar.style.background = "rgba(14, 227, 11, 0.9)";
        }
    });
    const playerCountElement = document.getElementById("playerCount");
    async function fetchPlayerCount() {
        try {
            const response = await fetch("https://api.litsl.net/api/playercount");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            playerCountElement.textContent = `Current Players: ${data.playercount}`;
        } catch (error) {
            console.error("Failed to fetch player count:", error);
            playerCountElement.textContent = "Player count unavailable";
        }
    }
    fetchPlayerCount();
    setInterval(fetchPlayerCount, 30000);
    const revealElements = document.querySelectorAll(".feature-box");
    function revealOnScroll() {
        revealElements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.classList.add("no-scroll");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("no-scroll");
}