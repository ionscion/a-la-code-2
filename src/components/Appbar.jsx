import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function ButtonAppBar() {
    const { isAuthenticated} = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Legacy Architects
          </Typography>
          {!isAuthenticated && <LoginButton color="inherit"/>}
          {isAuthenticated && <LogoutButton color="inherit"/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
