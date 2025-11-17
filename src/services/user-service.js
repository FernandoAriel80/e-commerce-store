import { API_MOCK_API } from "../environment/api-services";

export default class UserService {
  static apiUrl = API_MOCK_API;

  static async registerUser(data) {
    try {
      const response = await fetch(`${this.apiUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role: "user" }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async loginUser(data) {
    try {
      const response = await fetch(`${this.apiUrl}/users`);
      const results = await response.json();
      const user = results.find((resut) => resut.email == data.email);
      return user ?? null;
    } catch (error) {
      console.error(error);
    }
  }
  static async getUserById(id) {
    try {
      const response = await fetch(`${this.apiUrl}/users/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
