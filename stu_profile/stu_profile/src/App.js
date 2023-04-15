
import './App.css';
import './style/dashboardstyle.css';
import Navbar from './component/Nav_Bar';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Session from './component/Session';
import Community from './component/Community';

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
  );
}

export default App;
