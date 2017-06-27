import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDonYx-Ltetzl-p7JkHJQtgHkBPMu56ywg",
    authDomain: "expert-system-d00cd.firebaseapp.com",
    databaseURL: "https://expert-system-d00cd.firebaseio.com",
    projectId: "expert-system-d00cd",
    storageBucket: "expert-system-d00cd.appspot.com",
    messagingSenderId: "577202267396"
};
export const firebaseApp = firebase.initializeApp(config);

