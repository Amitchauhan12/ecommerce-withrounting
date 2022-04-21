import * as React from "react";
import Box from "@mui/material/Box";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
  root: {
    boxShadow: "rgb(0 0 0 / 10%) 0px -1px 8px",
    width: "100%"
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  },
  iconStyle: {
    color: "#1a73e8"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      className={clsx(classes.root, classes.stickToBottom)}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon className={`${value == 0 && "text-blue"}`} />}
      />
      <BottomNavigationAction
        label="Categories"
        icon={<AutoAwesomeMotionIcon className={`${value == 1 && "text-blue"}`} />}
      />
      <BottomNavigationAction
        label="My Account"
        icon={<PersonIcon className={`${value == 2 && "text-blue"}`} />}
      />
      <BottomNavigationAction
        label="Cart"
        icon={<ShoppingCartIcon className={`${value == 3 && "text-blue"}`} />}
      />
    </BottomNavigation>
  );
}
