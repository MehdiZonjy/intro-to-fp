const fs = require('fs')
export const getJSON = <T>(path: string): T => {
  const str = fs.readFileSync(path, 'utf-8')
  return JSON.parse(str) as T
}

interface Success<A> {
  val: A
  _tag: 'success'
  map: <B>(f: Func<A, B>) => Result<B>
}

interface Failure<A> {
  error: Error
  _tag: 'failure'
  map: <B>(f: Func<A, B>) => Result<B>
}

type Result<T> = Success<T> | Failure<T>
type Action<A> = () => A
type Func<A, B> = (a: A) => B
const safeTry = <A>(action: Action<A>): Result<A> => {
  try {
    return success(action())
  } catch (error) {
    return failure(error)
  }
}

const success = <A>(a: A): Result<A> => ({
  val: a,
  _tag: 'success',
  map: <B>(f: Func<A, B>): Result<B> => success(f(a))
})
const failure = <A>(err: Error): Result<A> => ({
  _tag: 'failure',
  error: err,
  map: <B>(_: Func<A, B>): Result<B> => failure(err)
})

const doStuff2 = () => {
  const authorsResult = safeTry(() => getJSON<number>('authors.json'))
  if (authorsResult._tag === 'failure') {
    // log & report
    return
  }
  const authors = authorsResult.val

  const booksResult = safeTry(() => getJSON('books.json'))
  if (booksResult._tag === 'failure') {
    // log & report
    return
  }
  const books = booksResult.val
  // more stuff
}


