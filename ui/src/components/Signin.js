import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Signin(){
    return(
       < div class="modal fade" id="signin" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <div className="container">
        <div class="row">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>

        <div class="row">
        <h1 class="modal-title fs-4 d-flex justify-content-center" id="exampleModalToggleLabel">Sign in</h1> </div>

        
        </div>
      </div>

      <div class="modal-body">
        
      <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
 



  <div class="col-12 d-flex justify-content-center">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

</div>
</div>

      </div>
     
    </div>
    );
}

export default Signin