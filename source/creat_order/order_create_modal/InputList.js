import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { orderData } from './data';

export default class InputList extends React.PureComponent {

    state = {
        isItemOpen: true
    }

    handleItemOpen = () => this.setState({isItemOpen: !this.state.isItemOpen})

    render() {
        
        const { item } = this.props;
        const { isItemOpen } = this.state

        return (
            <div>
                <div 
                    onClick={this.handleItemOpen} 
                    style={{marginLeft:`${item.levl*20}px`}}
                >
                    {item.title}
                </div>
                
                {
                    item.children ? item.children.map(item=> isItemOpen && <InputList item={item}/>) : <input/>
                }
            </div>
        )
    }

}