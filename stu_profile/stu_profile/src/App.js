import './App.css';
import './style/dashboardstyle.css';
import Navbar from './component/Nav_Bar';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Session from './component/Session';
import Community from './component/Community';
import { useState, useEffect ,setState } from 'react';
import CustomButton from './component/CustomButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  searchButton: {
    backgroundColor: 'lightgreen',
    fontSize: '18px',
    padding: '70px 175px',
    borderRadius: '5px',
    width: '250px',
    height: '50px',
  },
}));

function App() {
  const [content_, setContent] = useState(0);
  //const [component, setComponent] = useState(Dashboard);
  const [component, setComponent] = useState(<Dashboard></Dashboard>);
  const classes = useStyles();

  const handlechage = (index) =>{
    console.log("_________________________________")
    console.log(index)
    setContent(index);
  }

  useEffect(() => {
    console.log("COOontent")
    console.log(content_)
    switch (content_) {
      case 0:
        setComponent(<Dashboard></Dashboard>);
        break;
      case 1:
        setComponent(<Session></Session>);
        break;
      case 2:
        setComponent(<Community></Community>);
        break;
      default:
        setComponent(<Dashboard></Dashboard>);
    }
  }, [content_]);

  return (
    <>
      <Navbar setContent={handlechage}></Navbar>
      <Router>
        <Routes>
          <Route path="/account" element={component} />
        </Routes>
      </Router>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            style={{ backgroundColor: 'skyblue', color: '#4c7683' }}
            className={classes.searchButton}
          >
            Available Counsellors
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            style={{ backgroundColor: 'palegreen', color: '#4c7683' }}
            className={classes.searchButton}
          >
            Articles
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            style={{ backgroundColor: 'salmon', color: '#4c7683' }}
            className={classes.searchButton}
          >
            Games
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

