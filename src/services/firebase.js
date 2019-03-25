import  * as Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAXF61qGyMgk3RePScr_xHc4vKIu5kfmW8",
    authDomain: "helpin-site.firebaseapp.com",
    databaseURL: "https://helpin-site.firebaseio.com",
    projectId: "helpin-site",
    storageBucket: "helpin-site.appspot.com",
    messagingSenderId: "411765657177"
})

const db = firebaseApp.firestore()

export default db



