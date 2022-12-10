import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-paper';
import {ImagePicker} from 'react-native-image-picker';
import {Colors, fonts} from '../assets/Assets';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = [
  {label: 'Seller', value: '0'},
  {label: 'Buyer', value: '1'},
];

const Users = () => {
  const initialState = {
    userName: '',
    userType: '',
    avatar: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [filePath, setFilePath] = useState({});

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };

  const handleRegistration = async () => {
    try {
      const subscriber = await firestore()
        .collection('users')
        .add({
          avatar: 'avatar',
          userName: 'userName',
          userType: 'userType',
          email: 'email',
          password: 'password',
        })
        .then(() => {
          return subscriber;
          //   console.log('subscriber', subscriber);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
        // onPress={navigation.goBack()}
        >
          <Text>
            <AntDesign name="arrowleft" color={'white'} size={30} />
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Create User</Text>
        </View>
        <TouchableOpacity>
          <Text
          //   onPress={navigation.navigate('MyDrawer')}
          >
            <AntDesign name="menufold" color={'white'} size={30} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin: 10, padding: 10}}>
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="User Name"
          value={state.userName}
          onChangeText={user => setState({...state, userName: user})}
          label="userName"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={state.userType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setState(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="Enter correct Email"
          value={state.email}
          onChangeText={gmail => setState({...state, email: gmail})}
          label="email"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="Create Password"
          value={state.password}
          onChangeText={pass => setState({...state, password: pass})}
          label="password"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
          secureTextEntry={true}
        />
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity
            style={{backgroundColor: 'deeppink', height: 50, width: 150}}
            activeOpacity={0.5}
            onPress={chooseFile}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Choose Image
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textStyle}>Image url{filePath.uri}</Text>
          </View>
        </View>
        <Image source={{uri: filePath.uri}} style={styles.imageStyle} />

        <TouchableOpacity>
          <Text
            style={styles.submitButton}
            onPress={() => handleRegistration()}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 10,
    // height: 20,
  },
  headerText: {
    fontFamily: fonts.regular,
    color: 'white',
    fontWeight: '600',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 47,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 12,
    fontSize: 20,
    fontFamily: fonts.boldItalic,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    borderRadius: 5,
  },
});
