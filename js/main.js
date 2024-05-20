const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});


function initSwiper() {
  // Inicializa Swiper
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Mostrará tantos slides como quepan en el contenedor
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Define breakpoints para ajustar el comportamiento en diferentes tamaños de pantalla
      768: {
        slidesPerView: 1, // En dispositivos móviles, mostrar solo un slide a la vez
      },
      1024:{
        slidesPerView: 3,
      }
    }
  });
}


// Llama a la función initSwiper cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  initSwiper();
});


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
      const title = item.querySelector('.accordion-title');

      title.addEventListener('click', function() {
          const content = this.nextElementSibling;
          const isActive = item.classList.contains('active');

          // Toggle active class
          item.classList.toggle('active');

          // Toggle the show class
          content.classList.toggle('show', !isActive);

          // Adjust the display property
          content.style.display = isActive ? 'none' : 'block';

          // Adjust border radius for all accordion items
          accordionItems.forEach(accItem => {
              const accTitle = accItem.querySelector('.accordion-title');
              const accContent = accItem.querySelector('.accordion-content');
              const accIsActive = accItem.classList.contains('active');

              if (accIsActive) {
                  accTitle.style.borderBottomLeftRadius = '0';
                  accTitle.style.borderBottomRightRadius = '0';
                  accContent.style.borderBottomLeftRadius = '20px';
                  accContent.style.borderBottomRightRadius = '20px';
              } else {
                  accTitle.style.borderBottomLeftRadius = '20px';
                  accTitle.style.borderBottomRightRadius = '20px';
              }

              if (accItem.previousElementSibling && accItem.previousElementSibling.classList.contains('active')) {
                  accTitle.style.borderTopLeftRadius = '0';
                  accTitle.style.borderTopRightRadius = '0';
              } else {
                  accTitle.style.borderTopLeftRadius = '20px';
                  accTitle.style.borderTopRightRadius = '20px';
              }
          });
      });
  });
});


// Función para el desplazamiento suave
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  }
}

// Event Listeners para los enlaces de navegación
document.querySelectorAll('.navlink').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
      const targetId = link.getAttribute('href').substring(1); // Obtener el ID del objetivo
      scrollToSection(targetId); // Desplazarse suavemente al objetivo
  });
});

// Función para el desplazamiento suave
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  }
}

