import React, { useState } from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Ant_FlexRowWrap } from "../../../../globalStyled/Global.styled";
import { MainBtnForm } from "./../../../Solid/MainBtnForm/MainBtnForm";
import {
  Ant_FormMain,
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
  Ant_FormMainLabel,
  Ant_SectionForm,
} from "./../../../../globalStyled/FormMain.styled";
import { InputBtnClear } from "./../../../Solid/InputBtnClear/InputBtnClear";
import { getStateEditUserDate } from "../../../../redux/app/appSelector";
import {
  getUserAuthId,
  getUserProfile,
} from "./../../../../redux/user/usersSelector";
import { onPressEvents } from "../../../../utils/utils";
import { InputBtnLoad } from "../../../Solid/InputBtnLoad/InputBtnLoad";
import { USER_UNKNOWN_PHOTO_URL } from "../../../../constant";

import { OperationData } from "../../../../redux/data/dataReducer";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export const SettingsUser = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isEditUserData = useSelector((state) => getStateEditUserDate(state));
  const userAuthId = useSelector((state) => getUserAuthId(state));
  const userProfile = useSelector((state) => getUserProfile(state));

  const [menuActive, setMenuActive] = useState("general");
  const [newName, setNewName] = useState("");
  const [linkFacebook, setLinkFacebook] = useState("");
  const [linkInstagram, setLinkInstagram] = useState("");
  const [linkTwitter, setLinkTwitter] = useState("");
  const [linkLinkendin, setLinkLinkendin] = useState("");
  const [statusDiscription, setStatusDiscription] = useState("");
  const [selectFile, setSelectFile] = useState(null);

  const onClickActiveMenu = (nameMenu) => {
    setMenuActive(nameMenu);
  };

  const { photoUrl } = userProfile;

  const userPhoto = photoUrl ? photoUrl : USER_UNKNOWN_PHOTO_URL;

  const {
    onChangeText,
    onValidStateValue,
    onClearTextPress,
    onChangeFileName,
  } = onPressEvents;

  const onLoadFilePress = (setState) => {
    // setSelectFile(evt.target.files[0]);
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setSelectFile(response);
      }
    });
  };

  const onSubmit = () => {
    let facebookLink = null;
    let instagramLink = null;
    let twitterLink = null;
    let linkendinLink = null;
    let statusDiscriptionText = null;
    let photoFile = null;

    const checkDataFireBase = (child, parent) => {
      if (child in parent) {
        return parent[child];
      }

      return null;
    };

    if (userProfile?.sosialNetworks) {
      facebookLink = checkDataFireBase("facebook", userProfile?.sosialNetworks);
      instagramLink = checkDataFireBase(
        "instagram",
        userProfile?.sosialNetworks
      );
      twitterLink = checkDataFireBase("twitter", userProfile?.sosialNetworks);
      linkendinLink = checkDataFireBase(
        "linkendin",
        userProfile?.sosialNetworks
      );
    }

    statusDiscriptionText = checkDataFireBase("statusDiscription", userProfile);

    photoFile = checkDataFireBase("photoUrl", userProfile);

    const postEditInfo = {
      info: {
        name: newName === "" ? userProfile?.info?.name : newName,
        email: userProfile?.info?.email,
      },
      sosialNetworks: {
        facebook: linkFacebook === "" ? facebookLink : linkFacebook,
        instagram: linkInstagram === "" ? instagramLink : linkInstagram,
        twitter: linkTwitter === "" ? twitterLink : linkTwitter,
        linkendin: linkLinkendin === "" ? linkendinLink : linkLinkendin,
      },
      statusDiscription:
        statusDiscription === "" ? statusDiscriptionText : statusDiscription,
      photoUrl: selectFile ? selectFile?.assets[0] : photoFile,
    };

    if (Object.keys(postEditInfo).length !== 0) {
      dispatch(OperationData.changeUserDateInfo(userAuthId, postEditInfo));
    }
  };

  const onCancelPress = () => {
    navigation.navigate("ListRoom");
  };

  console.log(selectFile);

  return (
    <Ant_SectionForm>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: userPhoto,
        }}
      />
      <Ant_FormMain>
        <ScrollView>
          <Ant_FormMainLabel>Name</Ant_FormMainLabel>

          <Ant_FormMainInputWrap>
            <Ant_FormMainInput
              keyboardType="default"
              placeholder="name"
              value={newName}
              onChangeText={(text) => onChangeText(text, setNewName)}
            />
            <InputBtnClear
              onClearTextPress={onClearTextPress}
              setState={setNewName}
              validValue={onValidStateValue(newName)}
            />
          </Ant_FormMainInputWrap>

          <Ant_FormMainLabel>Change Avatar</Ant_FormMainLabel>

          <Ant_FormMainInputWrap>
            <Ant_FormMainInput
              keyboardType="default"
              placeholder="avatar"
              value={onChangeFileName(selectFile)}
              editable={false}
            />
            <InputBtnLoad
              onLoadFilePress={onLoadFilePress}
              setState={setSelectFile}
            />
          </Ant_FormMainInputWrap>
        </ScrollView>
        <Ant_FlexRowWrap>
          <MainBtnForm nameBtn={"Edit"} onPressCommand={onSubmit} />
          <MainBtnForm nameBtn={"Cancel"} onPressCommand={onCancelPress} />
        </Ant_FlexRowWrap>
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
