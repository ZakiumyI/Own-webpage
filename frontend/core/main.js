import { HomePage } from "../pages/home.page.js";
import { ProfilePage } from "../pages/profile.page.js";

const routes = {
  home: HomePage,
  profile: ProfilePage
};

window.appRouter = {
  navigate: async (page) => {
    if (!routes[page]) return console.warn("Page not found:", page);
    await routes[page]();
  }
};

window.appRouter.navigate("home");
