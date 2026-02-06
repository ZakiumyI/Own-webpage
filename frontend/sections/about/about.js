export async function AboutSection() {
  const html = await fetch("/sections/about/about.html").then(r => r.text());
  const container = document.createElement("div");
  container.innerHTML = html;

  const catImg = container.querySelector('.container-cat-01 img');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 900) {
      catImg.classList.add('show-cat');
    } else {
      catImg.classList.remove('show-cat');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return container;
}

