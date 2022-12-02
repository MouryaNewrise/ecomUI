import {
  Alert,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors, fonts} from '../assets/Assets';
import Header from '../components/Layout/Header';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/ProductSlice';
import {addToCart} from '../redux/CartSlice';
import {addToCartMy, removeItem} from '../redux/AddToCartSlice';

const FavoriteUi = props => {
  const {navigation} = props;
  //   const getData = props.route.params.itemId;
  const dispatch = useDispatch();
  const FavData = useSelector(state => state.toCart.items);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  //   console.log('FavData', FavData);
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text style={styles.myFavText}>My Favorite</Text>
      <ImageBackground>
        <Image
          style={styles.wishList}
          source={{
            uri:
              'http://3.bp.blogspot.com/-BalaNVRwmhM/VoJmDzFmk0I/AAAAAAAA55I/OoVDKUax5zc/s1600/WishList-logo.gif',
          }}
        />

        <ScrollView style={{marginBottom: 150}}>
          {FavData.filter(e => e.category.toUpperCase().includes(search)).map(
            (data, index) => {
              return (
                <View key={index} style={{marginVertical: 10}}>
                  <View style={styles.imageContainer}>
                    <View style={{paddingVertical: 10}}>
                      <Image
                        source={{
                          uri: data.image,
                        }}
                        style={styles.imageStyle}
                      />
                    </View>

                    <View style={styles.dataView}>
                      <View style={{height: 110}}>
                        <Text style={styles.titleStyle}>
                          {data.title.slice(0, 10)}
                        </Text>
                        <Text style={styles.titleStyle}>
                          {data.category.slice(0, 10)}
                        </Text>
                        <Text style={styles.desStyle}>
                          {data.description.slice(0, 30)}
                        </Text>
                        <Text style={styles.priceStyle}>{data.price}</Text>
                      </View>

                      <View
                        style={{flexDirection: 'row', marginHorizontal: -12}}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(removeItem(data));
                          }}
                        >
                          <Text style={styles.deleteStyle}>
                            <AntDesign
                              name="delete"
                              size={20}
                              color={Colors.secondary}
                            />
                            Delete
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={
                            () => dispatch(addToCartMy(data))
                            // navigation.navigate('CartUi', {itemId: data.id})
                          }
                        >
                          <Text style={styles.cardStyle}>
                            <Fontisto
                              name="shopping-basket-add"
                              size={20}
                              color={Colors.green}
                            />
                            To Cart
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            },
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FavoriteUi;

const styles = StyleSheet.create({
  notifyStyle: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'flex-end',
    marginLeft: 340,
  },
  myFavText: {
    padding: 20,
    fontFamily: fonts.medium,
    fontSize: 25,
    color: Colors.black,
    fontWeight: '700',
  },
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  imageStyle: {width: 150, height: 150, borderRadius: 100},
  dataView: {width: '50%', paddingVertical: 10},
  titleStyle: {fontFamily: fonts.semiBold, color: Colors.black},
  desStyle: {fontFamily: fonts.medium, color: Colors.lightBlack},
  priceStyle: {fontFamily: fonts.regular, color: Colors.black},
  deleteStyle: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 6,
  },
  cardStyle: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 2,
  },
  wishList: {
    width: 350,
    height: 190,
    opacity: 4,
    margin: 20,
    marginTop: 135,
    opacity: 0.2,
    position: 'absolute',
  },
});
