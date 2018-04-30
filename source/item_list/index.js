import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Item from './item'

import './style.less'

export default class ItemList extends React.Component {

  render() {

    const { 
      items,
      titel,
      titelEmpty 
      } = this.props

    return (
      <div>
        <div className="tab-name">{titel}</div>
          {
            items.length ? <div className='orders'>
              {
                items.map((item) => {
                  return <Item key={item.id} item={item}/>
                })  
              } 
            </div> : <div className='no-orders'>{titelEmpty}</div>
          }
      </div>
    ) 
  }
}   

ItemList.defaultProps = {
  items: [],
  titel: '',
  titelEmpty: 'Список пуст'
}

ItemList.PropTypes = {
  items: PropTypes.array,
  titel: PropTypes.string,
  titelEmpty: PropTypes.string
}