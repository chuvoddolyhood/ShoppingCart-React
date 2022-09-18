import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6x9uVHtA4LJXl26uyh12h3oOZVqSYpqQ",
    authDomain: "fakeshop-362203.firebaseapp.com",
    projectId: "fakeshop-362203",
    storageBucket: "fakeshop-362203.appspot.com",
    messagingSenderId: "466675796708",
    appId: "1:466675796708:web:990f2d004a88ee9165baf1",
    measurementId: "G-FJMFQ8QQXM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }
