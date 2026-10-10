document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!menuToggle || !mobileNav) return;

    function setOpen(open) {
        menuToggle.classList.toggle('active', open);
        mobileNav.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    menuToggle.addEventListener('click', function() {
        setOpen(!mobileNav.classList.contains('active'));
    });

    // Close menu after choosing a link
    mobileNav.addEventListener('click', function(event) {
        if (event.target.closest('a')) setOpen(false);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) setOpen(false);
    });

    // Close menu with Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') setOpen(false);
    });
});
