import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { authSignOutUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const SignOut = () => {
  const dispatch = useDispatch();

  const onSubmitLogout = () => {
    dispatch(authSignOutUser())
  }

  return(
    <TouchableOpacity onPress={onSubmitLogout} >
      <Feather name="log-out" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default SignOut;