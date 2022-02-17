import { Box } from "@mui/system";
import { getProfiles } from "api/profile";
import { setProfileAvatarAnchor } from "modules/profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileAvatar from "./ProfileAvatar";
import ProfileAvatarMenu from "./ProfileAvatarMenu";

const ProfileHeaderContainer = () => {
    const dispatch = useDispatch();
    const [profileList, setProfileList] = useState([]);
    const currentProfile = useSelector((state) => state.profile.currentProfile);

    //  현재는  프로필 리스트를   리덕스와   useState로 난잡하게 관리한다  -> serverState는 모두 react-query로 몰자
    // 임시
    const getProfileList = async () => {
        const list = await getProfiles();
        setProfileList(list);
    };
    //  react-query로 바꿔주자 나중에

    useEffect(() => {
        getProfileList();
    }, []);
    const handleOpenMenu = (e) => {
        dispatch(setProfileAvatarAnchor(e.currentTarget));
    };

    return (
        <Box>
            <ProfileAvatar onClick={handleOpenMenu} profile={currentProfile} />
            <ProfileAvatarMenu profileList={profileList} />
        </Box>
    );
};
export default ProfileHeaderContainer;
