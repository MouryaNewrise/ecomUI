import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailUi = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/13')
      .then(res => res.json())
      .then(json => {
        setData(json);
        // console.log('json', json);
      });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconStyContainer}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            color={Colors.black}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.newCollection}>Product Details</Text>
        <View style={styles.imageViewContainer}>
          <Image style={styles.imageView} source={{uri: data.image}} />
        </View>
        <View style={{width: '100%', height: '40%', padding: 10}}>
          <ScrollView>
            <Text style={[styles.titleStyle, styles.category]}>
              {data.category}
            </Text>
            <Text style={[styles.titleStyle, styles.title]}>{data.title}</Text>
            <Text style={[styles.titleStyle, styles.description]}>
              {data.description}
            </Text>
            <Text style={[styles.priceStyle, styles.price]}>
              ₹ {data.price}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.priceStyle}>
                Rating:{' '}
                <Text>
                  <FontAwesome
                    name="star"
                    color={Colors.extraDarkPrimary}
                    size={18}
                  />
                  <FontAwesome
                    name="star"
                    color={Colors.extraDarkPrimary}
                    size={18}
                  />
                  <FontAwesome
                    name="star"
                    color={Colors.extraDarkPrimary}
                    size={18}
                  />
                  <FontAwesome
                    name="staro"
                    color={Colors.extraDarkPrimary}
                    size={18}
                  />
                  <FontAwesome
                    name="staro"
                    color={Colors.extraDarkPrimary}
                    size={18}
                  />
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.addCart}
          onPress={() => navigation.navigate('CartUi')}
        >
          <Text style={styles.addCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailUi;

const styles = StyleSheet.create({
  category: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 5,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.black,
  },
  description: {
    fontSize: 14,
    paddingVertical: 5,
  },
  price: {
    fontSize: 16,
  },
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
    marginVertical: 10,
  },
  imageView: {
    width: width / 5 - 100,
    height: width / 2,
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
    height: 270,
    // textAlign: 'center',
    borderRadius: 10,
  },
  iconStyContainer: {
    // position: 'absolute',
    textAlign: 'right',
    backgroundColor: Colors.backgroundGray,
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  titleStyle: {
    fontFamily: fonts.regular,
    color: Colors.lightBlack,
    // textAlign: 'center',
  },
  priceStyle: {
    fontFamily: fonts.medium,
    color: Colors.black,
    fontSize: 14,
    // textAlign: 'center',
  },
  addCart: {
    backgroundColor: Colors.lightBlack,
    padding: 10,
    borderRadius: 10,
  },
  addCartText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
});

// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const DetailUi = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/1')
//       .then(res => res.json())
//       .then(json => {
//         setData(json);
//         console.log('json', json);
//       });
//   }, []);
//   return (
//     <View>
//       <Text>Product Details</Text>
//       {/* {data.map(({item}) => {
//         return (
//           <>
//             <View>
//               <Text>{item.category}</Text>
//             </View>
//           </>
//         );
//       })} */}
//       <Text>{data.description}</Text>
//     </View>
//   );
// };

// export default DetailUi;

// const styles = StyleSheet.create({});