import {View, Text, FlatList, ActivityIndicator, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {collection, getDocs} from '@react-native-firebase/firestore';

const ResentAddProduct = () => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  //   if (loading) {
  //     return <ActivityIndicator />;
  //   }

  const fetchProduct = async () => {
    await firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data('products'),
            id: documentSnapshot.id,
            category,
            title,
            description,
            price,
            images,
          });
        });
        setGetData(products);
        setLoading(false);
      });
  };

  useEffect(() => {
    // fetchProduct();
  }, []);

  const fetchAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <View>
      <Text>ResentAddProduct</Text>
      <Button title="collection" onPress={() => fetchAllProducts()} />
      <FlatList
        data={getData}
        keyExtractor={index => index.id}
        renderItem={({item}) => {
          return <View>{/* <Text>{item.category}</Text> */}</View>;
        }}
      />
    </View>
  );
};

export default ResentAddProduct;
