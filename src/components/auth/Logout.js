import { signOut } from "firebase/auth";
import { auth } from "../config/Config";
// import { useNavigate } from 'react-router-dom'


const LogOut = () => {
    // const navigate = useNavigate();
    signOut(auth).then(() => {
        // navigate("/logIn", { replace: true });
        console.log("ok")
    }).catch((error) => {
        alert(error.message)
    })
}

export { LogOut }
