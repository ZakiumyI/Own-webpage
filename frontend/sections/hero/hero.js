export async function HeroSection() {
  const html = await fetch("/sections/hero/hero.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  // ---- HEADER SCROLL HIDE/SHOW ----
  const header = document.querySelector("header");
  if (header) {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const vh = window.innerHeight / 100;
      const scrollY = window.scrollY;

      if (scrollY < 1 * vh || scrollY > 120 * vh) {
        // mostrar header
        header.style.transform = "translateY(0)";
        header.style.transition = "transform 0.3s ease";
      } else if (scrollY >= 0 * vh && scrollY <= 120 * vh) {
        // ocultar header
        header.style.transform = "translateY(calc(-1 * (var(--header-height) + 2 * var(--spacing-header-tb))))";
        header.style.transition = "transform 0.3s ease";
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
  }

  return container;
}
