export class CartLine {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;

  constructor(id: number, name: string, price: number, description: string, imageUrl: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }
}
