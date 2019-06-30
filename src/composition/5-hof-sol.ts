type Func<A> = () => A
const expIf = <A>(condition: boolean, onTrue: Func<A>, onFalse: Func<A>): A => {
  if (condition) {
    return onTrue()
  }
  return onFalse()
}

const expIfV2 = <A>(params: { condition: boolean, onTrue: Func<A>, onFalse: Func<A> }): A => {
  if (params.condition) {
    return params.onTrue()
  }
  return params.onFalse()
}

export const foo2 = (n: number): number => {
  const x = expIfV2({
    condition: n % 2 === 1,
    onTrue: () => n - 1,
    onFalse: () => n
  })
  return x * x
}