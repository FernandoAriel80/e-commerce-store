import { API_MOCK_API } from "../environment/api-services";

export default class ProductService {
  static apiUrl = API_MOCK_API;

  static async getAllProducts(page = 1, limit = 8) {
    try {
      const data = await fetch(
        `${this.apiUrl}/products?page=${page}&limit=${limit}&sortBy=id&order=desc`
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
      ).slice(0, 4);
      return productBycategory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async createProduct(product) {
    try {
      const data = await fetch(`${this.apiUrl}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          image:
            "https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1711/alekseyvanin171102000/90307907-vector-del-icono-de-la-foto-del-paisaje-muestra-plana-llenada-pictograma-s%C3%B3lido-aislado-en-blanco.jpg?ver=6",
        }),
      });
      return await data.json();
    } catch (error) {
      console.error(error);
    }
  }

  static async updateProduct(product, id) {
    try {
      const data = await fetch(`${this.apiUrl}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      return await data.json();
    } catch (error) {
      console.error(error);
    }
  }
  static async daleteProduct(id){
    try {
      const data = await fetch(`${this.apiUrl}/products/${id}`,{
        method: "DELETE",
      })
      return await data.json()
    } catch (error) {
      console.error(error)
    }

  }
}
