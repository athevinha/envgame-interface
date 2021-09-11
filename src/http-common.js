import axios from "axios";
const SERVER_BUILD_URL = "HIDE URL SERVER",
  SERVER_LOCAL_URL = "http://localhost:8080/api/envgame";
export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? SERVER_BUILD_URL : SERVER_LOCAL_URL,
});
