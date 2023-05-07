import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt ,faMessage ,faUsers} from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD
import { useState, useEffect } from 'react'
=======
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223

const style = {
    "margin-top" : "2px;"
}
<<<<<<< HEAD
function Navbar(props){
  
 
=======
function Navbar(){
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
    return(
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div class="container-fluid justify-content-between">
 
    <div class="d-flex">
     
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
       MindMate
      </a>


    </div>


  
    <ul class="navbar-nav flex-row">
    
    <li class="nav-item me-3 me-lg-1">
<<<<<<< HEAD
    <a class="nav-link" >
          <span onClick={() => {props.setContent(0)}}>  <FontAwesomeIcon icon={faTachometerAlt} /></span>
    </a>
  
      </li>

    <li class="nav-item me-3 me-lg-1">
    <a class="nav-link" >
          <span onClick={() => {props.setContent(1)}}> <FontAwesomeIcon icon={faMessage} /></span>
          <span class="badge rounded-pill badge-notification bg-danger">0</span>
          </a>
   
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" >
        <span onClick={() => {props.setContent(2)}}>  <FontAwesomeIcon icon={faUsers} /></span>
=======
        <a class="nav-link" href="/dashboard">
          <span> <FontAwesomeIcon icon={faTachometerAlt} /></span>
    
        </a>
      </li>

    <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="/session">
          <span> <FontAwesomeIcon icon={faMessage} /></span>
          <span class="badge rounded-pill badge-notification bg-danger">0</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="/community">
          <span> <FontAwesomeIcon icon={faUsers} /></span>
>>>>>>> 78686413f54485c53590d6b1be34005f51c5f223
    
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">example@gmail.com</strong>
        </a>
      </li>
   
      
    </ul>

  </div>
</nav>





   
      </>
    );
}

export default Navbar