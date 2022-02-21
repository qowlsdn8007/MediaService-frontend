import React from "react";
import {
    createTheme,
    Dialog,
    DialogContent,
    Modal,
    ThemeProvider,
    Zoom,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewModalOpen } from "modules/uiControl";
import PreviewModalTrack from "./PreviewModalTrack";
import PreviewModalInfo from "./PreviewModalInfo";

import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

const PreviewModal = () => {
    const open = useSelector((state) => state.uiControl.previewModalOpen);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setPreviewModalOpen(false));
    };
    return (
        <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <DialogContent>
                    <PreviewModalInfo />
                    <PreviewModalTrack />
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
};

export default PreviewModal;
