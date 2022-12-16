import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors, fonts} from '../assets/Assets';
import {firebase} from '@react-native-firebase/firestore';

const CustomDrawer = props => {
  const user = firebase.auth().currentUser;
  if (user == 0) {
    Alert.alert('required user login');
    console.log('user drawer', user.email);
  }
  return (
    <DrawerContentScrollView
      style={{backgroundColor: Colors.shadowColorAndroidDefault, flex: 1}}
      {...props}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://imageio.forbes.com/specials-images/imageserve/5a836fff31358e4955ad6549/0x0.jpg?format=jpg',
          }}
        />
      </View>
      <Text style={styles.peterText}>Use Name</Text>
      <DrawerItemList {...props} />
      <View style={styles.footerStyle}>
        <Text style={styles.shopText}>Exclusive shopping app</Text>
        <Text style={{color: Colors.black, marginLeft: 10}}>2022</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.checkBoxOffColor,
    width: '60%',
    height: 160,
    marginHorizontal: 55,
    borderRadius: 100,
  },
  imageStyle: {
    backgroundColor: Colors.checkBoxOffColor,
    width: '88%',
    height: 140,
    padding: 10,
    borderRadius: 100,
    margin: 10,
  },
  peterText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: fonts.regular,
    fontWeight: '900',
    fontSize: 20,
    color: Colors.darkPrimary,
  },
  shopText: {
    paddingVertical: 10,
    fontFamily: fonts.medium,
    fontSize: 16,
    color: Colors.darkPrimary,
    marginHorizontal: 10,
  },
  footerStyle: {
    marginTop: 5,
    backgroundColor: Colors.cardColor,
    height: 150,
  },
});
