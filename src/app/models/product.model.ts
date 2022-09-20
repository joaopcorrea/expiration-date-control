export interface Product {
  id: number,
  description: string,
  barcode: string,
  name: string,
  image: string,
  creationDate: Date,
  expirationDate: Date,
  category: string,
  group: string,
  price: number,
  quantity: number
}