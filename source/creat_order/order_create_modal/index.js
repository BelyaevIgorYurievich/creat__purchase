import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { orderData } from './data';
import InputList from './input_list';

import './style.less'

export default class OrderCreateModal extends React.PureComponent {
    
    state = {
        orderData: []
    }

    nextOrderData = [];

    componentDidMount() {
        this.setState({orderData});

        this.nextOrderData = orderData;
    }

    chengeOrderTree = (nextOrderData) => (arrId, value) => {
        
        let _nextOrderData = [...nextOrderData];

        arrId.forEach((item) => {

            const newArr = _nextOrderData.filter(({id}) => {
                return item === id
            })

            const newNode = newArr[0]

            if (newNode.children) {
                _nextOrderData = newNode.children;
            } else {
                _nextOrderData = newNode;
            }
        })

        _nextOrderData.value = value;
    }

        handleSaveModal = () => {
            this.setState({orderData: this.nextOrderData});
            this.props.close();
    }

    render() { 

        const {
            close
        } = this.props

        const {
            orderData
        } = this.state;

        return (
                <div className='static-modal'>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Состав заказа</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                orderData.map((item) => { 
                                    return <InputList 
                                    key={item.id} 
                                    item={item}
                                    chengeOrderTree={this.chengeOrderTree(this.nextOrderData)}
                                    />
                                })
                            }
                        </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            bsStyle='primary'  
                            onClick={this.handleSaveModal}
                        >Сохраить</Button>
                        <Button onClick={close}>Отмена</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </div>
        )
    }
}   