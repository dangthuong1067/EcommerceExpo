import React, { memo } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './itemFavorite.styles';
import { formatCurrency } from '../../../helpers/Utils';
import { useDispatch } from 'react-redux';
import { removeFavoriteProduct } from '../../../redux/favorite/favorite.slice';

const ItemFavorite = ({item}) => {
  const dispatch = useDispatch();

  const handleSelectFavorite = (productId) => {
    dispatch(removeFavoriteProduct(productId))
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerFavoriteProduct}>
        <TouchableOpacity
          style={styles.containerImage}
        >
          <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text numberOfLines={1} style={[styles.productPrice, { color: 'red' }]}>{formatCurrency(item.price)}</Text>
        </View>

        <View style={styles.containerHeart}>
          <TouchableOpacity onPress={() => handleSelectFavorite(item.id)} style={styles.heart}>
            <Icon name="heart-sharp" size={24} color="red" />
          </TouchableOpacity>
          <View style={styles.priceAndAddCart}>
            <TouchableOpacity style={styles.addCart}>
              <Text style={styles.textAdd}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const isMemo = (prveProps, nextProps) => {
  return prveProps.item.id === nextProps.item.id;
}

export default memo(ItemFavorite,isMemo)

