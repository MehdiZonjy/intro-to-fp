const fs = require('fs')
export const getJSON = <T>(path: string): T => {
    const str = fs.readFileSync(path, 'utf-8')
    return JSON.parse(str) as T
}


const doStuff2 = () => {
    let authors = undefined
    let books = undefined
    try {
        authors = getJSON('authors.json')
    } catch (err) { // log & report}
        try {
            books = getJSON('books.json')
        } catch (err) {// log & report }

        }
    }
}
