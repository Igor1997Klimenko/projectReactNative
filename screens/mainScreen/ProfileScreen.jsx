import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, FlatList, Image, Text } from "react-native";
import { styles } from '../mainScreen/Main.styles';
import { db } from "../../firebase/config";
import { collection, where, onSnapshot, query } from "firebase/firestore";

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userId, nickName } = useSelector(state => state.auth)

  useEffect(() => {
    getUserPosts();
  }, [])

  const getUserPosts = async () => {
    const rabbit = await query(collection(db, 'posts'), where("userId", "==", userId))
    return onSnapshot(
      rabbit,
      (data) => {
        const newHabits = data.docs.map((doc) => ({...doc.data()})); 
        setUserPosts(newHabits);
      },
    );
  }

  return(
    <View style={styles.container}>
      <Text style={styles.nameProfile}>{nickName}</Text>
      <FlatList 
        data={userPosts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({item}) => (
          <View>
            <Image 
              sourse={{uri: item.photo}}
              style={styles.imgPosts}
            />
          </View>
        )}
        />
    </View>
  )
}

export default ProfileScreen;