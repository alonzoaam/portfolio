document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

     // Accordion functionality for jobs and projects
     const dropdowns = document.querySelectorAll('.job h4, .project h3');
     dropdowns.forEach(dropdown => {
         dropdown.addEventListener('click', () => {
             toggleDropdown(dropdown);
         });
     });
 
     function toggleDropdown(dropdown) {
         const description = dropdown.nextElementSibling;
         const arrow = dropdown.querySelector('.dropdown-arrow');
         
         if (description.style.display === 'block') {
             description.style.display = 'none';
             arrow.style.transform = 'rotate(0deg)';
         } else {
             description.style.display = 'block';
             arrow.style.transform = 'rotate(180deg)';
         }
     }
 
     // Toggle all button
     const toggleAllButton = document.createElement('button');
     toggleAllButton.textContent = 'Toggle All';
     toggleAllButton.classList.add('toggle-all');
     document.body.appendChild(toggleAllButton);
 
     let allOpen = false;
     toggleAllButton.addEventListener('click', () => {
         allOpen = !allOpen;
         dropdowns.forEach(dropdown => {
             const description = dropdown.nextElementSibling;
             const arrow = dropdown.querySelector('.dropdown-arrow');
             
             if (allOpen) {
                 description.style.display = 'block';
                 arrow.style.transform = 'rotate(180deg)';
             } else {
                 description.style.display = 'none';
                 arrow.style.transform = 'rotate(0deg)';
             }
         });
     });
});