import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./index.css";
import SignInScreen from "./SignIn";
import ShippingAddress from "./ShipingAddress";
import Payment from "./Payment";
import OrderDetails from "./OrderDetails";

const steps = ['Sign In', 'Shiping Address', 'Payment', 'Order Placed'];
const token = localStorage.getItem("token")

function PlaceOrderView() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

useEffect(() => {
  if(token && token!==""){
    setActiveStep(1)
  }
}, [])  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <SignInScreen />;
      case 1:
        return <ShippingAddress />;
      case 2:
        return <Payment />;
      case 3:
        return <OrderDetails />;
    }
  }

  
  return (
    <>
      {" "}
      <CssBaseline />
      <Header />
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            // labelProps.optional = (
            //   <Typography variant="caption">Optional</Typography>
            // );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
              <div className="container">
                    <div className="row">
                        <div className="orderSuccess">
                            Your Order Placed Successfully
                        </div>
                    </div>
              </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
                            {_renderStepContent(activeStep)}

          <Typography sx={{ mt: 2, mb: 1 }}>
              </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
      <Footer />
      <div className={matchDownMd ? "block" : "hidden"}>
        <BottomNavigation />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default PlaceOrderView;
