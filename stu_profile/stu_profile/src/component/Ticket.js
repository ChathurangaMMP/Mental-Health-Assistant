import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt ,faMessage ,faUsers} from '@fortawesome/free-solid-svg-icons'
import TicketDetail from "./TicketDetail";



function Ticket(props){

    const topic = props.topic;
    const time = props.time;
    const status = props.status;
    const description = props.description;
    const id = props.id;

    const [detailid,setdetailid ]= useState("")

    const [state,setState] = useState(false);



    
      useEffect(() => {
        setdetailid("#ticketdetail"+id);
        console.log(detailid);

    if(status === "Assigned"){
        setState(true)
    }

    else{
        setState(false)
    } }, [])

    
    return(
        <>
    <TicketDetail topic={topic} description={description} id={id}></TicketDetail> 
    
     <button type="button" class="btn ticket-item"   data-bs-target={detailid}  data-bs-toggle="modal">
  <div class="row">
    <div class="ticket-user col-md-6 col-sm-12" style={{"text-align": "left"}}>
      <span class="user-name"  >{topic}</span>
    </div>
    <div class="ticket-time col-md-4 col-sm-6 col-xs-12">
      <div class="divider hidden-md hidden-sm hidden-xs"></div>
      <i class="fa fa-clock-o"></i>
      <span class="time">{time}</span>
    </div>
    <div class="ticket-type col-md-2 col-sm-6 col-xs-12">
      <span class="divider hidden-xs"></span>
      <span class="type">{status}</span>
    </div>
    {state && <div class="ticket-state bg-palegreen"></div>}
    {!state && <div class="ticket-state bg-yellow"></div>}
  </div>
</button>
</>

    );
}

export default Ticket;