import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Row, Nav, NavItem, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

import ItemList from 'ItemList'
import CreatOrder from 'CreatOrder'

import './style.less'


class App extends React.Component {

  render() {

    const { 
      orders,
      applications
    } = this.props

    return (
      <Tab.Container defaultActiveKey='orders_list'>
        <Row className='clearfix'>
          <Col sm={2}>
            <Nav bsStyle='pills' stacked>
              <NavItem eventKey='orders_list'>Заказы</NavItem>
              <NavItem eventKey='creat_order'>Создание заказа</NavItem>
              <NavItem eventKey='application_list'>Заявки</NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content animation>
              <Tab.Pane eventKey='orders_list'>
                <ItemList titel='Заказы' items={orders}/>
              </Tab.Pane>
              <Tab.Pane eventKey='creat_order'>
                <CreatOrder/>
              </Tab.Pane>
              <Tab.Pane eventKey='application_list'>
                <ItemList titel='Заявки' items={applications}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}   

App.propTypes = {
  orders: PropTypes.array,
  applications: PropTypes.array,
}

export default connect(
  (store) => ({
    orders: store.orderReducer.orders,
    applications: store.applicationsReducer.applications,
  })
)(App);