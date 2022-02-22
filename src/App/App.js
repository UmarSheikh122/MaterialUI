import { createTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "../Components/Header";
import Employees from "../Components/Pages/Employees/Employees";
import SideMenu from "../Components/SideMenu";
import "../index.css";


const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: "3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f4f5fd",
    }
  }
})
const useStyles = makeStyles({
  mainApp: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.mainApp}>
        <Header />
        <Employees/>
      </div>
      {/* CssBaseline to provide common css rules like box-sizing etc */}
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
