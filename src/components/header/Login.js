import { NavLink } from "react-router-dom";
import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import './css/Login.css'

// import axios from "../../api/axios"; 

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios({
                method: 'post',
                url: 'https://hoasen-backend2.herokuapp.com/api/users/login',
                data: { email: user, password: pwd }
              });
            console.log(response);
            // localStorage.setItem('userInfo', response);
        } catch (err) {
            if(!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if(err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    return (
        <> 
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : ( 
            <section>
                <div className="modal fade" id="login-form" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="limiter modal-dialog" role="document">
                        <div className="container-login100">
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                                <form 
                                    className="login100-form validate-form"
                                    
                                >
                                    <span className="login100-form-title p-b-30">
                                        Login
                                    </span>
                                    <p style={{textAlign:"center"}} ref={errRef} className={errMsg ? "errmsg" : "offsreen"} aria-live="assertive">{errMsg}</p>
                                    <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                        <span htmlFor="username" className="label-input100">Username</span>
                                        <input
                                            className="input100"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Type your username"
                                            ref={userRef} 
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                        />
                                        <span className="focus-input100" data-symbol="" />
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <span className="label-input100">Password</span>
                                        <input
                                            className="input100" 
                                            type={passwordShown ? "text" : "password"} 
                                            name="password" 
                                            placeholder="Type your password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                        />
                                        <span onClick={togglePasswordVisiblity}><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span className="focus-input100" data-symbol="" />
                                    </div>
                                    <div className="text-right p-t-8 p-b-31">
                                        <a href="/">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <div className="wrap-login100-form-btn">
                                            <div className="login100-form-bgbtn" />
                                            <button 
                                                className="login100-form-btn"
                                                onClick={handleSubmit}                                                
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </div>

                                    
                                    <div className="txt1 text-center p-t-54 p-b-20">
                                        <span>
                                            Or Sign Up Using
                                        </span>
                                    </div>
                                    <div className="flex-c-m">
                                        <a href="/" className="login100-social-item bg1">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        <a href="/" className="login100-social-item bg2">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="/" className="login100-social-item bg3">
                                            <i className="fa fa-google" />
                                        </a>
                                    </div>
                                    <div className="flex-col-c p-t-20">
                                        <span className="txt1 p-b-17">
                                            Or Sign Up Using
                                        </span>
                                        <a href="/" data-target="#register-form" data-dismiss="modal" data-toggle="modal" className="txt2">
                                            Sign Up
                                        </a>
                                    </div>
                                    <div className="flex-col-c p-t-15">
                                        <span className="btn btn-light p-b-9">
                                            <a href="/" data-dismiss="modal" className="txt2">
                                                Cancel
                                            </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
        </>
    )
}

export default Login;