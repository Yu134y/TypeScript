// 基本の型定義(basic)
import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

primitiveSample()
notExistSample()
anySample()
unknownSample()

// 関数の型定義(function)
import { logMessage, logMessage2, logMessage3, logMessage4, logMessage5, logMessage6 } from './function/basic'
import { isUsersSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
logMessage2('Hello TypeScript!')
logMessage3('Hello TypeScript!')
logMessage4('Hello TypeScript!')
logMessage5('Hello TypeScript!')
logMessage6('Hello TypeScript!')
isUsersSignedIn('ABC', 'yu')
isUsersSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log(`Function parameters sample 5: ${sum}`)

// オブジェクトの型定義(object)
import objectSample from './object/object'
import typeAliasSample from './object/alias'

objectSample()
typeAliasSample()

// 配列とタプルの型定義(array)
import arraySample from './array/array'
import tupleSample from './array/tuple'

arraySample()
tupleSample()

// ジェネリック型とポリモーフィズム(generics)
import genericsSample from './generics/basic'
import advancedSample from './generics/advanced'

genericsSample()
advancedSample()

// 非同期処理の型定義(asynchronous)
import callbackSample from './asynchronous/callback'
import promiseSample from './asynchronous/promise'
import asyncAwaitSample from './asynchronous/asyncAwait'

callbackSample()
promiseSample()
asyncAwaitSample()
