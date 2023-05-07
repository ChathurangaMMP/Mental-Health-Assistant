import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Cookies from 'js-cookie';


=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223




<<<<<<< HEAD
=======
function changeURL() {
  window.location.href = 'https://codefrontend.com';
}
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223


function Signup_stu(){

  // const [posts, setPosts] = useState([]);
  //  const [title, setTitle] = useState('');
  //  const [body, setBody] = useState('');

  
  const role = "student"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [TaC, setTaC] = useState(false);
  const [Allow, setAllow] = useState(false);

  const [hover, setHover] = useState("true");



 
   
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleTaCChange = (event) => {
    
    setTaC(event.target.checked);
  };


  

<<<<<<< HEAD
  const loggin_process = async (res) =>{
          const data = await res.json();
          console.log("Loggin process");
          console.log(data.success);



          if(data.success){
            Cookies.set('MMtoken', await data.token, { expires: 1 ,path:"/account" });
            Cookies.set('MMemail', await data.email, { expires: 1 ,path:"/account"});
            console.log(data.email)
            window.location.href = 'http://127.0.0.1:5000/account?token='+data.token+'&email='+data.email;
 
            
          }
  }
  const login = (res) => {

    console.log("Loggin");

    fetch('http://127.0.0.1:5000/login', {
         method: 'POST',
         body: JSON.stringify({
            email: email,
            password: password, 
           
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) =>loggin_process(res))
        
         .catch((err) => {
          console.log("Error");
            console.log(err.message);
         });
   
    
=======

  const GetHome = (event) => {

   changeURL();
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
   
  }
   
   // Handle psosts request
   const handleSubmit = (event) => {
    
    event.preventDefault();
 
//  const [title, setTitle] = useState('');
            //  const [body, setBody] = useState('');
    if(TaC){
      setAllow(false)
<<<<<<< HEAD
      fetch('http://127.0.0.1:5000/signup', {
=======
      fetch('http://127.0.0.1:8080/signup', {
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
         method: 'POST',
         body: JSON.stringify({
            email: email,
            password: password, //  const [title, setTitle] = useState('');
            //  const [body, setBody] = useState('');
            address: address,
            number:number ,
            roel : role
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
<<<<<<< HEAD
         .then((res) =>login(res.json()))
=======
         .then((res) =>GetHome(event))
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
        
         .catch((err) => {
            console.log(err.message);
         });}

    else{
      setAllow(true)
    }
   };

   


    return(
      
<<<<<<< HEAD
       < div class="modal fade" id="stu" aria-hidden="true"  data-bs-backdrop="true"   aria-labelledby="exampleModalToggleLabel" tabindex="-1">
=======
       < div class="modal fade" id="stu" aria-hidden="true"  data-bs-backdrop="false"   aria-labelledby="exampleModalToggleLabel" tabindex="-1">
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
  <div class="modal-dialog modal-dialog-centered" >
    <div class="modal-content">
      <div class="modal-header">

      <div className="container">
        <div class="row">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>

        <div class="row">
          
        <h1 class="modal-title fs-4 d-flex justify-content-center" id="exampleModalToggleLabel">Sign up as Student</h1> </div>

        
        </div>

      
      </div>
      <div class="modal-body">
        
      <form class="row g-3">

      <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" onChange={handleEmailChange} id="inputEmail4" placeholder="@example.com"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Create password</label>
    <input type="password" class="form-control" onChange={handlePasswordChange} id="inputPassword4" ></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" onChange={handleAddressChange} id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Phone number</label>
    <input type="text" class="form-control" onChange={handleNumberChange} id="inputAddress2" placeholder="+947********"></input>
  </div>


  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" onChange={handleTaCChange}></input>
      <label class="form-check-label" for="gridCheck">
       Agree to terms and conditions
      </label>

     {Allow && <div class="text-danger">You must agree with terms and conditions</div>} 
      

    </div>
   
  </div>
 <div class="col-12 d-flex justify-content-center">
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Sign up</button>
  </div>
</form>

</div>
</div>

      </div>
      
     
    </div>
    );
}



export default Signup_stu