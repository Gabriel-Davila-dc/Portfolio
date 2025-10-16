  
      let burg = document.getElementById("burg")
      let burg_mobile = document.getElementById("burg-mobile")
    let nav = document.getElementById("nav-mobile")

  burg.addEventListener('click', () => {
    nav.classList.toggle('show');
    });
     burg_mobile.addEventListener('click', () => {
    nav.classList.toggle('show');
    });
    
    nav.addEventListener('click', () => {
    nav.classList.toggle('show');
    });
     nav.addEventListener('click', () => {
    nav.classList.toggle('show');
    });
    

    document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave ao clicar nos links do menu
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
          });
        }
      }
    });
  });
});