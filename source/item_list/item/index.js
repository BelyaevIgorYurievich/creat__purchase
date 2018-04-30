import React from 'react'
import PropTypes from 'prop-types'
import { Label, Button } from 'react-bootstrap'

import './style.less'

export default class Item extends React.PureComponent {

  render() {
    const {
      item:{
        name,
        dateCreate,
        status,
        userName,
        label
      }
    } = this.props

    return ( 
      <div className="order">
        <div className="order__name">Название: {name}</div>
        <div className="order__row">Автор: {userName}</div>
        <div className="order__row">Дата создания: {dateCreate}</div>
        <div className="order__row">Статус: {status}</div>
        <Button block bsStyle="success">Подробная Информа</Button>
      </div>
    )
  }
}   

Item.defaultProps = {
  label: ''
};

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateCreate: PropTypes.string,
  userName: PropTypes.string,
  status: PropTypes.string,
  label: PropTypes.string
}