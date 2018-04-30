import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'

import Order from './order'

import './style.less'

class OrdersList extends React.Component {

  render() {

    const { orders } = this.props

    return (
      <div>
        <div className="tab-name">Заказы</div>
          {
            orders.length ? <div className='orders'>
              {
                orders.map((item) => {
                  return <Order key={item.id} item={item}/>
                })  
              } 
            </div> : <div className='no-orders'>Заказов нет</div>
          }
      </div>
    ) 
  }
}   

OrdersList.defaultProps = {
  orders: []
}

OrdersList.PropTypes = {
  orders: PropTypes.array
}

export default connect(
  (store) => ({
    orders: store.ordersList.orders
  })
)(OrdersList);