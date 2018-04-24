import React from 'react'
import { Tab, Row, Nav, NavItem, Col } from 'react-bootstrap'

import MyOrders from 'MyOrders'
import CreatOrder from 'CreatOrder'

import './style.less'


export default class App extends React.Component {

  render() {
    return (
      <Tab.Container defaultActiveKey="my_order">
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="my_order">Мои заказы</NavItem>
              <NavItem eventKey="creat_order">Создание заказа</NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content animation>
              <Tab.Pane eventKey="my_order">
                <MyOrders/>
              </Tab.Pane>
              <Tab.Pane eventKey="creat_order">
                <CreatOrder/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}   

