import { Sequelize } from 'sequelize-typescript'
import { config } from '../../index'

// 表字段
export const seq = new Sequelize(
  config.database.DATABASE, // 数据库名
  config.database.USERNAME, // 用户名
  config.database.PASSWORD, // 用户密码
  {
    dialect: 'mysql', // 数据库使用mysql
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    host: config.database.HOST, // 数据库服务器ip
    port: config.database.MYSQL_PORT, // 数据库服务器端口
    timezone: '+08:00', // 设置东八区
    define: {
      // 字段以下划线（_）来分割（默认是驼峰命名风格）
      underscored: true
    }
  }
)

// module.exports = seq
