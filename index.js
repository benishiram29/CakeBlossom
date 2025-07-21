//nav hover heighlights
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      link.addEventListener("mouseover", function () {
        this.classList.add("hover-effect");
      });

      link.addEventListener("mouseout", function () {
        this.classList.remove("hover-effect");
      });
    });
  });

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });




// picture enlarge for our cakes
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.product img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('closeBtn');
  if (!lightbox || !lightboxImg || !closeBtn) return; // Ensure elements exist

  images.forEach(img => {
    img.addEventListener('click', () => {
       lightbox.style.display = 'flex'; 
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});





 // Automatically set footer current year
  document.getElementById("year").textContent = new Date().getFullYear();

