import axios from "axios";
class httpss {
  home_link() {
    return {
      baseURL:
        process.env.NODE_ENV === "production"
          ? "http://3.0.241.73:5000/"
          : "http://localhost:3000/",
    };
  }
}
export default new httpss();
