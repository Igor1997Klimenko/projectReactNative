import { useState, useEffect } from "react";
import {
  View,
  Text, 
  TouchableOpacity,
  TextInput, 
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { Camera } from "expo-camera";
import {styles} from '../mainScreen/Main.styles'
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { EvilIcons } from '@expo/vector-icons';
import { storage, db } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import { collection, addDoc } from "firebase/firestore";

const CreateScreen = ({ navigation }) => {
const [camera, setCamera] = useState(null);
const [photo, setPhoto] = useState(null);
const [comment, setComment] = useState('');
const [cityLocation, setCityLocation] = useState('');
const [location, setLocation] = useState(null);

const { userId, nickName } = useSelector((state) => state.auth);

useEffect(() => {
  (async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    const locationRes = await Location.getCurrentPositionAsync({});
    setLocation(locationRes);
  })();
}, []);

const addPhoto = async () => {
  const { uri } = await camera.takePictureAsync()
  setPhoto(uri)
}

const publicPhoto = () => {
  uploadPostToServer();
  navigation.navigate('Publications');
  setComment('');
  setCityLocation('');
}

const uploadPostToServer = async () => {
  const photo = await uploadPhotoToServer();
  await addDoc(collection(db, 'posts'), {
    photo, comment, cityLocation, location: location.coords, userId, nickName
  });
}

const uploadPhotoToServer = async () => {
  try {
      const response = await fetch(photo);
      const blobFile = await response.blob();
      const starsRef = ref(storage, `postImage/${v4()}`);
      await uploadBytes(starsRef, blobFile);
      return await getDownloadURL(starsRef);
   } catch (error) {
      throw new Error('Failed to upload error')
 }}

  return(
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
        <View>
        <Image source={{uri: photo}} style={styles.imgFlash}/>
      </View>
      )}
        <TouchableOpacity style={styles.btnCamera} onPress={addPhoto}>
          <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.textCamera}>Загрузите фото</Text>

      <View>
        <TextInput 
          value={comment}
          onChangeText={setComment}
          style={styles.name}
          placeholder='Название...'
        />
      </View>

      <View style={{position: 'relative'}}>
      <EvilIcons style={styles.locationIcons} name="location" />
        <TextInput 
          value={cityLocation}
          onChangeText={setCityLocation}
          style={styles.nameLocation}
          placeholder='Местность...'
        />
      </View>

        <TouchableOpacity style={styles.btnPublic} onPress={publicPhoto}>
          <Text style={styles.publicText}>Опубликовать</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CreateScreen;