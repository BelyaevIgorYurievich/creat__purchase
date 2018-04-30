import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { orderData } from './data';
import InputList from './InputList';

import './style.less'

export default class OrderCreateModal extends React.PureComponent {
    
    state = {
        orderData: []
    }

    handleChengeValue = (type) => (event) => {
        const { setFieldValue } = this.props;
        
		setFieldValue(type, event.target.value);
    }
    
    handleChengeValueWithEvent = (type, nexType) => (event) => {
        const { setFieldValue } = this.props;
        
        // setFieldValue(nexType, getData(nexType, event.target.value) )
		setFieldValue(type, event.target.value);
	}

    componentDidMount() {
        this.setState({orderData});

		// setFieldValue('ordersTypes', getData('ordersTypes'));
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
                                orderData.map((item)=><InputList key={item.id} item={item}/>)
                            }
                        </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            bsStyle='primary'  
                            onClick={null}
                        >Сохраить</Button>
                        <Button onClick={close}>Отмена</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </div>
        )
    }
}   

// const FormikOrderItem = withFormik({ 
//     mapPropsToValues({ ordersTypes, ordersType, ordersVariation, ordersNumber }) {
//       return {
//         ordersTypes: ordersTypes || [],
//         ordersType: ordersType || '',
//         ordersVariations: ordersVariation || [],
//         ordersVariation: ordersVariation || '',
//         ordersNumber: ordersNumber || 0
//       }
//     },
//     validationSchema: Yup.object().shape({

//     }),
//     handleSubmit(values, { setSubmitting, resetForm }) {
//       setSubmitting(false);
//           console.log( values,' values ' ); 
//     }
//   })(OrderItem)
  
//   export default FormikOrderItem