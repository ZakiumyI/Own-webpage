export async function ProfileSection() {
  const html = await fetch("/sections/profile/profile.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  const bgSpace = container.querySelector(".bg-space");

  function updateBgSpace() {
    const trigger = window.innerHeight * 3; // 300vh
    const scrollY = window.scrollY;

    if (scrollY < trigger) {
      bgSpace.style.display = "none";
      bgSpace.style.position = "absolute"; // o lo que uses antes
    } else {
      bgSpace.style.display = "block";
      bgSpace.style.position = "fixed";
    }
  }

  updateBgSpace();
  window.addEventListener("scroll", updateBgSpace);

  return container;
}
