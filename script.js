document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.parentElement;
        faq.classList.toggle("active");
    });
});




