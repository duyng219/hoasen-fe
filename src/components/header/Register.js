import React from 'react'

const Register = () => {
  return (
    <div>
  <div className="modal fade" id="register-form" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="limiter modal-dialog" role="document">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-30">
              Register
            </span>
            <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
              <span className="label-input100">Username</span>
              <input className="input100" type="text" name="username" placeholder="Type your username" />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
              <span className="label-input100">Email</span>
              <input className="input100" type="text" name="username" placeholder="Type your email" />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
              <span className="label-input100">Password</span>
              <input className="input100" type="password" name="pass" placeholder="Type your password" />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <span className="label-input100">Confirm Password</span>
              <input className="input100" type="password" name="pass" placeholder="Confirm your password" />
              <span className="focus-input100" data-symbol="" />
            </div>
            <div className="text-right p-t-8 p-b-10">
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn">
                  Register
                </button>
              </div>
            </div>
            <div className="flex-col-c p-t-30">
              <span className="txt1 p-b-17">
                <a href="#" data-target="#login-form" data-dismiss="modal" data-toggle="modal" className="txt2">
                  Sign In
                </a>
              </span>
            </div>
            <div className="modal-footer p-t-8 p-b-0">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Register