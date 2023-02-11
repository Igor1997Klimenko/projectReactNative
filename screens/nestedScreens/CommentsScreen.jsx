import { 
  TextInput, 
  TouchableOpacity, 
  View, 
  SafeAreaView,
  FlatList,
  Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from './Nested.styles';
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
import { addDoc, collection, onSnapshot } from "firebase/firestore"; 

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const { postId } = route.params;
  const { nickName } = useSelector(state => state.auth);

  useEffect(() => {
    getAllPosts();
  }, [])

  const createComments = async () => {
    const postsCommentsCollection = collection(db,`posts/${postId}/comments`); 
    await addDoc(postsCommentsCollection, { comment, nickName });
    setComment('');
  };

  const getAllPosts = async () => {
    const commentsCollection = await collection(db,`posts/${postId}/comments`)

    return onSnapshot(
      commentsCollection,
      (data) => {
        const newHabits = data.docs.map((doc) => ({...doc.data(), id:doc.id })); 
        setAllComments(newHabits);
      },
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({item}) => 
          <View style={styles.commentsContainer}>
            <Text>{item.nickName}</Text>
            <Text style={styles.commentsBlog}>{item.comment}</Text>
          </View>
          }
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

      <View style={styles.containerComment}>
        <View>
          <TextInput 
            value={comment}
            onChangeText={setComment} 
            placeholder="Comment..." 
            style={styles.commentText}
          />
        </View>

        <TouchableOpacity onPress={createComments} style={styles.btnComments}>
          <AntDesign name="arrowup" style={styles.iconComment} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CommentsScreen;