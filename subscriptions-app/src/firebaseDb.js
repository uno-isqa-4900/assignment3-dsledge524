import firebase from 'firebase/app'; 
import 'firebase/firestore'; 

const firebaseConfig = { 
    apiKey: 'AIzaSyD9fBH7m5GyvFsn78XKuDa2M65UxsueVZ8', 
    authDomain: 'my-subscriptions-96971.firebaseapp.com', 
    projectId: 'my-subscriptions-96971', 
    storageBucket: 'my-subscriptions-96971.appspot.com', 
    messagingSenderId: '382771428557', 
    appId: '1:382771428557:web:691a22d19ae4a31b023d84' 
} 
    
const db = firebase.initializeApp(firebaseConfig); 

export default db.firestore();