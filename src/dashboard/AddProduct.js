import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;
const AddProduct = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        isExportThumbnail: true,
        maxVideo: 1,
        usedCameraButton: false,
        isCrop: true,
        isCropCircle: true,
        mediaType: 'All',
        usedCameraButton: true,
      });
      console.log('response: ', response);
      setImages(response);
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  const onDelete = value => {
    const data = images.filter(
      item =>
        item?.localIdentifier &&
        item?.localIdentifier !== value?.localIdentifier,
    );
    setImages(data);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{}}>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri:
              item?.type === 'video'
                ? item?.thumbnail ?? ''
                : 'file://' + (item?.crop?.cropPath ?? item.path),
          }}
          style={styles.media}
        />
        <TouchableOpacity
          onPress={() => onDelete(item)}
          activeOpacity={0.9}
          style={styles.buttonDelete}
        >
          <Text style={styles.titleDelete}>
            <AntDesign name="delete" color={'red'} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
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
          <Text style={styles.headerText}>Add Products</Text>
        </View>
        <TouchableOpacity>
          <Text onPress={navigation.navigate('MyDrawer')}>
            <AntDesign name="menufold" color={'white'} size={30} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TextInput
          label="Category"
          placeholder="Product Category"
          value={category}
          onChangeText={text => setCategory(text)}
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Title"
          placeholder="Product Title"
          value={title}
          onChangeText={text => setTitle(text)}
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Description"
          placeholder="Product Description"
          value={description}
          onChangeText={text => setDescription(text)}
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Price"
          placeholder="Product Price"
          value={price}
          onChangeText={text => setPrice(text)}
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <SafeAreaView style={{}}>
          <ScrollView>
            <FlatList
              data={images}
              keyExtractor={(item, index) =>
                (item?.filename ?? item?.path) + index
              }
              renderItem={renderItem}
              numColumns={3}
              style={{
                height: 220,
                borderWidth: 1,
                backgroundColor: Colors.shadowColorAndroidDefault,
              }}
            />
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.openPicker} onPress={openPicker}>
                <Text style={styles.openText}>open</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>

        <TouchableOpacity>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
  imageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bottom: {
    padding: 24,
  },
  openText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 12,
  },
  openPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonDelete: {
    paddingVertical: 4,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  titleDelete: {
    paddingHorizontal: 5,
  },
});
