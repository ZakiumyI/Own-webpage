import { SearchComponent } from "../../components/search/search.js";

export async function HeaderSection() {
  const html = await fetch("/sections/header/header.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  const nav = container.querySelector(".header-nav");

  // fade-in
  setTimeout(() => nav.classList.add("visible"), 50);

  // Botones
  container.querySelectorAll("[data-route]").forEach(btn => {
    btn.addEventListener("click", () => {
      window.appRouter.navigate(btn.dataset.route);
    });
  });

  const searchSlot = container.querySelector("#header-search");
  if (searchSlot) {
    const search = await SearchComponent();
    searchSlot.appendChild(search);
  }

  return container;
}
