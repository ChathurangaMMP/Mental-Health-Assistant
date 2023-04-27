import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import Cookies from 'js-cookie';

function Refresh() {
  const token = Cookies.get('MMtoken');
  const email = Cookies.get('MMemail');

    window.location.href = 'http://localhost:5000/account'+'?token='+token+'&email='+email;
  }

function Application() {
  
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleTopicchange = (event) => {
    setTopic(event.target.value);
  };

  const handleDescriptionchange = (event) => {
    setDescription(event.target.value);
  };

  const submitapplication = (event) => {
    event.preventDefault();
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const token = Cookies.get('MMtoken');
    const email = Cookies.get('MMemail');


    fetch("http://localhost:5000/profile/createappointment", {
      method: "POST",
      body: JSON.stringify({
        topic: topic,
        description: description,
        time: showTime,
        token: token,
        email:email
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

  return (
    <div
      class="modal fade"
      id="application"
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
                  Questionaries and Details
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
                type="email"
                class="form-control"
                onChange={handleTopicchange}
            
                placeholder="topic"
              ></input>
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Description
              </label>
              <textarea
                 placeholder="description"
                class="form-control"
                onChange={handleDescriptionchange}
            
              ></textarea>
            </div>

            

            <div class="modal-footer col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary" onClick={submitapplication}>
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
