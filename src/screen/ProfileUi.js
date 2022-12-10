import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, fonts} from '../assets/Assets';
import DocumentPicker from 'react-native-document-picker';

const ProfileUi = () => {
  const [avatar, setAvatar] = useState('');

  const selectImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setAvatar(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}></View>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>
          {avatar ? (
            <FontAwesome name="user" size={152} color={'yellow'} />
          ) : (
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
              }}
            />
          )}
        </Text>
        <Text style={{marginTop: 105, marginRight: 20}}>
          <FontAwesome
            name="camera-retro"
            size={45}
            // color={'grey'}
            onPress={() => selectImage()}
          />
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
