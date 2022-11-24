import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RegisterUi = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [clicked, setClicked] = useState(true);

  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

  const submitFunction = () => {
    if (!password === '' && !cPassword === password) {
      Alert.alert('create account Successful');
    } else {
      Alert.alert('should be password and Confirm password are same');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerIcon}>
        <FontAwesome
          name="shopping-basket"
          size={150}
          color={Colors.darkPlaceHoldColor}
        />
      </View>
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Name"
        onChangeText={() => setName(name)}
      />
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Email"
        onChangeText={() => setEmail(email)}
      />
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Password"
        onChangeText={() => setPassword(password)}
        secureTextEntry={true}
      />
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Confirm Password"
        onChangeText={() => setCPassword(cPassword)}
        secureTextEntry={clicked}
      />
      <View style={styles.eyeContainer}>
        <Text>
          <FontAwesome
            onPress={passwordEyeIcon}
            color={Colors.extraDarkPrimary}
            size={30}
            name={!clicked ? 'eye' : 'eye-slash'}
          />
        </Text>
      </View>
      <TouchableOpacity>
        <Text onPress={() => submitFunction()} style={styles.btnStyle}>
          Submit
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate('LoginUi')}
        style={styles.btnStyle}
      >
        if are you register user Sign In
      </Text>
      <Text
        style={styles.btnStyle}
        onPress={() => navigation.navigate('HomeUi')}
      >
        without signUp shopping
      </Text>
    </ScrollView>
  );
};

export default RegisterUi;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  inputStyle: {
    backgroundColor: Colors.backgroundGray,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  btnStyle: {
    backgroundColor: Colors.cardColor,
    padding: 10,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '400',
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    position: 'absolute',
    marginTop: 380,
    marginLeft: 310,
    // marginHorizontal: 20,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
