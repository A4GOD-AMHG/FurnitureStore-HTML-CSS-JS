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
