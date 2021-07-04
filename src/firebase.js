import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDj1IiED_oAsSPvv__ueLl6uAm9Lkkk_3Q",
    authDomain: "auth-development-9a1e9.firebaseapp.com",
    projectId: "auth-development-9a1e9",
    storageBucket: "auth-development-9a1e9.appspot.com",
    messagingSenderId: "322468191422",
    appId: "1:322468191422:web:98c82269b30b3c4d6c52ef"

})

export const auth = app.auth()
export default app