<<<<<<< HEAD
=======

>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
import './App.css';
import './style/dashboardstyle.css';
import Navbar from './component/Nav_Bar';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Session from './component/Session';
import Community from './component/Community';
<<<<<<< HEAD
import { useState, useEffect ,setState } from 'react';

function App() {
  const [content_, setContent] = useState(0);
  //const [component, setComponent] = useState(Dashboard);
  const [component, setComponent] = useState(<Dashboard></Dashboard>);

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
    </>
=======

function App() {
  return (
  <>
  <Navbar></Navbar>
  <Router>

  <Routes>

  <Route path = "/" Component={Dashboard} />
  <Route path = "/dashboard" Component={Dashboard} />
  <Route path = "/session" Component={Session} />
  <Route path = "/community" Component={Community} />
  
  </Routes>
  </Router>
  </>
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
