import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { getData } from './helper'
import './style.less'

class OrderItem extends React.PureComponent {
    
    handleChengeValue = (type) => (event) => {
        const { setFieldValue } = this.props;
        
		setFieldValue(type, event.target.value);
    }
    
    handleChengeValueWithEvent = (type, nexType) => (event) => {
        const { setFieldValue } = this.props;
        
        setFieldValue(nexType, getData(nexType, event.target.value) )
		setFieldValue(type, event.target.value);
	}

    componentDidMount() {
        const { setFieldValue } = this.props;
        
		setFieldValue('ordersTypes', getData('ordersTypes'));
    }

    render() { 

        const {
            values,
            handleSubmit,
            close
        } = this.props

        return (
                <div className='static-modal'>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Создание элемента заказа</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup>
                                <ControlLabel>Шаг 1</ControlLabel>
                                <FormControl 
                                    value={values.ordersType}
                                    componentClass="select" 
                                    placeholder="select"
                                    onChange={this.handleChengeValueWithEvent('ordersType','ordersVariations')}>
                                        {
                                            !values.ordersType && <option value=''/>
                                        }
                                        {
                                            values.ordersTypes.map(({id ,name})=>{
                                                return (
                                                        <option key={id} value={id}>
                                                            {name}
                                                        </option>
                                                    )
                                            })
                                        }
                                </FormControl>
                 
                                <ControlLabel>Шаг 2</ControlLabel>
                                <FormControl 
                                    disabled={!values.ordersType}
                                    value={values.ordersVariation}
                                    componentClass="select" 
                                    placeholder="select"
                                    onChange={this.handleChengeValueWithEvent('ordersVariation')}>
                                        {
                                            !values.ordersType && <option value=''/>
                                        }
                                        {
                                            values.ordersVariations.map(({id ,name})=>{
                                                return (
                                                        <option key={id} value={id}>
                                                            {name}
                                                        </option>
                                                    )
                                            })
                                        }
                                </FormControl>

                                <ControlLabel>Шаг 3</ControlLabel>
                                <FormControl
                                    disabled={!values.ordersVariation}
                                    type='number'
                                    onChange={this.handleChengeValue('ordersNumber')}
                                    value={values.ordersNumber}
                                />
                            </FormGroup>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            bsStyle='primary'  
                            onClick={handleSubmit}
                        >Сохраить</Button>
                        <Button onClick={close}>Отмена</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </div>
        )
    }
}   

const FormikOrderItem = withFormik({ 
    mapPropsToValues({ ordersTypes, ordersType, ordersVariation, ordersNumber }) {
      return {
        ordersTypes: ordersTypes || [],
        ordersType: ordersType || '',
        ordersVariations: ordersVariation || [],
        ordersVariation: ordersVariation || '',
        ordersNumber: ordersNumber || 0
      }
    },
    validationSchema: Yup.object().shape({

    }),
    handleSubmit(values, { setSubmitting, resetForm }) {
      setSubmitting(false);
          console.log( values,' values ' ); 
    }
  })(OrderItem)
  
  export default FormikOrderItem