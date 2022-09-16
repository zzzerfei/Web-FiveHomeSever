import { seq } from './init'

class POOL {
  static async poolInit() {
    seq
      .authenticate()
      .then(() => {
        console.log('mysql success')
      })
      .catch((error: string) => {
        console.log('mysql fail' + error)
      })
  }
}
module.exports = POOL
