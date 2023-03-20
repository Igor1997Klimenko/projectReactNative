import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { styles } from "./Componens.styles";
import { AntDesign } from '@expo/vector-icons'; 

const AvatarAuth = () => {
  const [image, setImage] = useState(null);

  useEffect( () => {
    statusCamera();
  }, [])

  const statusCamera = async (uri) => {
    if(Platform.OS !== 'web'){
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if(status !== 'granted') {
        await ImagePicker.saveToLibraryAsync(uri);
        alert('Permisson denied!')
      }
    }
  }

  const addAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    !result.cancelled 
      ? setImage(result.uri)
      : alert('You did not select any image.');
      console.log('result', result)
  };

  const removeAvatar = () => {
    setImage(null)
  }

  return (
    <View style={styles.avatarBlock}>
      { image && 
      <Image 
        source={{ uri: image }} 
        style={styles.imagesAuth} 
      />}

      { image 
        ? <TouchableOpacity 
            onPress={removeAvatar}
            style={styles.addedAvatar} 
            activeOpacity={0.8}>
          <AntDesign name="closecircleo" size={25} color='#ACB3BF' />
        </TouchableOpacity> 
        
        : <TouchableOpacity 
            onPress={addAvatar}
            style={styles.addedAvatar} 
            activeOpacity={0.8}>
          <AntDesign name="pluscircleo" size={25} color='#FF6C00' /> 
        </TouchableOpacity> 
      }

    </View>
  )
}

export default AvatarAuth;
