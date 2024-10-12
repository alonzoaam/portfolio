document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const cursorBorder = document.getElementById('cursor-border');
    const links = document.querySelectorAll('a');

    const onMouseMove = (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        gsap.to(cursorBorder, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5
        });
    }

    document.addEventListener('mousemove', onMouseMove);

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('link-hover');
            cursorBorder.classList.add('link-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-hover');
            cursorBorder.classList.remove('link-hover');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});