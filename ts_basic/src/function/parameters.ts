// オプションパラメーターを持つ関数
export const isUsersSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is singed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is not singed in!')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is singed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 4: User is not singed in!')
    return false
  }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
