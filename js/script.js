const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header1");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim função mudar Tema do site

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");

    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})
    /** * Animation on scroll */ 
    window.addEventListener('load', () => { 
        AOS.init({ 
            duration: 1000, 
            easing: 'ease-in-out', 
            once: false, 
            mirror: false }) 
        });