import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react'

const RadioControl = (props) => {
  const {label, name, value, onChange, genderItems} = props;
  return (
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name={name}
                value={value}
                onChange={onChange}
                row
            >
              { genderItems.map(
                (item, index) => <FormControlLabel value={item.id} control={<Radio />} label={item.title} />)
              }
            </RadioGroup>
        </FormControl>
  )
}

export default RadioControl