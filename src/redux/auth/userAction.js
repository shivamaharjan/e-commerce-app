import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, db } from "../../config/firbase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from "./userSlice";

export const createAdminUser = (userInfo, navigate) => async (dispatch) => {
  try {
    console.log("User info to send to firebase", userInfo);
    // 1. Send data to Auth
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );

    // 2. Send the data to DB
    const { password, confirmPassword, ...rest } = userInfo;
    await setDoc(doc(db, "users", user.uid), rest);
    toast.success("User SignUp Successful!");
    // Navigate to login
    navigate("/login");
  } catch (e) {
    console.log("error", e);
    if (e.message.includes("auth/email-already-in-use")) {
      navigate("/login");
      toast.error(`You already have an account, please login.`);
    } else {
      toast.error(`Something went wrong. ${e.message}`);
    }
  }
};

export const loginAdminUser = (userInfo) => async(dispatch) => {
    try {
        const authSnap = signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
        toast.promise(authSnap, {
            pending: "In progress..."
        })
        const {user} = await authSnap;
        toast.success("User Signed in!")
        
        dispatch(getUserInfo(user.uid))



    } catch (e) {
        toast.error(`Something went wrong. ${e.message}`);
      }
    }

    export const resetPasswordAction = (email) => async(dispatch) => {
     try {
      const resPromise = sendPasswordResetEmail(auth, email);
      toast.promise(resPromise, {
        pending: "In Progress.."
      })
      await resPromise;
      toast.success("Reset Email Send!")


     } catch (e) {
       toast.error(`Something went wrong. ${e.message}`);
     }

    }

    export const getUserInfo = (uid) =>async(dispatch)  => {
      try {
        const userSnap = await getDoc(doc(db, "users", uid))
        if (userSnap.exists()){
          const userData = userSnap.data();
          const userInfo = {...userData, uid}
          dispatch(setUser(userInfo))

        }
      } catch (e) {
        toast.error(`Something went wrong. ${e.message}`);
      }

    }