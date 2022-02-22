import { Grid} from '@material-ui/core'
import React from 'react'
import InputControl from '../../controls/InputControl'
import RadioControl from '../../controls/RadioControl'
import Form, { UseForm } from './useForm'


const initialFieldValues = {
    id: 0,
    fullname: '',
    email: '',
    hireDate: new Date(),
    isPermanent: false,
    departmentId: '',
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
        </Grid>
        <Grid item xs={6}>
        
            <RadioControl
            label = "Gender"
            name = "gender"
            value = {values.gender}
            onChange = {handleChangeInput}
            genderItems = {gendersItem}
            />
        
        </Grid>
    </Grid>
    </Form>
  )
}

export default EmployeeForm