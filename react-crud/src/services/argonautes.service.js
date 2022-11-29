import http from "../http.common";

class ArgonautesDataService {
  getAll() {
    return http.get("/argonautes");
  }
  postMember(member_name) {
    return http.post("/argonaute", member_name);
  }
}

export default new ArgonautesDataService();
