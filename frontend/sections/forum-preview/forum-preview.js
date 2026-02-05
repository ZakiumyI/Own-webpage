export async function ForumPreviewSection() {
  const html = await fetch("/sections/forum-preview/forum-preview.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
