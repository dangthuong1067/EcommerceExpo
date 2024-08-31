import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header.component'
import { useDispatch, useSelector } from 'react-redux';
import ItemFavorite from './itemFavorite/itemFavorite.component';
const Favorite = () => {
  const favorieList = useSelector(state => state.favorite.favoriteList)
  const { productList } = useSelector(state => state.staticData);
  const idFavoriteList = favorieList.map(item => item.id);

  const favoriteProductListFiltered = productList.filter(product => idFavoriteList.includes(product.id));

  const favoriteList = favoriteProductListFiltered.map(product => {
    const favoriteProduct = favorieList.find(item => item.id === product.id);
    return {
      id: product.id,
      name: product.name,
      price: favoriteProduct.price,
      image: favoriteProduct.image
    };
  })

  return (
    <>
      <Header
        title={'Sản phẩm yêu thích'}
      />
      <FlatList
        data={favoriteList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemFavorite item={item} />}
      />
    </>
  )
}


export default Favorite