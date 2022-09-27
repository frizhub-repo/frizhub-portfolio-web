import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularIndeterminate from "../loader/loader";

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

export default function BasicModal({ buttonCaption }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.Calendly.initInlineWidget({
      url: "https://calendly.com/tabishmunir",
      parentElement: document.getElementById("calendly-inline-widget"),
    });
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>{buttonCaption}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div
              id="calendly-inline-widget"
              style={{ minWidth: 320, height: 580 }}
              data-auto-load="true"
            ></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
