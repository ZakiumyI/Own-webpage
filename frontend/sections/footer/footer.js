export async function FooterSection() {
  const html = await fetch("/sections/footer/footer.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
