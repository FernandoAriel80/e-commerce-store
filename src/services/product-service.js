export default class ProductService {
  static apiUrl = import.meta.env.VITE_BASE_URL;

  static async getAllProducts() {
    try {
      const data = await fetch(`${this.apiUrl}products`);
      return await data.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getProductById(id) {
    try {
        const data = await fetch(`${this.apiUrl}products/${id}`)
        return data.json()
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getByCategory(category) {
    try {
      const data = await fetch(`${this.apiUrl}products/category/${category}?limit=4`)
      return data.json()
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
