import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC-0o9ah3maR8CCTsbaZ0Itx7Ix9c-otBg",
    authDomain: "treasures-main.firebaseapp.com",
    databaseURL: "https://treasures-main.firebaseio.com",
    projectId: "treasures-main",
    storageBucket: "treasures-main.appspot.com",
    messagingSenderId: "971534611421",
    appId: "1:971534611421:web:20dadc3b8a7337373a7c34",
    measurementId: "G-6VWE31ZZD2"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase

  