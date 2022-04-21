import React, { useEffect, useState } from "react";
import { SearchBar, CategoryBar } from "components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Modal from 'react-bootstrap/Modal';
import Login from '../../../Login';
import Registration from '../../../Registration';
import { validateYupSchema } from "formik";

const DesktopHeader = () => {

  const [showLogin, setLoginWinFlag] = useState(false);
  const [showRegistration, setRegistration] = useState(false);

  function setLoginWindowFlag(flag){
    setLoginWinFlag(flag);
  }

  function closeDialog(value) {
      setLoginWinFlag(value)
  }

  function closeRegistrationDialog(value) {
    setRegistration(value)
  }

  function setRegistrationWindowFlag(value){
    setRegistration(value)
  }
  
  useEffect(()=>{
    if(showRegistration){
      setLoginWinFlag(false);
    } 
    if(showLogin){
      setRegistration(false)
    }
  },[showLogin,showRegistration]);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-center space-x-4 p-2 bg-blue-200">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
              width="120px"
            />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex space-x-2 items-center w-full border-r border-gray-300 p-2">
            <div className="font-bold text-sm whitespace-nowrap" onClick={()=>{
              setLoginWindowFlag(true)
            }}>Sign In</div>
            <div>
              <PersonOutlineIcon />
            </div>
          </div>

          <div className="w-full flex space-x-2 items-center p-2">
            <div className="font-bold text-sm">Cart</div>
            <div>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="category-bar-container">
        <CategoryBar />
      </div>
      {
        showLogin &&
        <Login isLoginFlag={showLogin} closeDialog={closeDialog} setRegistrationWindowFlag={setRegistrationWindowFlag}/>
      }
      {
        showRegistration &&
        <Registration isRegistrationFlag={showRegistration} closeRegistrationDialog={closeRegistrationDialog} />
      }
    </React.Fragment>
  );
};

export default DesktopHeader;
