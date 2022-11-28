import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, fonts} from '../assets/Assets';

const ProfileUi = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}></View>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>
          <FontAwesome name="user" size={152} color={'yellow'} />
        </Text>
        <View>
          <Text style={styles.peter}>Peter Kenrick</Text>
        </View>
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.userAboutContainer}>
          <Text style={styles.userAbout}>UI/Ux Designer</Text>
          <Text style={{fontFamily: fonts.regular}}>
            About designer Profile
          </Text>
        </View>
        <Entypo />
        <View style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 50}}>
            <Text style={styles.experience}>EXPERIENCE</Text>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>UI/UX Designer</Text>
              <Text>About designer Profile</Text>
            </View>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>UI/UX Designer</Text>
              <Text>About designer Profile</Text>
            </View>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>UI/UX Designer</Text>
              <Text>About designer Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileUi;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'teal',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    position: 'absolute',
    marginTop: 120,
  },
  userText: {
    borderWidth: 5,
    borderColor: Colors.white,
    borderRadius: 100,
    backgroundColor: 'tomato',
    width: 160,
    textAlign: 'center',
  },
  peter: {
    color: Colors.white,
    marginLeft: 135,
    marginTop: 50,
    fontFamily: fonts.boldItalic,
    fontSize: 16,
  },
  userAboutContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  userAbout: {fontFamily: fonts.bold, color: Colors.lightBlack},
  roTextStyle: {flexDirection: 'row', paddingVertical: 30},
  experience: {
    fontFamily: fonts.mediumItalic,
    color: Colors.darkPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
});
