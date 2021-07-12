import http from "../http-common";
class Feedback {
  getAll() {
    return http.get("/feedbacks/read");
  }
  create(data) {
    return http.post("/feedbacks/create", data);
  }
}
export default new Feedback();
