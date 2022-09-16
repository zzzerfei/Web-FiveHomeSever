// const lowdb = require('../db/lowdb/index')
// const KiteConfig = require('../kite.config')
// const config = lowdb.read().value()

export const config = {
  database: {
    /* database set */
    /* DATABASE: config.mysql.database, // 使用哪个数据库
    USERNAME: config.mysql.username, // 用户名
    PASSWORD: config.mysql.password, // 口令
    SQL_TYPE: 'mysql', // 数据库类型
    HOST: config.mysql.host, // 主机名
    MYSQL_PORT: config.mysql.mysql_port // 端口号，MySQL默认3306 */
    DATABASE: 'five-home', // 使用哪个数据库
    USERNAME: 'root', // 用户名
    PASSWORD: '123123', // 口令
    SQL_TYPE: 'mysql', // 数据库类型
    HOST: 'localhost', // 主机名
    MYSQL_PORT: 3306 // 端口号，MySQL默认3306
  }
}
