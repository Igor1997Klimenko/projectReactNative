import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDefault from "../nestedScreens/HomeDefault";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import SignOut from "../../components/SignOut";

const NestedScreen = createNativeStackNavigator();
const PostsScreen = () => {

  return(
  <NestedScreen.Navigator>
    <NestedScreen.Screen 
      name='Publications' 
      component={HomeDefault}
      options={{
        headerRight: () => (
          <SignOut/>
        ),
      }}
    />
    <NestedScreen.Screen name='Comments' component={CommentsScreen}/>
    <NestedScreen.Screen name='Map' component={MapScreen}/>
  </NestedScreen.Navigator>
  )
}

export default PostsScreen;