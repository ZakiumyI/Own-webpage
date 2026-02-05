export async function AboutSection() {
  const html = await fetch("/sections/about/about.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
