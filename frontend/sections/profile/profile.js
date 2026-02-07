export async function ProfileSection() {
  const html = await fetch("/sections/profile/profile.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  /* ===============================
     Fondo animado (TU código)
  =============================== */
  const bgSpace = container.querySelector(".bg-space");

  function updateBgSpace() {
    const trigger = window.innerHeight * 3; // 300vh
    const scrollY = window.scrollY;

    if (scrollY < trigger) {
      bgSpace.style.display = "none";
      bgSpace.style.position = "absolute";
    } else {
      bgSpace.style.display = "block";
      bgSpace.style.position = "fixed";
    }
  }

  updateBgSpace();
  window.addEventListener("scroll", updateBgSpace);

  /* ===============================
     Tesistas dinámicos
  =============================== */
  const tesisContainer = container.querySelector(".tesis-content");

  if (tesisContainer) {
    const tesistas = await fetch("/data/tesistas.json").then(r => r.json());

    tesistas.forEach(t => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tesis-tarjeta";

      const periodo = t.año_termino === null
        ? `${t.año_inicio} a la fecha`
        : `${t.año_inicio} a ${t.año_termino}`;

      tarjeta.innerHTML = `
        <div class="tarjeta-imagen">
          <img src="/assets/images/perfiles/${t.imagen}.avif" alt="${t.nombre}">
          ${periodo}
        </div>
        <div class="tarjeta-contenido">
          <div class="tarjeta-contenido-cargo">
            ${t.title}
          </div>
          <div class="tarjeta-contenido-nombre">
            ${t.nombre}
          </div>
          <div class="tarjeta-contenido-descripcion">
            ${t.descripcion}
          </div>
        </div>
      `;

      tesisContainer.appendChild(tarjeta);
    });
  }

  return container;
}
