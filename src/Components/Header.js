import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: '#fff',
    transform: 'translatez(0)'
  },
  searchInput: {
    padding: '0px 8px', // `0px ${theme.spacing(1)}px`
    fontSize: '0.8rem', 
    opacity: '0.6',
    '&:hover': {
      backgroundColor: "#f2f2f2"
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px' // theme.spacing(1) same scene 
    }
  },

}))
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item> 
            <InputBase className={classes.searchInput} placeholder="Search" startAdornment={<SearchIcon fontSize="small"/>}/>
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon/>
              </Badge>
            </IconButton>

            <IconButton>
                <PowerSettingsNewIcon/>
            </IconButton>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
