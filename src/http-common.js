import axios from "axios";
// const { SERVER_BUILD_URL, SERVER_LOCAL_URL } = process.env;
export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.envgame.online/api/envgame"
      : "http://localhost:8080/api/envgame",
});
