document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random speed

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove heart after animation ends
        }, 5000);
    }

    setInterval(createHeart, 300); // Creates hearts continuously
});
