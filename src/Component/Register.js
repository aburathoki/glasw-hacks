import React from "react";
import "../App.css";
import login from "../Asset/login.jpg";
const Register = () => {
  return (
    <section className="p-4">
      <div className="row container-bg">
        <div className="col col xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src={login} className="login-image" alt="login"></img>
        </div>
        <div className="col col xl-6 col-lg-6 col-md-12 col-sm-12 mt-3">
          <form>
            <div class="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div class="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone Number
              </label>
              <input type="number" className="form-control" />
            </div>
            <div class="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
            <div class="mb-3">
              <label htmlFor="text-arear" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
