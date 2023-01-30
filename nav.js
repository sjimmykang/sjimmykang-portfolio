/* Navigation bar Scrolling down to hide, up to show */
/* got the info on how to from: https://www.cssscript.com/show-hide-navbar-scroll-down-up/ 
and modified to fit my need. */

const navEl = document.querySelector('nav');
let lastScroll = 0;

/* listens to scroll and compare to last scroll to current scroll to determine scroll direction */
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (currentScroll - lastScroll > 0) {
        navEl.classList.add('scroll-down');
        /* scrolling down means increasing Y value */
    } else {
        navEl.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
})