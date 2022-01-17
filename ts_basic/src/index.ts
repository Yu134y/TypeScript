// 03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04.関数の型定義
// import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic'
// import { isUsersSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript!')
// logMessage3('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// isUsersSignedIn('ABC', 'yu')
// isUsersSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameters sample 5:', sum)

// 05.オブジェクトの型定義
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'

// objectSample()
// typeAliasSample()

// 06.配列とタプルの型定義
// import arraySample from './array/array'
// import tupleSample from './array/tuple'

// arraySample()
// tupleSample()

// 07.ジェネリック型とポリモーフィズム
import genericsSample from './generics/basic'
import advancedSample from './generics/advanced'

genericsSample()
advancedSample()
