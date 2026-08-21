import { sum } from "./utils/math";
import type { Product } from "./models/Product";

const total = sum(10, 5);
const product: Product = { id: 1, name: "Teclado", price: 45 };

console.log(total);
console.log(product);
