import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textRegister:{
        paddingBottom: 30,
        paddingTop: 90,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderRadius: 8,
        borderWidth: 1,
        padding: 16,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 16,
    },
    inputActive: {
        backgroundColor: '#F6F6F6',
        borderColor: '#FF6C00',
        borderRadius: 8,
        borderWidth: 1,
        padding: 16,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 16,
    },
    btn: {
        backgroundColor: '#FF6C00',
        padding: 16,
        borderRadius: 100,
        marginTop: 27,
    },
    title: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    acount: {
        marginTop: 10,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        marginTop: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      image: {
        flex: 1,
        justifyContent: "flex-end",
        resizeMode: 'cover',
      },
      homeRegist: {
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        backgroundColor: '#FFFFFF',
        alignItems: "center",
      },
    goLog: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    btnAcount: {
        color: 'red'
    }, 
    linkRout: {
        display: 'flex',
        textDecorationLine: 'underline',
        color: '#154fad',
        marginLeft: 5
    },
    containerInput: {
        position: 'relative',
    },
    showPassword: {
        position: 'absolute',
        right: 15,
        top: 17
    }
  });