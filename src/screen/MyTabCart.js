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
import SocialIcon from '../components/Layout/SocialIcon';

const MyTabCart = ({navigation}) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <SocialIcon />
      <View style={{height: 600}}>
        <Text style={styles.myCartText}>My Cart</Text>
        <ScrollView>
          <View style={styles.imageContainer}>
            <View style={{paddingVertical: 10}}>
              <Image
                source={{
                  uri:
                    'https://beebom.com/wp-content/uploads/2020/08/71EODBGqnRL._AC_SL1500_-e1597377175891.jpg',
                }}
                style={styles.imageStyle}
              />
            </View>

            <View style={styles.itemView}>
              <View style={{height: 110}}>
                <Text style={styles.titleStyle}>title providing</Text>
                <Text style={styles.desStyle}>eCommerce store with</Text>
                <Text style={styles.priceStyle}>₹ 653</Text>
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

              <View style={{flexDirection: 'column'}}>
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
    </View>
  );
};

export default MyTabCart;

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
    marginBottom: 10,
  },
  homeText: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
  },
  btnContainer: {flexDirection: 'row', paddingVertical: 20},
  countStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
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
    // marginBottom: -30,
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
});
