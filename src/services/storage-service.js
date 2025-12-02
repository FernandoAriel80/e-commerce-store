export default class StorageService {
  static saveUser(user) {
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", user.role);
  }

  static logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
  }

  static getUser() {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");
    return { id, name, email, role };
  }

  static saveCartStorage(cart) {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  static getCartStorage() {
    const cart = localStorage.getItem("shoppingCart");
    return cart ? JSON.parse(cart) : [];
  }

  static deleteCartStorage() {
    localStorage.removeItem("shoppingCart");
  }
}
