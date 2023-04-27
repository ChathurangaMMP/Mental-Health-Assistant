import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Ticket from "./Ticket";
import Application from "./Application";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Dashboard() {
  const [data,setData] =  useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token = Cookies.get('MMtoken');
    const email = Cookies.get('MMemail');
    
    console.log("+++++++++++++++++");
    console.log(token);
    console.log(email);
    const response = await fetch('http://127.0.0.1:5000/profile/appointments'+"?email="+email+"&token="+token);
    console.log(response)
    const data = await response.json();
    setData(data.data);
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 px-2">
            <p> </p>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-md-12">
                <div class="widget-box">
                  <div class="widget-header">
                    <div class="d-flex justify-content-between">
                      <div></div>
                      <div class="widget-caption themesecondary">
                        Appointments
                      </div>

                      <span>
                        <button
                          class="btn btn-primary btn-sm"
                          data-bs-target="#application"
                          data-bs-toggle="modal"
                        >
                          Create an Appointment
                        </button>
                      </span>
                    </div>
                  </div>
                  <Application></Application>

                  <div class="widget-body">
                    <div class="widget-main no-padding">
                      <div class="tickets-container">
                        <ul class="tickets-list">

                          {data.map((item) => (
                             <div class="row"><Ticket
                             id={item.id}
                             topic={item.topic}
                             description={item.description}
                             time={item.time}
                             status={item.status}
                           ></Ticket>
                           </div>
                            
                          ))}
                         
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
