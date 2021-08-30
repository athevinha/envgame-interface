import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.envgame.online/api/envgame/conchuot2945@/2945"
      : "http://localhost:8080/api/envgame/conchuot2945@/2945",
});
