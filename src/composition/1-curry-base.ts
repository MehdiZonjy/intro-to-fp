
export interface Product {
  code: string
  price: number
}

const lookUpProduct = (code: string, products: Product[]): Product => {
  return products.find(p => p.code === code) as Product
}

const checkProductExists = (code: string, products: Product[]): boolean => products.find(p => p.code === code) !== undefined

const sumCart = (cart: string[], catalogue: Product[]) => {
  const REGX = /^[0-9]+/
  const validcart = cart
      .filter(o => REGX.test(o))
      .filter(o => checkProductExists(o, catalogue))

  const prices = validcart.map(o => lookUpProduct(o, catalogue))
    .map(p => p.price)
  const total = prices.reduce((acc: number, p: number) => acc + p, 0)
  return total
}



const catalogue: Product[] = [
  {
    code: "001",
    price: 100
  },
  {
    code: "091",
    price: 150
  },
  {
    code: "003",
    price: 50
  }
]§

const cart = ["asdasd","001", "003", "0213123"]
const sum = sumCart(cart, catalogue)
console.log(sum)

// TODOS
// - eliminate the need to apss catalogue around by currying lookupPRoduct and checkProductExits
// - gerneralize regx into testRegex and validateProductCode first without pointfree syntax then convert to pointfree
// - intro application &  partial application