import React from 'react'
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import InputMask from 'react-input-mask';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import moment from 'moment'
import ReactDatepicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

import './style.less'

class CreatOrder extends React.Component {

  handleChengeValue = (type) => (event) => {

		const { setFieldValue } = this.props;
		setFieldValue(type, event.target.value);
	}

  render() {
    const { 
  		touched,
  		errors,
  		values,
  		isSubmitting,
			handleSubmit
    } = this.props
    
    return (
       <div className='creat-order'>
        <div className='creat-order__name'>Создание заказа</div>
        	<FormGroup validationState={touched.orderName && errors.orderName ? 'error' : null}>
            <ControlLabel>Название заказа</ControlLabel>
            <FormControl
              type='text' 
              placeholder='Введите название заказа'
              onChange={this.handleChengeValue('orderName')}
              value={values.orderName}
            />
            {touched.orderName && errors.orderName &&<HelpBlock>{errors.orderName}</HelpBlock>}
          </FormGroup>

          <FormGroup>
            <ControlLabel>Дата создания:</ControlLabel>
            <FormControl
                type='text' 
                disabled
                value={values.dateCreate}
              />
          </FormGroup>
          
          <FormGroup>
            <ControlLabel>Дата ожидания заказа:</ControlLabel>
            <ReactDatepicker onChange={(date)=>console.log(date._d)}/>
          </FormGroup>
          
          <Button 
							bsStyle='primary'  
							disabled={isSubmitting}
							onClick={handleSubmit}
						>Сохраить заказ
          </Button>
      </div>
    ) 
  }
}   



const FormikCreatOrder = withFormik({
  mapPropsToValues({ orderName, dateExecution }) {
    return {
      orderName: orderName || '',
      dateCreate: moment().locale('ru').format('lll'),
      dateExecution: dateExecution || ''

    }
	},
	
  validationSchema: Yup.object().shape({
    orderName: Yup.string().required('Обязательное поле'),
	}),
	
  handleSubmit(values, { setSubmitting, resetForm }) {
    setSubmitting(false);
		
		resetForm();
  }
})(CreatOrder)

export default FormikCreatOrder