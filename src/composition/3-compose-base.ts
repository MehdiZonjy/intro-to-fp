const toUpperCase = (str: string): string => str.toUpperCase()
const exclaim = (str: string): string => str + "!"
const shout = (str: string): string => exclaim(toUpperCase(str))




// create compose function
// convert shout to cuse compose