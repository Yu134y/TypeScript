export default function callbackSample() {
  const url = 'https://api.github.com/users/Yu134y'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => void

  // コールバックで呼び出す非同期処理(fetch)
  const fetchProfile: FetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json: Profile) => {
            console.log('Asynchronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  // 非同期処理が完了していないのでPromise<pending>が表示される
  console.log('Asynchronous Callback Sample 2:', profile)
}
