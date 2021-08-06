import React, { useState } from "react";
import { ScrollView, Platform } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Ant_FlexRowWrap } from "../../../../globalStyled/Global.styled";
import { MainBtnForm } from "../../../Solid/MainBtnForm/MainBtnForm";
import {
  Ant_FormMain,
  Ant_SectionForm,
} from "../../../../globalStyled/FormMain.styled";
import { getStateEditUserDate } from "../../../../redux/app/appSelector";
import {
  getUserAuthId,
  getUserProfile,
} from "../../../../redux/user/usersSelector";
import { onPressEvents } from "../../../../utils/utils";
import { USER_UNKNOWN_PHOTO_URL } from "../../../../constant";

import { OperationData } from "../../../../redux/data/dataReducer";
import { InputMain } from "../../../Solid/InputMain/InputMain";
import { InputTextAreaMain } from "../../../Solid/InputTextAreaMain/InputTextAreaMain";

export const ChangeUserProfileInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userAuthId = useSelector((state) => getUserAuthId(state));
  const userProfile = useSelector((state) => getUserProfile(state));

  const [newName, setNewName] = useState(
    userProfile?.info?.name ? userProfile?.info?.name : ""
  );
  const [linkFacebook, setLinkFacebook] = useState("");
  const [linkVk, setLinkVk] = useState("");
  const [linkTwitter, setLinkTwitter] = useState("");
  const [linkLinkendin, setLinkLinkendin] = useState("");
  const [statusDiscription, setStatusDiscription] = useState(
    userProfile?.statusDiscription ? userProfile?.statusDiscription : ""
  );
  const [selectFile, setSelectFile] = useState(null);

  const {
    onChangeText,
    onValidStateValue,
    onClearTextPress,
    onChangeFileName,
  } = onPressEvents;

  const onLoadFilePress = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then((selectFile) => {
      const imageUri =
        Platform.OS === "ios" ? selectFile.sourceURL : selectFile.path;
      setSelectFile(imageUri);
    });
  };

  const onSubmit = async () => {
    let facebookLink = null;
    let vkLink = null;
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
      vkLink = checkDataFireBase("vk", userProfile?.sosialNetworks);
      twitterLink = checkDataFireBase("twitter", userProfile?.sosialNetworks);
      linkendinLink = checkDataFireBase(
        "linkendin",
        userProfile?.sosialNetworks
      );
    }

    statusDiscriptionText = checkDataFireBase("statusDiscription", userProfile);

    if (checkDataFireBase("photoUrl", userProfile)) {
      photoFile = checkDataFireBase("path", userProfile?.photoUrl);
    }

    console.log();

    const postEditInfo = {
      info: {
        name: newName === "" ? userProfile?.info?.name : newName,
        email: userProfile?.info?.email,
      },
      sosialNetworks: {
        facebook: linkFacebook === "" ? facebookLink : linkFacebook,
        vk: linkVk === "" ? vkLink : linkVk,
        twitter: linkTwitter === "" ? twitterLink : linkTwitter,
        linkendin: linkLinkendin === "" ? linkendinLink : linkLinkendin,
      },
      statusDiscription: statusDiscription === "" ? null : statusDiscription,
      photoUrl: {
        path: selectFile ? selectFile : photoFile,
        isPath: selectFile ? true : false,
      },
    };

    if (Object.keys(postEditInfo).length !== 0) {
      dispatch(OperationData.changeUserDateInfo(userAuthId, postEditInfo));
      navigation.navigate("SettingsUser");
    }
  };

  const onCancelPress = () => {
    navigation.navigate("SettingsUser");
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <ScrollView>
          <InputMain
            labelName={"Change name user"}
            keyboardType={"default"}
            placeholder={"Name"}
            stateValue={newName}
            setStateValue={setNewName}
            secureTextEntry={false}
            editable={true}
            btnRigth={"clear"}
            onChangeText={onChangeText}
            onBtnPress={onClearTextPress}
            onValidStateValue={onValidStateValue}
          />

          <InputMain
            labelName={"Change avatar image"}
            keyboardType={"default"}
            placeholder={"Path image"}
            stateValue={onChangeFileName(selectFile)}
            setStateValue={setSelectFile}
            secureTextEntry={false}
            editable={false}
            btnRigth={"load"}
            onChangeText={onChangeText}
            onBtnPress={onLoadFilePress}
            onValidStateValue={onValidStateValue}
          />

          <InputTextAreaMain
            labelName={"Change user status"}
            keyboardType={"default"}
            placeholder={"Edit Status"}
            stateValue={statusDiscription}
            setStateValue={setStatusDiscription}
            secureTextEntry={false}
            editable={true}
            multiline={true}
            numberOfLines={3}
            maxLength={100}
            onChangeText={onChangeText}
            onBtnPress={onClearTextPress}
            onValidStateValue={onValidStateValue}
          />

          <InputMain
            labelName={"Facebook link"}
            keyboardType={"default"}
            placeholder={"Facebook"}
            stateValue={linkFacebook}
            setStateValue={setLinkFacebook}
            secureTextEntry={false}
            editable={true}
            btnRigth={"clear"}
            onChangeText={onChangeText}
            onBtnPress={onClearTextPress}
            onValidStateValue={onValidStateValue}
          />

          <InputMain
            labelName={"Vkontakte link"}
            keyboardType={"default"}
            placeholder={"Vkontakte"}
            stateValue={linkVk}
            setStateValue={setLinkVk}
            secureTextEntry={false}
            editable={true}
            btnRigth={"clear"}
            onChangeText={onChangeText}
            onBtnPress={onClearTextPress}
            onValidStateValue={onValidStateValue}
          />
        </ScrollView>
        <Ant_FlexRowWrap>
          <MainBtnForm nameBtn={"Edit"} onPressCommand={onSubmit} />
          <MainBtnForm nameBtn={"Cancel"} onPressCommand={onCancelPress} />
        </Ant_FlexRowWrap>
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
