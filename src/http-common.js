import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.envgame.online/api"
      : "http://localhost:8080/api",
});
