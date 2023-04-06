import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Modal } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = Boolean(anchorEl);

 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // need to add form submission logic
    handleCloseModal();
  };

  return (
    <div style={{ margin: 10 }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined" size="large"
        color="secondary"
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>All Contacts</MenuItem>
        <MenuItem onClick={handleOpenModal}>New Contact</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            New Contact
          </Typography>
          <form onSubmit={handleSubmitForm}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                required
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
              />
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
