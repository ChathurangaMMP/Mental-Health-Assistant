import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useState}  from "react"
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Rolesel from './components/Rolesel';
import Quote from './components/Quotes';
import Signup_stu from './components/Signup_stu';
import Signup_cou from './components/Signup_cou';

import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Authcom from './components/Authcom';




const butonstyle = {
  "width" : "50%"
}

function App() {
  const [Asign, Setasign] = useState(false);

  const mypage = () => {
    const component = ""

    fetch('http://127.0.0.1:8080/profile', {
         method: 'GET'
    
      })
         .then((res) =>  
         {console.log(res)
         component = res.body})
        
         .catch((err) => {
            console.log(err.message);
         });
    console.log('Console' , component)
    return component
  }

  return (

<Router>


<Routes>

  <Route path="/" Component={() =>
  <>
<Rolesel></Rolesel>


<Signin></Signin>
<Signup_cou></Signup_cou>
<Signup_stu></Signup_stu>
<Navbar></Navbar>




<div class="container">
  <div class="row">
    <div class="col">

    <Quote></Quote>
    


    </div>
    

    <div class="col">
    
    <div class="container">
    <div class="col">
   
    <p class="h2">Connect ,
     Get Help ,
      Be Relax  </p>
    </div>

    <div class="col">
    
  <Authcom ></Authcom>

</div>
</div>


    </div>
  </div>
  
</div>
</>}/>

<Route path = "/profile" Component={mypage} />
</Routes>
</Router> 


  );
}

export default App;
