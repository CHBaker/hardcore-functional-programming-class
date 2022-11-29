const { curry, compose } = require('ramda')

const add = (x, y) => x + y

const toUpper = str => str.toUpperCase()

const exclaim = str => str + '!'

const first = xs => xs[0]

// const compose = (f, g) => x => f(g(x))

// const shout = compose(exclaim, toUpper)

// console.log(shout('tears'))

// const shoutT = compose(first, compose(exclaim, toUpper))

// console.log(shoutT('tears'))

const shoutRamda = compose(first, exclaim, toUpper)

console.log(shoutRamda('tears'))

const loudFirst = compose(toUpper, first)
const shout = compose(exclaim, loudFirst)

console.log(shout('tears'))