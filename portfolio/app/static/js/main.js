document.addEventListener("DOMContentLoaded", () => {
    initNavToggle();
    document.querySelectorAll("[data-carousel]").forEach(initCarousel);
});

/* ---------- menu mobile ---------- */
function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* ---------- carrossel de projetos ---------- */
function initCarousel(carousel) {
    const viewport = carousel.querySelector(".carousel-viewport");
    const track = carousel.querySelector("[data-carousel-track]");
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const dotsWrap = carousel.parentElement.querySelector("[data-carousel-dots]");
    if (!viewport || !track) return;

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    // monta os indicadores (dots)
    if (dotsWrap) {
        dotsWrap.innerHTML = "";
        slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "carousel-dot";
            dot.setAttribute("role", "tab");
            dot.setAttribute("aria-label", `Ir para o projeto ${i + 1}`);
            dot.addEventListener("click", () => scrollToSlide(i));
            dotsWrap.appendChild(dot);
        });
    }

    function currentIndex() {
        const scrollLeft = viewport.scrollLeft;
        let closest = 0;
        let closestDist = Infinity;
        slides.forEach((slide, i) => {
            const dist = Math.abs(slide.offsetLeft - scrollLeft);
            if (dist < closestDist) {
                closestDist = dist;
                closest = i;
            }
        });
        return closest;
    }

    function scrollToSlide(index) {
        const clamped = Math.max(0, Math.min(index, slides.length - 1));
        viewport.scrollTo({ left: slides[clamped].offsetLeft, behavior: "smooth" });
    }

    function updateUI() {
        const index = currentIndex();

        if (dotsWrap) {
            Array.from(dotsWrap.children).forEach((dot, i) => {
                dot.classList.toggle("is-active", i === index);
            });
        }
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    }

    prevBtn && prevBtn.addEventListener("click", () => scrollToSlide(currentIndex() - 1));
    nextBtn && nextBtn.addEventListener("click", () => scrollToSlide(currentIndex() + 1));

    let scrollTimeout;
    viewport.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateUI, 100);
    });

    window.addEventListener("resize", updateUI);

    updateUI();
}