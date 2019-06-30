const foo = (n: number) : number => {
  let x = 0
  if(n % 2 === 1) {
    x = n -1
  }
  return x * x
}

// - expIf