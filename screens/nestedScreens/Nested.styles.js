import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerTwo: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },

  containerComment: {
    marginHorizontal: 16,
    borderColor: '#E8E8E8',
    borderRadius: '100px',
    marginBottom: 16,
    borderWidth: 1,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
  },

  collectionImages: {
    paddingHorizontal: 16,
  },

  commentText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    paddingRight: 0,
  },

  btnComments: {
    padding: 10,
    borderRadius: '100%',
    backgroundColor: '#FF6C00',
  },

  iconComment: {
    color: '#ffffff',
    fontSize: 24
  },

  imgPosts: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    marginTop: 40,
    borderRadius: 8,
  },

  comments: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10
  },
  commentsFonts: {
    fontSize: 30,
    color: "#BDBDBD",
    paddingRight: 5,
  },

  numberComments: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
  },

  num: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#BDBDBD'
  },

  iconMaps: {
    fontSize: 24,
    color: "#BDBDBD",
    paddingRight: 5,
  },

  textComments: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#212121',
    paddingTop: 10
  },

  textCity: {
    fontSize: '16px',
    lineHeight: '19px',
    textDecorationLine: 'underline',
    color: '#212121'
  },

  commentsContainer: {
    paddingTop: 24,
    marginHorizontal: 16,
    flexDirection: 'row',
  },

  commentsBlog:{
    width: '84%',
    color: '#212121',
    fontSize: 13,
    lineHeight: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 36,
    marginLeft: 16,
  }
})