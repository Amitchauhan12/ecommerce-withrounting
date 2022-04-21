import React,{useState,useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";

import "./index.css";

function RegistrationComponent(params) {
  const [show,setShow]= useState(false);
  const initialValuesForSignIn = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const handleClose = () =>{
    setShow(false)
   };


 useEffect(()=>{
   console.log(params)
   setShow(params.isRegistrationFlag)
 },[params])

  const handleOnSubmit = (values) => {
    console.log(values);
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        params.closeRegistrationDialog(false);
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
                    <span className="sigupTest">Create an account</span>
                  </div>
                  <div className="signupBox">
                    <h3 className="signInTitle">Already have an account?</h3>
                    <h3 className="linkSignup" onClick={()=>{
                      params.setLoginWindowFlag(true);
                    }}>Sign In</h3>
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

                      <div className="col inputFieldDiv">
                        <div className="row">
                          <label className="inputLabel" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="inputCls"
                            valid={touched.firstName && !errors.firstName}
                            invalid={touched.firstName && !!errors.firstName}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                          />
                          <ErrorMessage
                            name="firstName"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="col inputFieldDiv">
                        <div className="row">
                          <label className="inputLabel" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="inputCls"
                            valid={touched.lastName && !errors.lastName}
                            invalid={touched.lastName && !!errors.lastName}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                          />
                          <ErrorMessage
                            name="lastName"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
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
                        CREATE AN account
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RegistrationComponent;
