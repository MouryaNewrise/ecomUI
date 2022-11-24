import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import ImagesSwiper from 'react-native-image-swiper';
import {Colors} from '../../assets/Assets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const customImg = [
  'https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda',
  'https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68',
  'https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c',
];

const Banner = () => {
  return (
    <>
      <View style={styles.container}>
        <ImagesSwiper
          images={customImg}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={true}
          width={width}
          height={width / 5 - 10}
        />
      </View>
    </>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkPrimary,
    width: '100%',
    height: width / 4.5 - 10,
  },
});
