import { Box } from "@mui/system";
import ProfileHeaderContainer from "components/C/ProfileHeaderContainer";
import { setHeaderRightNode } from "modules/uiControl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "./D-06 (lolomo-row)/Slider";
import PreviewModal from "./D-08 (preview-modal)/PreviewModal";
const MainContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaderRightNode(<ProfileHeaderContainer />));
    });

    return (
        <Box>
            <Slider />
            <PreviewModal />
        </Box>
    );
};

export default MainContainer;
