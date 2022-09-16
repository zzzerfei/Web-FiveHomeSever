import moment from 'moment'
import { DataTypes } from 'sequelize'

exports.create_date = {
  // 创建时间
  create_date: {
    type: DataTypes.DATE,
    comment: '创建时间',
    field: 'create_date',
    defaultValue: DataTypes.NOW
  },
  create_timestamp: {
    // 创建时间戳
    type: DataTypes.BIGINT,
    comment: '创建时间戳',
    field: 'create_timestamp',
    defaultValue: () => {
      return moment(new Date().setHours(new Date().getHours())).format('X')
    } /* 时间戳 */
  }
}
