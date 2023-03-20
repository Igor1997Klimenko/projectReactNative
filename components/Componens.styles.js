import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatarBlock: {
    width: 120, 
    height: 120, 
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    top: -60,
    zIndex: 99,
  },

  addedAvatar: {
    backgroundColor: '#FFFFFF',
    fontSize: 25,
    color:'#FF6C00',
    position: 'absolute',
    bottom: 14,
    right: -12,
    borderRadius: '50%'
  },

  imagesAuth: {
    width: 120, 
    height: 120, 
    borderRadius: 16,
  },
});