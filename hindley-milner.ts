// Add :: ToString -> Number -> String
export type ToString = (a: number) => string
// Add :: Number -> Number -> Number
export type Add = (a: number) => (b: number) => Number


// Identity :: a -> a
type Identity = <A>(a: A) => A



