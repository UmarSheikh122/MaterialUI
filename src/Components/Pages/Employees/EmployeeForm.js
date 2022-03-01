import { Grid} from '@material-ui/core'
import React from 'react'
import InputControl from '../../controls/InputControl'
import RadioControl from '../../controls/RadioControl'
import SelectControl from '../../controls/SelectControl'
import Form, { UseForm } from './useForm'
import * as EmployeeServices from '../../../Services.js/EmployeeService'


const initialFieldValues = {
    id: 0,
    fullname: '',
    email: '',
    hireDate: new Date(),
    isPermanent: false,
    departmentId: '',
    city: '',
    mobile: '',
    gender: 'male'
}
const gendersItem = [
 {id: 'male', title: 'Male'},
 {id: 'female', title: 'Female'},
 {id: 'others', title: 'Others'}
]

const EmployeeForm = () => {
 const {values, setValues, handleChangeInput} = UseForm(initialFieldValues);
  return (
    <Form>
        <Grid container>
        <Grid item xs={6}>
            <InputControl
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleChangeInput}
            />
            <InputControl
            label = 'Email'
            value={values.email}
            name="email"
            onChange={handleChangeInput}
            />
             <InputControl
            label = 'City'
            value={values.city}
            name="city"
            onChange={handleChangeInput}
            />
             <InputControl
            label = 'Phone'
            value={values.phone}
            name="phone"
            onChange={handleChangeInput}
            />
        </Grid>
        <Grid item xs={6}>
        
            <RadioControl
            label = "Gender"
            name = "gender"
            value = {values.gender}
            onChange = {handleChangeInput}
            genderItems = {gendersItem}
            />
            <SelectControl
            label = "Department"
            name = "departmentId"
            value = {values.departmentId}
            onChange = {handleChangeInput}
            options = {EmployeeServices.getDepartmentCollecton()}
            />
        </Grid>
    </Grid>
    </Form>
  )
}

export default EmployeeForm