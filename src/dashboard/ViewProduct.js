import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ViewProduct = item => {
  const initialValue = item.route.params;
  const [viewData, setViewData] = useState(initialValue);
  console.log('initialValue', item);
  return (
    <View>
      <Text>View Product</Text>
      {/* <Text>id:{viewData.id}</Text>
      <Text>title:{viewData.title}</Text>
      <Text>category:{viewData.category}</Text>
      <Text>description:{viewData.description}</Text>
      <Text>price:{viewData.price}</Text> */}
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({});
