import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import PageHeader from '../../PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(5)
  }
}))
const Employees = () => {
  const classes = useStyles();
  return (
    <>
        <PageHeader 
        title = "Page Header"
        subTitle = "Description"
        icon = {<PeopleAltIcon/>}
        />
       <Paper className={classes.pageContent}>
       <EmployeeForm/>
       </Paper>
    </>
  )
}

export default Employees