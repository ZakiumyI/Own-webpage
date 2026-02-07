export async function FeaturesSection() {
  const html = await fetch("/sections/features/features.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  const titleHeader = container.querySelector(".proyectos-title-header");
  const titleText = container.querySelector(".proyectos-title-text");

  const center = container.querySelector(".proyectos-detail-center");
  const prevBtn = container.querySelector("#prevBtn");
  const nextBtn = container.querySelector("#nextBtn");
  const pagination = container.querySelector(".proyectos-pagination");

  if (!center || !prevBtn || !nextBtn || !pagination) return container;

  let mode = "projects"; // estado inicial
  let data = [];
  let currentPage = 0;
  const itemsPerPage = 4;
  let totalPages = 0;
  let track;
  let dots = [];

  /* ===== TITULO ===== */
  function renderTitle() {
    titleHeader.textContent = mode === "projects" ? "Proyectos" : "Videos";
    titleText.textContent =
      mode === "projects"
        ? "Click aquí para ver videos"
        : "Click aquí para ver proyectos";
  }

  titleHeader.style.cursor = "pointer";
  titleHeader.addEventListener("click", () => {
    mode = mode === "projects" ? "videos" : "projects";
    loadData();
  });

  /* ===== LOAD DATA ===== */
  async function loadData() {
    renderTitle();

    const url =
      mode === "projects"
        ? "/data/projects.json"
        : "/data/videos.json";

    data = await fetch(url).then(r => r.json());

    currentPage = 0;
    totalPages = Math.ceil(data.length / itemsPerPage);

    center.innerHTML = "";
    pagination.innerHTML = "";
    dots = [];

    track = document.createElement("div");
    track.className = "proyectos-track";
    center.appendChild(track);

    renderCards();
    renderDots();
    updateCarousel();
  }

  /* ===== CARDS ===== */
  function renderCards() {
    track.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "proyecto";

      const imagePath =
        mode === "projects"
          ? `/assets/images/proyectos/${item.imagen}`
          : `/assets/images/videos/${item.imagen}`;

      card.innerHTML = `
        <div class="proyecto-img">
          <img src="${imagePath}" alt="${item.title}">
          <div class="proyecto-img-title">${item.title}</div>
        </div>

        ${
          item.subtitle
            ? `<div class="proyecto-subtitle">${item.subtitle}</div>`
            : ""
        }

        ${
          item.fecha
            ? `<div class="proyecto-fecha">${item.fecha}</div>`
            : ""
        }

        <div class="proyecto-desc">${item.descripcion}</div>

        <a href="${item.url}" target="_blank">
          ${mode === "projects" ? "Ver proyecto" : "Ver video"}
        </a>
      `;

      track.appendChild(card);
    });
  }

  /* ===== DOTS ===== */
  function renderDots() {
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("div");
      dot.className = "pagination-dot";
      dot.addEventListener("click", () => {
        currentPage = i;
        updateCarousel();
      });
      pagination.appendChild(dot);
      dots.push(dot);
    }
  }

  /* ===== UPDATE ===== */
  function updateCarousel() {
    track.style.transform = `translateX(-${currentPage * 102}%)`;

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentPage)
    );
  }

  /* ===== CONTROLS ===== */
  prevBtn.addEventListener("click", () => {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentPage = (currentPage + 1) % totalPages;
    updateCarousel();
  });

  /* ===== INIT ===== */
  loadData();

  return container;
}
