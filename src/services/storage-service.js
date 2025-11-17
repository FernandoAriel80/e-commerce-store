export default class StorageService {
  static saveUser(user) {
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", user.role);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  static logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  static getUser() {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
     const role = localStorage.getItem("role");
    return { id, name, email, role };
  }
}
