export async function ProfileSection() {
  const html = await fetch("/sections/profile/profile.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;
  return container;
}
