import axios from "axios";
class httpss {
  home_link() {
    return {
      baseURL:
        process.env.NODE_ENV === "production"
          ? "http://13.212.243.248:3000/"
          : "http://localhost:3000/",
    };
  }
}
export default new httpss();
