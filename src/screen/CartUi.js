import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, fonts} from '../assets/Assets';
import Header from '../components/Layout/Header';

const CartUi = ({navigation}) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Header />
      <View style={{height: 600}}>
        <Text style={styles.myCartText}>My Cart</Text>
        <ScrollView>
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

            <View style={styles.itemView}>
              <View style={{height: 110}}>
                <Text style={styles.titleStyle}>Title</Text>
                <Text style={styles.desStyle}>Description</Text>
                <Text style={styles.priceStyle}>price</Text>

                <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Text>
                      <AntDesign
                        name="pluscircle"
                        color={Colors.blue}
                        size={25}
                      />
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.countStyle}>{count}</Text>
                  <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <Text>
                      <AntDesign
                        name="minuscircle"
                        color={Colors.blue}
                        size={25}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text style={styles.deleteView}>
                    <AntDesign
                      name="delete"
                      size={20}
                      color={Colors.secondary}
                    />
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeUi')}>
                  <Text style={styles.homeText}>
                    <Fontisto name="home" size={20} color={Colors.green} />
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.totalStyle}>Total : ₹653</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MakePayment')}
          style={styles.makePayment}
        >
          <Text style={{color: Colors.white}}>
            <MaterialCommunityIcons
              name={'cards'}
              color={Colors.white}
              size={25}
            />
            Make Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartUi;

const styles = StyleSheet.create({
  myCartText: {
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
  itemView: {width: '50%', paddingVertical: 10, marginRight: 10},
  titleStyle: {fontFamily: fonts.semiBold, color: Colors.black},
  desStyle: {fontFamily: fonts.medium, color: Colors.lightBlack},
  priceStyle: {fontFamily: fonts.regular, color: Colors.black},
  deleteView: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
  },
  homeText: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
  },
  paymentContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGray,
    height: 100,
    width: '100%',
    justifyContent: 'space-between',
    padding: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  totalStyle: {fontFamily: fonts.bold, fontSize: 16, fontWeight: '700'},
  makePayment: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
    height: 40,
  },
  btnContainer: {flexDirection: 'row', paddingVertical: 20},
  countStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
  },
});
