export async function HeroSection() {
  const html = await fetch("/sections/hero/hero.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
