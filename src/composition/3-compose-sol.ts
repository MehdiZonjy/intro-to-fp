export type Action1<A,B> = (a: A) => B
const compose2 = <A,B,C>(f: Action1<B,C>, g: Action1<A, B>) => (a: A): C => f(g(a))

const toUpperCase = (str: string): string => str.toUpperCase()
const exclaim = (str: string): string => str + "!"
const shout = compose2(exclaim, toUpperCase)

