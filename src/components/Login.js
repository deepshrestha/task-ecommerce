import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useFormValidator, errorMessage } from "./../FormValidator";

const Login = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: ""
    }
  };

  const {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    fields
  } = useFormValidator(initialState);

  const { errors } = fields;

  useEffect(() => {
    inputEmailRef.current.focus();
  }, []);

  const onLoginHandler = event => {
    event.preventDefault();

    if (onHandleSubmit(event)) {
      history.push({ pathname: "/home", state: fields.email });
    } else {
      console.log("not validated");
    }
  };

  return (
    <section id="login-page">
      <div className="form-login-box">
        <form className="form-label" onSubmit={event => onLoginHandler(event)}>
          <img
            className="mb-4"
            src="/assets/public/dist/img/user-login.jpg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3">Sign in</h1>
          <div className="form-group">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              ref={inputEmailRef}
              autoFocus
              type="email"
              name="email"
              className="form-control-sm inputText"
              placeholder="Email Address"
              onChange={onHandleChange}
              onBlur={onHandleBlur}
            />
            <div className="text-danger">
              {errors.email.length > 0 && errorMessage(errors.email)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              ref={inputPasswordRef}
              type="password"
              name="password"
              minLength="3"
              maxLength="10"
              className="form-control-sm inputText"
              placeholder="Password"
              onChange={onHandleChange}
              onBlur={onHandleBlur}
            />
            <div className="text-danger">
              {errors.password.length > 0 && errorMessage(errors.password)}
            </div>
          </div>
          <div className="m-2">
            <button className="btn btn-sm btn-primary">Sign in</button>
          </div>
          <p className="mt-4 mb-3 text-muted">&copy; 2022</p>
        </form>
      </div>
    </section>
  );
};

export default Login;
