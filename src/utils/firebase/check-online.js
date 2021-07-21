// import firebase from 'firebase';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const onlineStatus = {
  isOfflineForDatabase: {
    state: 'offline',
    last_changed: database.ServerValue.TIMESTAMP,
  },

  isOnlineForDatabase: {
    state: 'online',
    last_changed: database.ServerValue.TIMESTAMP,
  },

  isOfflineForFirestore: {
    state: 'offline',
    last_changed: firestore.FieldValue.serverTimestamp(),
  },

  isOnlineForFirestore: {
    state: 'online',
    last_changed: firestore.FieldValue.serverTimestamp(),
  },
};

export const checkOnlineFirebase = () => {
  if (auth().currentUser === null) {
    return;
  }

  const userId = auth().currentUser.uid;

  const userStatusDatabaseRef = database().ref('/users/' + userId + '/status');
  // const userStatusFirestoreRef = firebase.firestore().collection(`users`).doc(`${userId}`);

  database()
    .ref('.info/connected')
    .on('value', function (snapshot) {
      if (snapshot.val() === false) {
        // userStatusFirestoreRef.set(onlineStatus.isOfflineForFirestore);
        return;
      }

      userStatusDatabaseRef
        .onDisconnect()
        .set(onlineStatus.isOfflineForDatabase)
        .then(() => {
          userStatusDatabaseRef.set(onlineStatus.isOnlineForDatabase);

          // userStatusFirestoreRef.set(onlineStatus.isOnlineForFirestore);
        });
    });
};

export const exitOnlineFirebase = userId => {
  const userStatusDatabaseRef = database().ref(`users/${userId}/status`);
  // console.log(userStatusDatabaseRef);
  // const userStatusFirestoreRef = firebase.firestore().collection(`users`).doc(`${userId}`);

  userStatusDatabaseRef.set(onlineStatus.isOfflineForDatabase);
  // userStatusFirestoreRef.set(onlineStatus.isOfflineForFirestore);
};
