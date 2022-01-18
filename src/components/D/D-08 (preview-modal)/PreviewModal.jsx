import React from "react";
import { Dialog, DialogContent, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewModalOpen } from "../../../modules/uiControl";
import PreviewModalTrack from "./PreviewModalTrack";
import PreviewModalInfo from "./PreviewModalInfo";

const PreviewModal = () => {
  const open = useSelector((state) => state.uiControl.previewModalOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setPreviewModalOpen(false));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <PreviewModalInfo />
        <PreviewModalTrack />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;
