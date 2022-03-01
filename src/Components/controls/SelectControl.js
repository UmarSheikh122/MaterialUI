import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react'

const SelectControl = (props) => {
    const {label, options, onChange, name, value} = props;
    console.log('options: ', options);
  return (
    <FormControl variant='outlined'>
    <InputLabel>{label}</InputLabel>
    <Select
        value={value}
        label={label}
        name = {name}
        onChange={onChange}
    >
     <MenuItem value="">None</MenuItem>
        {
            options.map((item)=>( <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>))
        }
        
    </Select>
</FormControl>
  )
}

export default SelectControl