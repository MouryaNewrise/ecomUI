import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors, fonts} from '../assets/Assets';
import Header from '../components/Layout/Header';

const FavoriteUi = ({navigation}) => {
  return (
    <View>
      <Header />
      <Text style={styles.myFavText}>My Favorite</Text>
      <View style={styles.imageContainer}>
        <View style={{paddingVertical: 10}}>
          <Image
            source={{
              uri:
                'https://www.shutterstock.com/image-photo/color-full-hanging-umbrella-260nw-213687085.jpg',
            }}
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.dataView}>
          <View style={{height: 110}}>
            <Text style={styles.titleStyle}>Something where you </Text>
            <Text style={styles.desStyle}>
              your product in an eCommerce store with a title providing all the
              required
            </Text>
            <Text style={styles.priceStyle}>₹ 653</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text style={styles.deleteStyle}>
                <AntDesign name="delete" size={20} color={Colors.secondary} />
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CartUi')}>
              <Text style={styles.cardStyle}>
                <Fontisto
                  name="shopping-basket-add"
                  size={20}
                  color={Colors.green}
                />
                Add to Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  },
  cardStyle: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 2,
  },
});
