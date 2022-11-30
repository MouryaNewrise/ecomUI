import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/AntDesign';
// import {getProduct} from '../services/ProductServices';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/ProductSlice';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailUi = props => {
  const {navigation} = props;
  const getData = props.route.params.itemId;
  const dispatch = useDispatch();
  //   const data = useSelector(state => state.product);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${getData}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
    // dispatch(fetchData());
  }, []);

  //   console.log('getData', dispatch(fetchData(getData)));
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
          onPress={() => {
            navigation.navigate('CartUi', {itemId: data.id});
          }}
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
    fontSize: 22,
    marginVertical: 5,
  },
  imageView: {
    width: '50%',
    height: height / 2 - 108,
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
    borderRadius: 10,
    alignItems: 'center',
  },
  iconStyContainer: {
    textAlign: 'right',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    width: 50,
    elevation: 12,
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
  addCart: {
    backgroundColor: Colors.cardColor,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 8,
  },
  addCartText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
});
