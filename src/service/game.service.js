import http from "../http-common";
class GameService {
  getAll() {
    return http.get("/games/read");
  }

  get(id) {
    return http.get(`/games/${id}`);
  }

  create(data) {
    return http.post("/games/create", data);
  }
  update(id, data) {
    return http.put(`/games/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/games/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/games`);
  }

  findByTitle(title) {
    return http.get(`/games?title=${title}`);
  }
}
export default new GameService();
