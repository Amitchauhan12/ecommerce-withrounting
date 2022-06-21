import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import "./index.css";

function ForgotPassword(params) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    params.setShowForgotPass(false)
  };

  useEffect(() => {
    setShow(params.isForgotFlag);
  }, [params]);

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container mt-10 mb-10 mx-auto">
         
            <h3 class="card-title text-center pb-2">Forgot Password?</h3>
            <h6 class="text-center">
              Enter your email address We'll send you link
              <br />
              To reset your password
            </h6>
            <div class="card-text">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-sm form-inputs"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-signin">
                  SUBMIT EMAIL
                </button>
              </form>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ForgotPassword;
