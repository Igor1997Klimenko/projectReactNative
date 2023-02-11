import { useEffect, useState } from "react";
import { View, FlatList, Image, TouchableOpacity, Text } from "react-native";
import {styles} from '../nestedScreens/Nested.styles';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const HomeDefault = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

const fetchPost = async () => {
  await getDocs(collection(db, 'posts'))
    .then((querySnapshot)=>{               
      const newData = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }));
        setPosts(newData);                
    })
}

useEffect(() => {
  fetchPost();
}, [])

  return(
    <View style={styles.container}>
      <FlatList 
        style={styles.collectionImages}
        data={posts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({item}) => (
          <View>
            <Image 
              sourse={{uri: item.photo}}
              style={styles.imgPosts}
            />
            <View>
              <Text style={styles.textComments}>{item.comment}</Text>
            </View>

            <View style={styles.comments}>
              <TouchableOpacity 
                style={styles.numberComments} 
                onPress={() => navigation.navigate('Comments', { postId: item.id })}
              >
                <EvilIcons name="comment" style={styles.commentsFonts}/>
                <Text style={styles.num}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  style={styles.numberComments} 
                  onPress={() => navigation.navigate('Map', { location: item.location })}
                  >
                <Feather name="map-pin" style={styles.iconMaps}/>
                <Text style={styles.textCity}>{item.cityLocation}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        />
    </View>
  )
}

export default HomeDefault;