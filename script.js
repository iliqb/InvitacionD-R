// Mostrar el modal de bienvenida al cargar la página
window.addEventListener("load", () => {
  const modal = document.querySelector(".modal-bienvenida");
  if (modal) {
    modal.style.display = "flex";
  }

  // Asegurar que la página comience desde arriba
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
});

// Función para cerrar el modal de bienvenida
function cerrarModalWelcome() {
  const modal = document.querySelector(".modal-bienvenida");
  if (modal) {
    modal.style.display = "none";
  }
}

// Función para cerrar un menú si existe
function cerrarMenu() {
  const menu = document.querySelector(".estilos-menu");
  if (menu) {
    menu.style.display = "none";
  }
}

// Cambiar el tema del sitio (modo oscuro o claro)
function cambiarTema(tema) {
  document.body.className = tema;
}

// Configuración de la cuenta regresiva
const fechaBoda = new Date("2025-10-04T00:00:00").getTime();
const cuenta = document.getElementById("cuenta-regresiva");

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diferencia % (1000 * 60)) / 1000);

  if (cuenta) {
    cuenta.textContent = `${d} días ${h}h ${m}m ${s}s`;
  }
}, 1000);

// Control de música
const musica = document.getElementById("musica");
const btnIngresar = document.getElementById("btn-ingresar");
const btnMusica = document.querySelector(".btn-musica");
const iconoMusica = btnMusica?.querySelector("div");

// Reproducir música al hacer clic en "INGRESAR"
btnIngresar?.addEventListener("click", () => {
  cerrarModalWelcome();

  musica
    .play()
    .then(() => {
      btnMusica?.classList.remove("pausa");
      iconoMusica?.classList.remove("icono-silencio");
      iconoMusica?.classList.add("icono-sonando");
    })
    .catch((error) => {
      console.log("No se pudo reproducir la música automáticamente:", error);
    });
});

// Botón para activar o pausar música manualmente
btnMusica?.addEventListener("click", () => {
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
});

// Copiar datos bancarios al portapapeles
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

// Mostrar notificación después de copiar
function mostrarNotificacion(mensaje) {
  const notif = document.getElementById("notificacion");
  if (!notif) return;

  notif.textContent = mensaje;
  notif.style.display = "block";
  notif.style.opacity = "1";

  // Ocultar luego de 10 segundos
  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => {
      notif.style.display = "none";
    }, 300);
  }, 10000);
}

// Animación al hacer scroll (eventos como línea de tiempo)
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".event").forEach((el) => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
});
