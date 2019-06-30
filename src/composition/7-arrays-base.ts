export const length = <A>(a: A[]): number => a.length
const head = <A>(a: A[]): A => a[0]
const tail = <A>(as: A[]): A[] => {
  const [_, ...t] = as
  return t
}

type Func<A, B> = (a: A) => B
type Func2<A, B, C> = (a: A, b: B) => C

const reduce = <A, B>(f: Func2<A, B, B>) => (zero: B) => (as: A[]): B => {
  if (as.length === 0) {
    return zero
  }
  else {
    const h = head(as)
    const t = tail(as)
    return f(h, reduce<A, B>(f)(zero)(as))
  }
}


const map = <A, B>(as: A[]) => (f: Func<A, B>): B[] => {
  const append = (a: A, bs: B[]): B[] => [...bs, f(a)]
  return reduce(append)([])(as)
}

const flatMap = <A ,B>(as: A[]) => (f: Func<A, B[]>): B[] => {
  const append = (a: A, bs: B[]): B[] => [...bs, ...f(a)]
  return reduce(append)([])(as)
}

const map2 = <A, B>(as: A[]) => (f: Func<A, B>): B[] => {
  return flatMap<A,B>(as)(a => [f(a)])
}

const identity = <A>(a: A): A => a
const fold = <A, B>(as: Array<Array<A>>) => flatMap(as)(identity)

const filter = <A>(as: A[]) => (f: Func<A, boolean>): A[] => {
  const filterAppend = (a: A, filteredAs: A[]): A[] => f(a) ? [...filteredAs, a] : filteredAs
  return reduce(filterAppend)([])(as)
}

