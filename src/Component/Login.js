import React from "react";
import "../App.css";
const Login = () => {
  return (
    <>
      <section className="p-4">
        <div className="row d-flex justify-content-around align-item-center pl-2">
          <div className="col col-xl-6 sign-page p-4">
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div class="mb-3">
                <label htmlFor="confirm-password" class="form-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-primary sign-up">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="col col-xl-6 login-page p-3">
            <form>
              <div class="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" />
              </div>
              <div class="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="Password" className="form-control" />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-primary sign-up">Login</button>
              </div>
              <a href="#" className="text-center forgot-link">
                Forgout Password ?.
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
