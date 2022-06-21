import React, { useEffect, useState } from "react";
import { SearchBar, CategoryBar } from "components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Login from '../../../Login';
import Registration from '../../../Registration';
import ForgotPassword from "../../../ForgotPassword";
import { Link } from 'react-router-dom';
const DesktopHeader = () => {

  const [showLogin, setLoginWinFlag] = useState(false);
  const [showRegistration, setRegistration] = useState(false);
  const [showForgotPass, setShowForgotPass] = useState(false)

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
  },[showLogin,showRegistration]);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-center space-x-4 p-2 bg-blue-200">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <img
              src="/img/bh-logo.png"
              width="60px"
              style={{marginRight:50}}
            />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex space-x-2 items-center w-full border-r border-gray-300 p-2">
            <div className="font-bold text-sm whitespace-nowrap cursor-pointer" onClick={()=>{
              setLoginWindowFlag(true)
            }}>Sign In</div>
            <div>
              <PersonOutlineIcon />
            </div>
          </div>
          <Link to={"/product/cart"}>
          <div className="w-full flex space-x-2 items-center p-2">
            <div className="font-bold text-sm cursor-pointer">Cart</div>
            <div>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className="category-bar-container">
        <CategoryBar />
      </div>
      {
        <Login isLoginFlag={showLogin} setShowForgotPass={setShowForgotPass} setLoginWinFlag={setLoginWindowFlag} closeDialog={closeDialog} setRegistrationWindowFlag={setRegistrationWindowFlag}/>
      }
      {
        showRegistration &&
        <Registration setLoginWinFlag={setLoginWindowFlag} setRegistrationWindowFlag={setRegistrationWindowFlag} isRegistrationFlag={showRegistration} closeRegistrationDialog={closeRegistrationDialog} />
      }

      <ForgotPassword isForgotFlag={showForgotPass} setShowForgotPass={setShowForgotPass} />

    
    </React.Fragment>
  );
};

export default DesktopHeader;
