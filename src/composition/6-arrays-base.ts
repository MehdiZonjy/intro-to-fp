export const length = <A>(a: A[]): number => a.length
const head = <A>(a: A[]): A => a[0]
const tail = <A>(as: A[]): A[] => {
  const [_, ...t] = as
  return t
}

// create reduce
// map
// filter
// flatMap
// map using flatMap
// fold using identity

