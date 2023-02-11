import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  focusIcons: {
    background: '#FF6C00',
    borderRadius: 20,
  },
  camera: {
    height: 240,
    backgroundColor: '#F6F6F6',
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnCamera: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  textCamera: {
    marginTop: 8,
    color: '#BDBDBD',
    lineHeight: 19,
    fontSize: 16,
    fontWeight: '400',
  },
  name: {
    marginTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    paddingBottom: 15,
  },
  nameLocation: {
    marginTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    paddingBottom: 15,
    paddingLeft: 25,
  },
  locationIcons: {
    position: 'absolute',
    bottom: 16,
    color: "#BDBDBD",
    fontSize: 24,
  },
  btnPublic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    height: 50,
  },
  imgFlash: {
    minWidth: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'red'
  },
  publicText: {
    color: '#BDBDBD',
  },

  imgPosts: {
    height: 240,
    backgroundColor: '#F6F6F6',
    marginTop: 40,
    borderRadius: 16,
  },

  nameProfile: {
    paddingTop: 30,
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: '0.01em',
    color: '#212121',
  }
})
