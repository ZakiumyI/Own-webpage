export async function ExtrasHomeSection() {
  const html = await fetch("/sections/extras-home/extras-home.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
