import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
      '& .MuiFormControl-root': {
          width: '80%',
          margin: theme.spacing(1)
      }
  }
}))

export const UseForm = (initialState) => {

  const [values, setValues] = useState(initialState)
  const handleChangeInput = (e) => {
      const { name, value} = e.target;
      setValues({
          ...values,
          [name]: value
      })
}
  return {
    values,
    setValues,
    handleChangeInput,
  }
}


const Form = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root}>{props.children}</form>
  )
}

export default Form