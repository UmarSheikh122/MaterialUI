import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'

const CheckboxControl = (props) => {
    const {disabled, label, onChange} = props;
  return (
    <FormGroup>
    <FormControlLabel 
    disabled 
    control = {
    <Checkbox
    onChange={onChange}
    />
    
    } label="Disabled" />
    </FormGroup>
  )
}

export default CheckboxControl