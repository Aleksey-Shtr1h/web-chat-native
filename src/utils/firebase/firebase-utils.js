export const addRoomFirebaseUsers = async (
  database,
  usersRoom,
  idRoom,
  nameRoom
) => {
  const dataBase = database().ref(`users`);
  let usersAuthId = [];

  let promise = new Promise((resolve, reject) => {
    dataBase.on(`value`, async (snapshot) => {
      const usersBase = Object.entries(snapshot.val());
      usersRoom.forEach((userId) => {
        const userInfo = usersBase.find((userBase) => {
          if (userBase[1].channelsUser) {
            const channelsUser = Object.values(userBase[1].channelsUser);
            const doubleUsers = channelsUser.find(
              (channelUser) => channelUser.idRoom === idRoom
            );
            if (doubleUsers) {
              return (
                userId === userBase[1].userId && doubleUsers.idRoom !== idRoom
              );
            }
          }
          return userId === userBase[1].userId;
        });
        if (userInfo) {
          usersAuthId.push(userInfo[0]);
        }
        resolve(usersAuthId);
      });
    });
  });

  let usersAuthIdPromise = await promise;

  if (usersAuthIdPromise.length > 0) {
    usersAuthId.forEach((userAuth) => {
      const dataBaseInfo = database()
        .ref(`users/${userAuth}/channelsUser`)
        .push();
      dataBaseInfo.set({ idRoom, nameRoom });
    });
  }
};

export const deleteUserRoom = (firestore, idRoom, idUser) => {
  firestore()
    .collection(`rooms`)
    .doc(idRoom)
    .update({
      usersRoom: firebase.firestore.FieldValue.arrayRemove(idUser),
    });
};

export const checkDoubleDate = (firestore, idRoom, usersRoom) => {
  const merge = [...new Set(usersRoom)];

  if (merge.length !== usersRoom.length) {
    firestore()
      .collection(`rooms`)
      .doc(idRoom)
      .update({
        usersRoom: [...new Set(usersRoom)],
      });
  }
};
