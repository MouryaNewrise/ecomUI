import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NatBanking = ({couponPop, setCouponPop}) => {
  return (
    <View>
      <AntDesign
        name="close"
        size={25}
        color={'red'}
        onPress={() => setCouponPop(!couponPop)}
      />
    </View>
  );
};

export default NatBanking;

const styles = StyleSheet.create({});
