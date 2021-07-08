import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://3.0.241.73:8080/api"
      : "http://localhost:8080/api",
});
