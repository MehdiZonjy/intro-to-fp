
interface Product {
  code: string
  price: number
}

const getPrice = (p: Product): number => p.price

type CreateLookUpProduct = (products: Product[]) => (code: string) => Product
type LookUpProduct = (code: string) => Product
const createLookUpProduct: CreateLookUpProduct = (products: Product[]) => (code: string): Product => 
   products.find(p => p.code === code) as Product


type CreateCheckProductExists = (catalogue: Product[]) => (code: string) => boolean
type CheckProductExists = (code: string) => boolean
const createCheckProductExists: CreateCheckProductExists = (catalogue: Product[]) => (code: string) : boolean => catalogue.find(p => p.code === code) !== undefined

const add = (a: number, b: number): number => a + b
const sum = (as: number[]): number => as.reduce(add, 0)



type Action1<A,B> = (a: A) => B
const compose2 = <A,B,C>(f: Action1<B,C>, g: Action1<A, B>) => (a: A): C => f(g(a))


const testRegx = (regx: RegExp) => regx.test
const validateProductCode = testRegx(/^[0-9]+/)


const sumCart = (cart: string[], checkProductExists: CheckProductExists, lookUpProduct: LookUpProduct) => {
  const validcart = cart
      .filter(validateProductCode)
      .filter(checkProductExists)

  const prices = validcart.map(compose2(getPrice, lookUpProduct))
  return sum(prices)
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
const totalSum = sumCart(cart, checkProdExists,lookupProd)
console.log(totalSum)