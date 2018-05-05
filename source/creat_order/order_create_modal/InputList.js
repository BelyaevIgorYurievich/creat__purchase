import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { orderData } from './data';

export default class InputList extends React.PureComponent {

    state = {
        isItemOpen: false,
        value: this.props.item.value || ''
    }

    handleItemOpen = () => this.setState({isItemOpen: !this.state.isItemOpen})

    handleChengeOrderTree = (arrId) => (event) => {
        this.props.chengeOrderTree(arrId, event.target.value)
        this.setState({value: event.target.value})
    }

    render() {
        
        const { item, chengeOrderTree } = this.props;
        const { isItemOpen, value } = this.state;
        const arrId = this.props.arrId ? [...this.props.arrId, item.id] : [item.id];

        return (
            <div>
                <div 
                    onClick={this.handleItemOpen} 
                    style={{marginLeft:`${item.levl*20}px`}}
                >
                    {item.title}
                </div>
                
                {
                    item.children ? 
                    item.children.map(item=> isItemOpen && <InputList 
                        key={item.id}
                        arrId={arrId}
                        item={item}
                        chengeOrderTree={chengeOrderTree}/>) : 
                    <input value={value} onChange={this.handleChengeOrderTree(arrId)}/>
                }
            </div>
        )
    }

}