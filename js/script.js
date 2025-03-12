document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.navbar-links');

    menu.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.addEventListener('click', function (e) {
        if (e.target === this) {
            menu.classList.remove('active');
            this.classList.remove('active');
        }
    });

    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.2,
        rootMargin: "-100px 0px",
    }
);

document
    .querySelectorAll(".slide-in-left, .slide-in-right")
    .forEach((element) => {
        observer.observe(element);
    });
