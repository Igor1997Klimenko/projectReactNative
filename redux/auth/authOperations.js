import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authentication } from "../../firebase/config";
import { authSlice } from "./authReducer";

const {
  updateUserProfile,
  authStateChange,
  authSignOut
} = authSlice.actions;

const authSignUpUser = ({email, password, login}) => 
  async (dispatch, getState) => {
    try {
     await createUserWithEmailAndPassword(
        authentication,
        email, 
        password,
      );

      const user = await authentication.currentUser;

      await updateProfile(user, {
        displayName: login,
      });

      const { displayName, uid } = await authentication.currentUser;

      const userUpdateProfile = {
        nickName: displayName,
        userId: uid,
      }

      dispatch(updateUserProfile(userUpdateProfile));
    } catch (error) {
      throw new Error(error.message);
  }
}

const authSignInUser = ({email, password}) => 
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(
        authentication, 
        email, 
        password
      );
    } catch (error) {
      throw new Error(error.message);
  }
}

const authSignOutUser = () => async (dispatch, getState) => {
  await authentication.signOut()
  dispatch(authSignOut());
}

const authStateChangeUser = () => async (dispatch, getState) => {
  authentication.onAuthStateChanged((user) => {
    if(user){
      const userUpdateProfile = {
        nickName: user.displayName,
        userId: user.uid,
      }

      dispatch(updateUserProfile(userUpdateProfile));
      dispatch(authStateChange({stateChange: true}));
    }
  });
}

export {
  authSignUpUser, 
  authSignInUser, 
  authSignOutUser, 
  authStateChangeUser
}
