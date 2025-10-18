export default class CardService {
  static apiUrl = import.meta.env.VITE_BASE_URL;

  static async createCart(userId, products) {
    const cart = {
        userId: userId,
        products: products 
    }
    try {
      const response = await fetch(`${this.apiUrl}carts`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cart)
      });
      return response.json()
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getUserCart(userId) {
    try {
        const response = await fetch(`${this.apiUrl}carts/user${userId}`)
        return response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
  }

  static async deleteCart(cartId) {
    const response = await fetch(`${this.apiUrl}carts${cartId}`,{
        method: 'DELETE'
    })
    return response.json()
  }
}
