window.addEventListener("load", () => {
  const modal = document.querySelector(".modal-bienvenida");
  modal.style.display = "flex";
});
// Función para cerrar el modal
function cerrarModalWelcome() {
  const modal = document.querySelector(".modal-bienvenida");
  modal.style.display = "none";
}

// Función para cerrar el menú
function cerrarMenu() {
  const menu = document.querySelector(".estilos-menu");
  menu.style.display = "none";
}

// Función para cambiar el tema
function cambiarTema(tema) {
  document.body.className = tema; // Cambiar el tema del body
}
// cuenta regresiva
const fechaBoda = new Date("2025-10-04T00:00:00").getTime();
const cuenta = document.getElementById("cuenta-regresiva");

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diferencia % (1000 * 60)) / 1000);

  cuenta.textContent = `${d} días ${h}h ${m}m ${s}s`;
}, 1000);

// musica
const musica = document.getElementById("musica");
const btnIngresar = document.getElementById("btn-ingresar");
const btnMusica = document.querySelector(".btn-musica");
const iconoMusica = btnMusica.querySelector("div"); // Ícono dentro del botón

btnIngresar.addEventListener("click", () => {
  cerrarModalWelcome();

  musica
    .play()
    .then(() => {
      console.log("Música reproduciéndose");
      btnMusica.classList.remove("pausa");
      iconoMusica.classList.remove("icono-silencio");
      iconoMusica.classList.add("icono-sonando");
    })
    .catch((error) => {
      console.log("No se pudo reproducir la música automáticamente:", error);
    });
});

btnMusica.addEventListener("click", reproducirMusica);

function reproducirMusica() {
  if (musica.paused) {
    musica
      .play()
      .then(() => {
        btnMusica.classList.remove("pausa");
        iconoMusica.classList.remove("icono-silencio");
        iconoMusica.classList.add("icono-sonando");
      })
      .catch((error) => {
        console.log("Error al reproducir:", error);
      });
  } else {
    musica.pause();
    btnMusica.classList.add("pausa");
    iconoMusica.classList.remove("icono-sonando");
    iconoMusica.classList.add("icono-silencio");
  }
}

function cerrarModalWelcome() {
  const modal = document.querySelector(".modal-bienvenida");
  if (modal) modal.style.display = "none";
}

function copyInfo() {
  const textoACopiar = "012320015086639718";

  navigator.clipboard
    .writeText(textoACopiar)
    .then(() =>
      mostrarNotificacion(
        "Cuenta copiada al portapapeles:\nBBVA | Erika Daleth I. Aguilera Limón — 012320015086639718"
      )
    )
    .catch((err) => console.error("Error al copiar al portapapeles: ", err));
}

function mostrarNotificacion(mensaje) {
  const notif = document.getElementById("notificacion");
  notif.textContent = mensaje;
  notif.style.display = "block";
  notif.style.opacity = "1";

  // Ocultar luego de 3 segundos
  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => {
      notif.style.display = "none";
    }, 300);
  }, 10000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".event").forEach((event) => {
  observer.observe(event);
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header.inicio");
  const noHeader = document.querySelector(".no-header");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando el carrusel es visible
          header.style.opacity = "0";
          header.style.visibility = "hidden";
          header.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
        } else {
          // Cuando el carrusel no es visible
          header.style.opacity = ".8";
          header.style.visibility = "visible";
        }
      });
    },
    {
      threshold: 0.1, // Activa cuando el 10% del carrusel es visible
    }
  );

  observer.observe(noHeader);
});

// Al cargar la página
window.onload = function () {
  // Vuelve al top inmediatamente
  window.scrollTo(0, 0);

  // Opcional: Suavizado para navegadores modernos
  window.scrollTo({
    top: 0,
    behavior: "auto", // 'smooth' para animación (quita el auto si quieres efecto)
  });
};
