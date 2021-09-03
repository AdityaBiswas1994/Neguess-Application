import http from "../http-common";

class DataService {
  getAll(data) {
    return http.get("/quizOutput", data);
  }
}

export default new DataService();