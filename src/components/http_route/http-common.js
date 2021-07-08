import axios from "axios";
class httpss {
  home_link() {
    return {
      baseURL:
        process.env.NODE_ENV === "production"
          ? "https://envgame.online/"
          : "http://localhost:3000/",
    };
  }
}
export default new httpss();
