import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'react-bootstrap'

import './order.less'

export default class Order extends React.PureComponent {

  render() {
    const {
      item:{
        name,
        dateCreate,
        dateExecution,
        userName,
        label
      }
    } = this.props

    return ( 
      <div className="order">
          <div className={label ? "order__name danger" : "order__name"}>
          Название: {name}
          {!!label && <Label bsStyle="danger">{label}</Label>}
          </div>
        <div className="order__row">Дата создания: {dateCreate}</div>
        <div className="order__row">Дата ожидания: {dateExecution}</div>
        <div className="order__row">Заказ создан: {userName}</div>
      </div>
    )
  }
}   

Order.defaultProps = {
  label: ''
};

Order.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateCreate: PropTypes.string,
  userName: PropTypes.string,
  dateExecution: PropTypes.string,
  label: PropTypes.string
}