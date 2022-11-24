import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, fonts} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CashPayment from './CashPayment';

const MakePayment = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.rowDirection}>
          <Text style={styles.newCollection}>MakePayment</Text>
          <Text style={styles.backButton}>
            <Ionicons
              name="arrow-back"
              size={30}
              onPress={() => navigation.goBack()}
            />
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.rowDirection}>
            <FontAwesome5
              name="sd-card"
              size={30}
              color={Colors.placeholderTextColor}
            />
            <FontAwesome5
              name="wifi"
              size={30}
              color={Colors.placeholderTextColor}
            />
          </View>

          <Text style={[styles.textStyle, styles.nameStyle]}>
            Jonation Micheo
          </Text>
          <View style={styles.rowDirection}>
            <Text style={[styles.textStyle, {marginBottom: 20}]}>
              <Entypo name={'dots-three-horizontal'} size={30} />
              <Entypo name={'dots-two-horizontal'} size={30} />
              3456
            </Text>
            <View>
              <Text style={styles.DateStyle}>Expiry Date</Text>
              <Text style={styles.textStyle}>09/22</Text>
            </View>
          </View>

          <View style={styles.logoImageContainer}>
            <Image
              style={styles.logoImageStyle}
              source={{
                uri:
                  'https://www.i1.creditdonkey.com/image/1/550w/one-choose-account-type-v1.png',
              }}
            />
          </View>
        </View>
        <View style={[styles.cardContainer, {marginVertical: 20, padding: 30}]}>
          <View style={styles.rowDirection}>
            <Text style={styles.textStyle}>Company</Text>
            <Text style={styles.textStyle}>Apple</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.textStyle}>Order Number</Text>
            <Text style={styles.textStyle}>12662201</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.textStyle}>Product</Text>
            <Text style={styles.textStyle}>MackBook Air</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.textStyle}>VAT(20%)</Text>
            <Text style={styles.textStyle}>10,00,000</Text>
          </View>
        </View>
        <View style={styles.rowDirection}>
          <View style={{}}>
            <Text style={styles.DateStyle}>You have to pay</Text>
            <Text style={styles.textStyle}> ₹ 562</Text>
          </View>
          <View>
            <Text>
              <Ionicons
                name="md-arrow-redo-sharp"
                size={40}
                color={Colors.lightGray}
              />
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.upiMethod}>
            <Text style={styles.paymentMethod}>
              {''}
              <FontAwesome name={'gratipay'} color={Colors.white} size={30} />
              Use UPI Payment Method
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upiMethod}>
            <Text style={styles.paymentMethod}>
              {''}
              <FontAwesome
                name={'internet-explorer'}
                color={Colors.white}
                size={30}
              />
              Nat Banking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.upiMethod}
          >
            <Text style={styles.paymentMethod}>
              {''}
              <MaterialCommunityIcons
                name={'cash-100'}
                color={Colors.white}
                size={30}
              />
              Cash Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.componentView}>
            <CashPayment
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MakePayment;

const styles = StyleSheet.create({
  rowDirection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  cardContainer: {
    backgroundColor: Colors.backgroundGray,
    height: 200,
    textAlign: 'center',
    borderRadius: 10,
  },
  mainContainer: {
    margin: 10,
    marginVertical: 10,
  },
  textStyle: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  newCollection: {
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: Colors.black,
    fontSize: 25,
  },
  backButton: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    marginTop: -10,
  },
  upiMethod: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginVertical: 10,
  },
  paymentMethod: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  nameStyle: {
    padding: 10,
    color: Colors.primary,
    fontWeight: '500',
    fontSize: 20,
  },
  logoImageStyle: {
    width: '100%',
    height: 50,
  },
  logoImageContainer: {
    marginBottom: 0,
  },
  DateStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.darkPlaceHoldColor,
  },
  modalView: {
    backgroundColor: Colors.shadowColorAndroidDefault,
    flex: 1,
    justifyContent: 'center',
  },
  componentView: {
    backgroundColor: Colors.white,
    padding: 10,
    margin: 15,
    borderRadius: 20,
    elevation: 12,
  },
});
