import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#fdfdff'

    },
    pageHeader: {
        display: 'flex',
        padding: theme.spacing(4),
        marginBottom: theme.spacing(2)
    },
    Icon: {
        padding: theme.spacing(2),
        color: "#3c44b1",
        display: 'inline-block'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))
const PageHeader = (props) => {
    const classes = useStyles();
  const {title, subTitle, icon} = props;
    return (
    <Paper elevation={0} square className = {classes.root}>
        <div className={classes.pageHeader}>
        <Card className={classes.Icon}>
             {icon}
        </Card>
        <div className={classes.pageTitle}>
        <Typography variant="h6" component="div">
            {title}
        </Typography>
        <Typography variant="subtitle2" component="div">{subTitle} </Typography>
        </div>
        </div>
    </Paper>
  )
}

export default PageHeader