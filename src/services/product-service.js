import { API_MOCK_API } from "../environment/api-services";

export default class ProductService {
  static apiUrl = API_MOCK_API;

  static async getAllProducts(page = 1, limit = 8) {
    try {
      const data = await fetch(
        `${this.apiUrl}/products?page=${page}&limit=${limit}`
      );
      return await data.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getProductById(id) {
    try {
      const data = await fetch(`${this.apiUrl}/products/${id}`);
      return await data.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getByCategory(category) {
    try {
      const data = await fetch(`${this.apiUrl}/products`);
      const results = await data.json();
      const productBycategory = results.filter(
        (result) => result.category == category
      );
      return productBycategory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
