export async function SearchComponent() {
  const html = await fetch("/components/search/search.html").then(r => r.text());

  const container = document.createElement("div");
  container.innerHTML = html;

  const root = container.firstElementChild;
  const input = root.querySelector("input");

  input.addEventListener("input", (e) => {
    const value = e.target.value.trim();

    console.log("Search:", value);


  });

  return root;
}
