import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InlineWidget } from "react-calendly";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  // display: "flex",
};
const buttonStyle = {
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
  display: "flex",
  transition: "background-position 0.15s ease-in",
  color: "black",
  alignItems: "center",
  textTransform: "uppercase",
};

export default function BasicModal({ buttonCaption }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>
        {buttonCaption}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InlineWidget url="https://calendly.com/tabishmunir" />
        </Box>
      </Modal>
    </div>
  );
}
