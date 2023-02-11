import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';
import CreateScreen from './screens/mainScreen/CreateScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';

// icons
import { AntDesign, Feather } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
return (
  !isAuth
  ? <AuthStack.Navigator>
      <AuthStack.Screen
        name='Register'
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen 
        name='Login' 
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
    />
    </AuthStack.Navigator>

  : <MainTab.Navigator screenOptions={{tabBarShowLabel: false, tabBar: false}}>
    <MainTab.Screen 
      name='Post' 
      component={PostsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused,size,color}) => 
        <AntDesign name="appstore-o" size={24} color={color}
       />
      }}
    />
    <MainTab.Screen 
      name='Create' 
      component={CreateScreen}
      options={{
        tabBarIcon: ({focused,size,color}) => 
        <AntDesign name="plus" size={24} color={color}
      />
      }}
    />
    <MainTab.Screen 
      name='Profile' 
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused,size,color}) => 
        <Feather name="user" size={24} color={color}
      />
      }}
    />
    </MainTab.Navigator>
  )
}

export {useRoute};