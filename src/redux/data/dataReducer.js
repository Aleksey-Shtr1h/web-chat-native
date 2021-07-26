// import {firebase} from '../../utils/firebase.js';
import { utils } from "@react-native-firebase/app";
import database from "@react-native-firebase/database";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { nanoid } from "nanoid";

import { ActionCreatorData, ActionTypeData } from "./dataAction.js";
import { ActionCreatorApp } from "../app/appAction.js";

import {
  addRoomFirebaseUsers,
  deleteUserRoom,
  checkDoubleDate,
} from "../../utils/firebase/firebase-utils.js";

export const initialState = {
  usersRoom: null,
  selectRoom: null,
  messagesList: null,
};

export const OperationData = {
  loadUsers:
    ({ usersRoom = [], idRoom = `` }, isLoadUser) =>
    (dispatch) => {
      dispatch(ActionCreatorApp.toglleUsersPreload(true));
      const dataBase = database().ref(`users`);

      dataBase.on(`value`, async (snapshot) => {
        const users = [];
        const usersBase = Object.values(snapshot.val());

        usersRoom.forEach((userId) => {
          const resultFinsUser = usersBase.find((userBase) => {
            return userId === userBase.userId;
          });

          if (resultFinsUser) {
            users.push(resultFinsUser);
          } else {
            deleteUserRoom(firestore, idRoom, userId);
          }

          if (usersRoom.length > 0) {
            checkDoubleDate(firestore, idRoom, usersRoom);
          }
        });

        if (isLoadUser) {
          await dispatch(OperationData.loadComment(idRoom, true));
        }
        await dispatch(ActionCreatorData.getUsers(users));
        await dispatch(ActionCreatorApp.toglleUsersPreload(false));
      });
    },

  loadChannel: (idRoom) => (dispatch) => {
    dispatch(ActionCreatorData.getDataSelectRoom(null));
    dispatch(ActionCreatorData.getUsers(null));
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    dispatch(ActionCreatorApp.toglleMessangesPreload(true));
    const dataBase = firestore().collection(`rooms`);
    dataBase.where("idRoom", "==", idRoom).onSnapshot(async (snapshot) => {
      const dataRoom = snapshot.docs.map((room) => ({
        ...room.data(),
      }));
      await dispatch(ActionCreatorData.getDataSelectRoom(dataRoom[0]));
      await dispatch(ActionCreatorApp.toglleSideBarArrowBtn(false));
    });
  },

  createChannel: (nameRoom, adminRoom, usersRoom) => async (dispatch) => {
    const idRoom = nanoid();

    const fireStore = firestore();
    const refRooms = fireStore.collection(`rooms`).doc(idRoom);

    refRooms.set({
      idRoom,
      info: {
        nameRoom,
        adminRoom,
      },
      usersRoom,
    });

    await dispatch(ActionCreatorApp.toglleModalAddChannel(false));
    addRoomFirebaseUsers(database, usersRoom, idRoom, nameRoom);

    dispatch(ActionCreatorApp.changeSubribedUser(false));
    dispatch(OperationData.loadChannel(idRoom));
    dispatch(OperationData.loadComment(idRoom, true));
  },

  ///////////////////////////////////////////
  deleteChannel: () => (dispatch) => {},
  ///////////////////////////////////////////

  addUserToChannel:
    (userId, idRoom, usersRoom, nameRoom) => async (dispatch) => {
      const usersRoomNew = [userId];

      firestore()
        .collection(`rooms`)
        .doc(idRoom)
        .update({
          usersRoom: firestore.FieldValue.arrayUnion(userId),
        });

      addRoomFirebaseUsers(database, usersRoomNew, idRoom, nameRoom);

      await dispatch(OperationData.loadUsers({ usersRoom, idRoom }, false));
      await dispatch(OperationData.loadComment(idRoom, true));
    },

  loadComment: (idRoom, toglleMessangesPreload) => (dispatch) => {
    const fireStore = firestore();
    const refRoom = fireStore
      .collection(`rooms`)
      .doc(idRoom)
      .collection(`messages`)
      .orderBy("timestamp");

    refRoom.onSnapshot(async (snapshot) => {
      const messages = snapshot.docs.map((message) => ({
        ...message.data(),
      }));
      await dispatch(ActionCreatorData.getMessagesList(messages));
      // await dispatch(ActionCreatorApp.toglleMessangesPreload(false));

      if (toglleMessangesPreload) {
        await dispatch(ActionCreatorApp.toglleMessangesPreload(false));
      }
      // await dispatch(ActionCreatorApp.changeSubribedUser(false));
    });
  },

  createComment: (idRoom, message, nameUser, userId) => (dispatch) => {
    const idMessage = nanoid();

    const fireStore = firestore();
    const refRoom = fireStore
      .collection(`rooms`)
      .doc(idRoom)
      .collection(`messages`)
      .doc(idMessage);

    refRoom.set({
      idMessage,
      message,
      nameUser,
      userId,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });
  },

  ///////////////////////////////////////////
  deleteComment: () => (dispatch) => {},
  ///////////////////////////////////////////

  changeUserDateInfo: (userAuthId, postEditInfo) => async (dispatch) => {
    if (
      typeof postEditInfo.photoUrl === "object" &&
      postEditInfo.photoUrl !== null
    ) {
      const storageRef = storage().ref(
        `images/${userAuthId}/logo-${userAuthId}.png`
      );
      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${postEditInfo.photoUrl.uri}`;
      console.log(postEditInfo);
      console.log(utils.FilePath);
      await storageRef.putFile(pathToFile);

      // const fileRef = storageRef.child(`images/qwert/logo-qwerty.png`);

      // await fileRef.put(postEditInfo.photoUrl);
      // let filePhotoUrl = await fileRef.getDownloadURL();
      // postEditInfo.photoUrl = filePhotoUrl;
    }

    // const db = database().ref(`/users/${userAuthId}`);
    // await db.update(postEditInfo);
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeData.GET_USERS:
      return {
        ...state,
        usersRoom: action.payload,
      };

    case ActionTypeData.GET_DATA_SELECT_ROOM:
      return {
        ...state,
        selectRoom: action.payload,
      };

    case ActionTypeData.GET_MESSAGES_LIST:
      return {
        ...state,
        messagesList: action.payload,
      };

    default:
      break;
  }

  return state;
};
