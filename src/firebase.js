import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUXNnm3227dH4z76IfDiPrcubKizr07cQ",
    authDomain: "drive-clone-efbcf.firebaseapp.com",
    projectId: "drive-clone-efbcf",
    storageBucket: "drive-clone-efbcf.appspot.com",
    messagingSenderId: "50901382897",
    appId: "1:50901382897:web:158df5d49982ae183a1b50",
    measurementId: "G-7XZXR55L6X"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }