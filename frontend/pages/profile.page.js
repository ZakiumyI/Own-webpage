import { HeaderSection } from "../sections/header/header.js";
import { FooterSection } from "../sections/footer/footer.js";
import { ForumPreviewSection } from "../sections/forum-preview/forum-preview.js";

export async function ProfilePage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Header
  const header = await HeaderSection();
  document.getElementById("header").innerHTML = "";
  document.getElementById("header").appendChild(header);

  // Sections
  app.appendChild(await ForumPreviewSection());

  // Footer
  app.appendChild(await FooterSection());
}
