export default function objectSample() {
  const a: object = {
    name: 'yu',
    age: 22,
  }
  // a.name  //aというobjectにはnameというプロパティがないとエラーが出る

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample2:', country)

  // オプショナルとreadonly
  const profile: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 22,
    lastName: 'Yamada',
    firstName: 'Taro',
  }

  profile.gender = 'male'
  profile.lastName = 'Suzuki'
  // profile.firstName = 'Ichiro'  // firstNameプロパティはreadonlyなので再代入不可
  console.log('Object object sample3:', profile)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
