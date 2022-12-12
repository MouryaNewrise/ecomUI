import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, fonts} from '../assets/Assets';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

const ProfileUi = ({navigation}) => {
  const [avatar, setAvatar] = useState('');
  const [avatar1, setAvatar1] = useState('');
  const [getData, setGetData] = useState([]);

  const selectImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: DocumentPicker.types.images,
      });
      //   console.log('res : ' + JSON.stringify(res));
      setAvatar(res);
      //   let myObject = {...avatar};
      let myOBJ = Object.assign({}, avatar.shift());

      setAvatar1(myOBJ);
      //   for (let i = 0; i = avatar.length; i++) {
      //     myObject[i] = avatar[i];
      //   }
      console.log('myOBJ', avatar1);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const fetchData = async () => {
    await firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let getData = [];
        querySnapshot.forEach(documentSnapshot => {
          getData.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        // console.log({...getData.shift()});
        setGetData({...getData.shift()});
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text
          onPress={() => navigation.navigate('Users', getData)}
          style={styles.EditUserProfile}
        >
          <AntDesign name="edit" color="white" size={30} />
        </Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userText}>
          {!avatar ? (
            <Text style={{marginLeft: 18, marginTop: -5}}>
              {' '}
              <FontAwesome name="user" size={152} color={'yellow'} />{' '}
            </Text>
          ) : (
            <Image style={styles.userImage} source={{uri: avatar1.uri}} />
          )}
        </View>
        <Text style={{marginTop: 105, marginRight: 90}}>
          <FontAwesome
            name="camera-retro"
            size={45}
            // color={'grey'}
            onPress={() => selectImage()}
          />
        </Text>

        <View>
          <Text style={styles.peter}>{getData.userName}</Text>
        </View>
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.userAboutContainer}>
          <Text style={styles.userAbout}>{getData.designation}</Text>
          <Text style={{fontFamily: fonts.regular}}>
            About Profile
            {/* ({getData.userType.label}) */}
          </Text>
        </View>
        <Entypo />
        <View style={{paddingHorizontal: 20}}>
          <Text>Email:{getData.email}</Text>
          <View style={{marginTop: 50}}>
            <Text style={styles.experience}>PRODUCT CATEGORY</Text>
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
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>First Product Category</Text>
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
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>Second product category</Text>
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
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>Third product category</Text>
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
    marginLeft: 10,
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
  userAbout: {
    fontFamily: fonts.bold,
    color: Colors.lightBlack,
    fontWeight: '900',
    fontSize: 18,
  },
  roTextStyle: {flexDirection: 'row', paddingVertical: 30},
  experience: {
    fontFamily: fonts.mediumItalic,
    color: Colors.darkPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 2,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 5,
  },
  EditUserProfile: {
    marginLeft: 350,
    backgroundColor: Colors.shadowColorAndroidDefault,
    height: 50,
    padding: 10,
    borderRadius: 50,
    elevation: 0.8,
  },
});

// // Import React
// import React, {useState} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';

// // Import Document Picker
// import DocumentPicker from 'react-native-document-picker';

// const App = () => {
//   const [singleFile, setSingleFile] = useState('');
//   const [multipleFile, setMultipleFile] = useState([]);

//   const selectOneFile = async () => {
//     //Opening Document Picker for selection of one file
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//         //There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       //Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res));
//       console.log('URI : ' + res.uri);
//       console.log('Type : ' + res.type);
//       console.log('File Name : ' + res.name);
//       console.log('File Size : ' + res.size);
//       //Setting the state to show single file attributes
//       setSingleFile(res);
//     } catch (err) {
//       //Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         //If user canceled the document selection
//         alert('Canceled from single doc picker');
//       } else {
//         //For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };

//   const selectMultipleFile = async () => {
//     //Opening Document Picker for selection of multiple file
//     try {
//       const results = await DocumentPicker.pickMultiple({
//         type: [DocumentPicker.types.images],
//         //There can me more options as well find above
//       });
//       for (const res of results) {
//         //Printing the log realted to the file
//         console.log('res : ' + JSON.stringify(res));
//         console.log('URI : ' + res.uri);
//         console.log('Type : ' + res.type);
//         console.log('File Name : ' + res.name);
//         console.log('File Size : ' + res.size);
//       }
//       //Setting the state to show multiple file attributes
//       setMultipleFile(results);
//     } catch (err) {
//       //Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         //If user canceled the document selection
//         alert('Canceled from multiple doc picker');
//       } else {
//         //For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={styles.titleText}>
//         Example of File Picker in React Native
//       </Text>
//       <View style={styles.container}>
//         {/*To show single file attribute*/}
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={selectOneFile}
//         >
//           {/*Single file selection button*/}
//           <Text style={{marginRight: 10, fontSize: 19}}>
//             Click here to pick one file
//           </Text>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//             }}
//             style={styles.imageIconStyle}
//           />
//         </TouchableOpacity>
//         {/*Showing the data of selected Single file*/}
//         <Text style={styles.textStyle}>
//           File Name: {singleFile.name ? singleFile.name : ''}
//           {'\n'}
//           Type: {singleFile.type ? singleFile.type : ''}
//           {'\n'}
//           File Size: {singleFile.size ? singleFile.size : ''}
//           {'\n'}
//           URI: {singleFile.uri ? singleFile.uri : ''}
//           {'\n'}
//         </Text>
//         <View
//           style={{
//             backgroundColor: 'grey',
//             height: 2,
//             margin: 10,
//           }}
//         />
//         {/*To multiple single file attribute*/}
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={selectMultipleFile}
//         >
//           {/*Multiple files selection button*/}
//           <Text style={{marginRight: 10, fontSize: 19}}>
//             Click here to pick multiple files
//           </Text>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//             }}
//             style={styles.imageIconStyle}
//           />
//         </TouchableOpacity>
//         <ScrollView>
//           {/*Showing the data of selected Multiple files*/}
//           {multipleFile.map((item, key) => (
//             <View key={key}>
//               <Text style={styles.textStyle}>
//                 File Name: {item.name ? item.name : ''}
//                 {'\n'}
//                 Type: {item.type ? item.type : ''}
//                 {'\n'}
//                 File Size: {item.size ? item.size : ''}
//                 {'\n'}
//                 URI: {item.uri ? item.uri : ''}
//                 {'\n'}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     backgroundColor: '#fff',
//     fontSize: 15,
//     marginTop: 16,
//     color: 'black',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#DDDDDD',
//     padding: 5,
//   },
//   imageIconStyle: {
//     height: 20,
//     width: 20,
//     resizeMode: 'stretch',
//   },
// });
