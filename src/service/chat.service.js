import http from "../http-common";
class ChatService {
  getAll() {
    return http.get("/chats/read");
  }
  create(data) {
    return http.post("/chats/create", data);
  }
}
export default new ChatService();
