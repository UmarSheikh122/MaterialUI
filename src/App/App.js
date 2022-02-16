import { makeStyles } from "@material-ui/core";
import SideMenu from "../Components/SideMenu";
import '../index.css'

const useStyles = makeStyles({
  mainApp: {
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.mainApp}>Here we go</div>
    </>
  );
}

export default App;
