import { makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height:'100vh',
        backgroundColor: '#253053'

    }
})
const SideMenu = () => {
    const classes = styles();
  return (
    <div className={classes.sideMenu}></div>
  )
}

export default SideMenu