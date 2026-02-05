import { HeaderSection } from "../sections/header/header.js";
import { FooterSection } from "../sections/footer/footer.js";
import { HeroSection } from "../sections/hero/hero.js";
import { FeaturesSection } from "../sections/features/features.js";
import { ExtrasHomeSection } from "../sections/extras-home/extras-home.js";
import { ForumPreviewSection } from "../sections/forum-preview/forum-preview.js";
import { AboutSection } from "../sections/about/about.js";
import { ProfileSection } from "../sections/profile/profile.js";

export async function HomePage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Header
  const header = await HeaderSection();
  document.getElementById("header").innerHTML = "";
  document.getElementById("header").appendChild(header);

  // Sections
  app.appendChild(await HeroSection());
  app.appendChild(await ProfileSection());
  // app.appendChild(await AboutSection());
  app.appendChild(await ForumPreviewSection());
  app.appendChild(await FeaturesSection());
  app.appendChild(await ExtrasHomeSection());

  // Footer
  app.appendChild(await FooterSection());
}
