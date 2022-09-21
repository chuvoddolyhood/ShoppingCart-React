import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { auth } from '../config/Config';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/Config';


const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            const uid = result.user.uid;
            createUser(name, email, profilePic, uid)
        })
        .catch((error) => {
            console.log(error);
        })
}

const userCollectionRef = collection(db, "users");

const createUser = async (name, email, profilePic, uid) => {
    await addDoc(userCollectionRef, { name: name, email: email, profilePic: profilePic, uid: uid })
    console.log("ok");
}


export { signInWithGoogle }