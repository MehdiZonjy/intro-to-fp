export interface Product {
  code: string
  price: number
}

type CreateLookUpProduct = (products: Product[]) => (code: string) => Product
type LookUpProduct = (code: string) => Product
const createLookUpProduct: CreateLookUpProduct = (products: Product[]) => (code: string): Product =>
  products.find(p => p.code === code) as Product


type CreateCheckProductExists = (catalogue: Product[]) => (code: string) => boolean
type CheckProductExists = (code: string) => boolean
const createCheckProductExists: CreateCheckProductExists = (catalogue: Product[]) => (code: string): boolean => catalogue.find(p => p.code === code) !== undefined




const testRegx = (regx: RegExp) => regx.test
const validateProductCode = testRegx(/^[0-9]+/)


const sumCart = (cart: string[], checkProductExists: CheckProductExists, lookUpProduct: LookUpProduct) => {
  const validcart = cart
    .filter(validateProductCode)
    .filter(checkProductExists)

  const prices = validcart.map(o => lookUpProduct(o))
    .map(p => p.price)
  
  return  prices.reduce((acc: number, p: number) => acc + p, 0)
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
]



const cart = ["001", "003", "0213123"]
const lookupProd = createLookUpProduct(catalogue)
const checkProdExists = createCheckProductExists(catalogue)
const totalSum = sumCart(cart, checkProdExists, lookupProd)
console.log(totalSum)

// - Introduce Composition for map.map
// - Create Compose functiond
// - create Sum and Add