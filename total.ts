const fs = require('fs')
const getJSON = <T>(path: string): T => {
  const str = fs.readFileSync(path, 'utf-8')
  return JSON.parse(str) as T
}

const doStuff = () => {
  const authors = getJSON('authors.json')
  const books = getJSON('books.json')
  // join lists and do stuff
}

const doStuff2 = () => {
  let authors = undefined
  let books = undefined
  try {
     authors = getJSON('authors.json')
  }catch(err) { // log & report}
  try {
    books = getJSON('books.json')
  }catch(err){// log & report }

}



const toString = (n: number): string => n.toString()