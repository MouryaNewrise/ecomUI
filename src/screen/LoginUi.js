import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginUi = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(true);

  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

  const submitFunction = () => {
    if (!password && !email) {
      Alert.alert('login Successful');
      navigation.navigate('HomeUi');
    } else {
      Alert.alert('for login enter email and password');
    }
  };

  return (
    <>
      <View style={styles.container}>
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
          placeholder="Email"
          onChangeText={() => setEmail(email)}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={() => setPassword(password)}
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginUi;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
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
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    // position: 'absolute',
    marginTop: -45,
    marginLeft: 330,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
