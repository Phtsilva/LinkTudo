window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const main = document.getElementById("main-content");

    
    setTimeout(() => {
        preloader.classList.add("hidden"); 
        main.style.display = "block"; 
    }, 1000);
});
