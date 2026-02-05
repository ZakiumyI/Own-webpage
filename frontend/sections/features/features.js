export async function FeaturesSection() {
  const html = await fetch("/sections/features/features.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
