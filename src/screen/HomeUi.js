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
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, fonts} from '../assets/Assets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/ProductSlice';
import {addToFav} from '../redux/CartSlice';

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
    key: 'jewelery',
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
  const collection = useSelector(state => state.product.data);
  //   const likeItem = useSelector(state => state.toCart.items);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  });
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
              placeholder="Search..."
              placeholderTextColor={Colors.darkPlaceHoldColor}
              onChangeText={r => setSearch(r)}
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
          <Text
            onPress={() => setFilter('all')}
            style={[styles.AllTextStyle, styles.itemView]}
          >
            All
          </Text>
          <FlatList
            data={allCategory}
            idExtractor={id => {
              id.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => setFilter(item.key)}
                  style={styles.itemView}
                >
                  <Text style={styles.categoryView}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
            horizontal={true}
          />
        </View>
        <Text style={styles.newCollection}>New Collection</Text>
        <View style={styles.FlatListView}>
          <FlatList
            data={
              filter == 'all'
                ? collection
                : collection.filter(e => e.category == filter, search)
            }
            numColumns={2}
            idExtractor={id => {
              id.id;
            }}
            renderItem={({item, index}) => {
              return (
                <ScrollView style={styles.collectionView}>
                  <TouchableOpacity
                    onPress={() => {
                      {
                        dispatch(addToFav(item));
                        if (liked.includes(index)) {
                          let unLiked = liked.filter(
                            likeNum => likeNum !== index,
                          );
                          setLiked(unLiked);
                        } else {
                          setLiked([...liked, index]);
                        }
                      }
                    }}
                    style={styles.iconStyContainer}
                  >
                    <Text>
                      <Ionicons
                        name="heart-circle-sharp"
                        size={35}
                        color={liked.includes(index) ? 'red' : Colors.cardColor}
                      />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailUi', {itemId: item.id});
                    }}
                    style={styles.spaceBetween}
                  >
                    <View style={styles.imageViewContainer}>
                      <Image
                        style={styles.imageView}
                        source={{uri: item.image}}
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
    width: width / 3,
    height: 150,
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
    padding: 3,
    marginLeft: 135,
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
  FlatListView: {
    marginBottom: 100,
  },
});
