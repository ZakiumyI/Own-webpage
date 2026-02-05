export async function HeaderSection() {
  const html = await fetch("/sections/header/header.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  // Botones de navegación
  container.querySelector("#nav-home").addEventListener("click", () => {
    window.appRouter.navigate("home");
  });

  container.querySelector("#nav-profile").addEventListener("click", () => {
    window.appRouter.navigate("profile");
  });

  return container;
}

