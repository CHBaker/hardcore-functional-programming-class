const { curry } = require('ramda')

const add = (x,y) => x + y

const toPair = f => ([x, y]) => f(x, y)

const fromPair = f => (x, y) => f([x, y])

const result = fromPair(toPair(add))(1, 2)

console.log('fromPairResult: ', result)

const flip = f => (y, x) => f(x, y)

const flipResult = flip(add)(1, 2)

console.log('flipResult: ', flipResult)

// const curry = f => x => y => f(x, y)

const curriedAdd = curry(add)

const increment = curriedAdd(1)

const addCurryResult = increment(2)

console.log('addCurryResult: ', addCurryResult)

const modulo = curry((x, y) => y % x)

const isOdd = modulo(2) // (2, y) => 2 % y

const moduloResult = isOdd(3)

console.log('moduloResult: ', moduloResult)

const filter = curry((f, xs) => xs.filter(f))

const getOdds = filter(isOdd)

const filterGetOddsResult = getOdds([1,2,3,4,5])

console.log('filterGetOddsResult: ', filterGetOddsResult)

const replace = curry(
    (regex, replacement, str) => str.replace(regex, replacement)
)

const replaceVowels = replace(/[AEIOU]/ig, '!')

const replaceVowelsResult = replaceVowels('Hey I have words')

console.log('replaceVowelsResult: ', replaceVowelsResult)

