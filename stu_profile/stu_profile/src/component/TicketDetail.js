import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState , useEffect} from "react";

function Refresh() {
    window.location.href = 'http://localhost:3000/dashboard';
  }

function TicketDetail(props) {
  const [topic, setTopic] = useState( props.topic);
  const [description, setDescription] = useState(props.description);
  const [id,setId]= useState(props.id);
  const [detailid ,setDetailid]= useState('') ;

  useEffect(() => {
    console.log("Id for ticket",id);
    setDetailid("ticketdetail"+id);})

  const handleTopicchange = (event) => {
    setTopic(event.target.value);
  };

  const handleDescriptionchange = (event) => {
    setDescription(event.target.value);
  };

  const deleteappointment  = (event) => {
    event.preventDefault();
  

    fetch("http://127.0.0.1:8080/profile/deleteappointment", {
      method: "DELETE",
      body: JSON.stringify({
        id:id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => Refresh())

      .catch((err) => {
        console.log(err.message);
      });
  };


  const submitapplication= (event) => {
    event.preventDefault();
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    fetch("http://127.0.0.1:8080//profile/editappointment", {
      method: "POST",
      body: JSON.stringify({
        topic: topic,
        description: description,
        time: showTime,
        id:id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => Refresh())

      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div
    class="modal fade"
    id={detailid}
    aria-hidden="true"
    data-bs-backdrop="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div className="container">
              <div class="row">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="row">
                <h1
                  class="modal-title fs-4 d-flex justify-content-center"
                  id="exampleModalToggleLabel"
                >
                Edit Appointment
                </h1>{" "}
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">
                Topic
              </label>
              <input
                class="form-control"
                onChange={handleTopicchange}
                value={topic}
                
              ></input>
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Description
              </label>
              <textarea
                 
                class="form-control"
                onChange={handleDescriptionchange}
                value={description}
            
              ></textarea>
            </div>

            

            <div class="modal-footer col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary" onClick={submitapplication}>
               
               save
              </button>
              <button type="submit" class="btn btn-danger" onClick={deleteappointment}>
               
               delete
              </button>
            </div>

          
          </div>
        </div>
      </div>
   </div>
  );
}

export default TicketDetail;
