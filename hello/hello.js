document.addEventListener("DOMContentLoaded", () => {
    const fadeItems = document.querySelectorAll(".fade-item")
    fadeItems.forEach((item, index) => {
        setTimeout(
            () => {
                item.classList.add("fade-in")
            },
            index * 300 + 700,
        )
    })
})



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.back-button').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});