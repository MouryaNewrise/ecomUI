import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, fonts} from '../assets/Assets';
import axios from 'axios';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const allCategory = [
  {
    id: '1',
    category: 'Handbags',
  },
  {
    id: '2',
    category: 'Dresses',
  },
  {
    id: '3',
    category: 'Jewelry',
  },
  {
    id: '4',
    category: 'Games',
  },
  {
    id: '5',
    category: 'Woman',
  },
];
const HomeUi = ({navigation}) => {
  const [collection, setCollection] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState();
  const collectionAxios = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setCollection(res.data);
      setFilterData(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const searchData = text => {
    if (text) {
      const newData = collection.filter(item => {
        const itemData = item.category
          ? item.category.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(collection);
      setSearch(text);
    }
  };
  const filteredPersons = collection.filter(person => {
    return (
      person.title.toLowerCase().includes(search.toLowerCase()) ||
      person.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    collectionAxios();
  }, []);
  return (
    <>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerFlex}>
            <TouchableOpacity>
              <Icon
                onPress={() => navigation.navigate('MyDrawer')}
                style={styles.menuIconStyle}
                name="menu-outline"
                size={35}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.searchContainer}
              onChangeText={() => searchData()}
              placeholder="Search..."
              placeholderTextColor={Colors.darkPlaceHoldColor}
            />
            <EvilIcons
              style={styles.searchIconStyle}
              name="search"
              size={30}
              color={'black'}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={[styles.AllTextStyle, styles.itemView]}>All</Text>
          <FlatList
            data={allCategory}
            idExtractor={id => {
              id.id;
            }}
            renderItem={({item}) => {
              return (
                <View style={styles.itemView}>
                  <Text style={styles.categoryView}>{item.category}</Text>
                </View>
              );
            }}
            horizontal={true}
          />
        </View>
        <Text style={styles.newCollection}>New Collection</Text>
        <FlatList
          data={collection}
          numColumns={2}
          idExtractor={id => {
            id.id;
          }}
          renderItem={({item = item}) => {
            return (
              <ScrollView style={styles.collectionView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailUi');
                  }}
                  style={styles.spaceBetween}
                >
                  <View style={styles.imageViewContainer}>
                    <Image
                      style={styles.imageView}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View style={styles.iconStyContainer}>
                    <MaterialIcons
                      name="favorite-border"
                      size={20}
                      color={clicked ? Colors.lightBlack : Colors.cardColor}
                    />
                  </View>
                </TouchableOpacity>

                <Text style={styles.categoryStyle}>{item.category}</Text>
                <Text style={styles.titleStyle}>
                  {item.title == 25 ? item.title : item.title.slice(0, 20)}
                </Text>
                <Text style={styles.priceStyle}>₹ {item.price}</Text>
              </ScrollView>
            );
          }}
        />
      </View>
    </>
  );
};

export default HomeUi;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
  AllTextStyle: {
    backgroundColor: Colors.black,
    color: Colors.white,
    fontFamily: fonts.bold,
  },
  itemView: {
    padding: 15,
    borderWidth: 1,
    marginVertical: 30,
    marginRight: 15,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: 'black',
  },
  categoryView: {
    fontFamily: fonts.regular,
    fontWeight: '600',
  },

  newCollection: {
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: Colors.black,
    fontSize: 25,
    marginBottom: 20,
  },
  imageView: {
    width: width / 3 - 10,
    height: width / 3,
    margin: 24,
  },
  collectionView: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageViewContainer: {
    backgroundColor: Colors.backgroundGray,
    height: 205,
    textAlign: 'center',
    borderRadius: 10,
  },
  iconStyContainer: {
    zIndex: 2,
    position: 'absolute',
    textAlign: 'right',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    marginLeft: 130,
  },
  titleStyle: {
    fontFamily: fonts.regular,
    color: Colors.lightBlack,
  },
  priceStyle: {
    fontFamily: fonts.medium,
    color: Colors.black,
    fontSize: 14,
  },
  categoryStyle: {
    fontFamily: fonts.bold,
    fontWeight: '600',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  searchContainer: {
    width: '85%',
    height: width / 9,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  searchIconStyle: {
    position: 'absolute',
    marginTop: 10,
    marginRight: width / 1 - 65,
  },
  menuIconStyle: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 3,
  },
  headerContainer: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: 'white',
    elevation: 12,
    padding: 10,
  },
  headerFlex: {
    flexDirection: 'row-reverse',
  },
});
