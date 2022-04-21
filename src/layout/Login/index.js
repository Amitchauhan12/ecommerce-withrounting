import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";

import "./index.css";

function LoginComponent(params) {
  const [show,setShow]= useState(false);
  const initialValuesForSignIn = {
    email: "",
    password: "",
  };
  const handleClose = () =>{
     setShow(false)
    };


  useEffect(()=>{
    console.log(params)
    setShow(params.isLoginFlag)
  },[params])

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal
      show={show}
      onHide={() =>{
         handleClose()
         params.closeDialog(false)
        }}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container mt-10 mb-10 mx-auto">
          <Formik
            initialValues={initialValuesForSignIn}
            validationSchema={signInSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => {
              const {
                values,
                errors,
                touched,
                isValid,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              } = formik;
              return (
                <div className="container">
                  <div className="row">
                    <span className="welcomeBack">Welcome back!</span>
                  </div>
                  <div className="row">
                    <span className="sigupTest">Sign in to your account</span>
                  </div>
                  <div className="signupBox">
                    <h3 className="signInTitle">Don't have an account?</h3>
                    <h3 className="linkSignup" onClick={()=>{
                      params.setRegistrationWindowFlag(true)
                    }}>Sign Up</h3>
                  </div>
                  <Form>
                    <div className="formBody px-5">
                      <div className="col inputFieldDiv">
                        <div className="row">
                          <label className="inputLabel" htmlFor="email">
                            Email
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="inputCls"
                            valid={touched.email && !errors.email}
                            invalid={touched.email && !!errors.email}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                        </div>
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                      </div>

                      <div className="col inputFieldDiv">
                        <div className="row">
                          <label className="inputLabel" htmlFor="password">
                            Password
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="inputCls"
                            valid={touched.password && !errors.password}
                            invalid={touched.password && !!errors.password}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <a className="forgotPass">Forgot your password?</a>
                    </div>
                    <div className="dialogFooter">
                      <button
                        type="submit"
                        className={
                          !(dirty && isValid)
                            ? "disabled-btn buttonCls"
                            : "buttonCls"
                        }
                        disabled={!(dirty && isValid)}
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
          );
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginComponent;
