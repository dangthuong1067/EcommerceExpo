import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo, useState } from 'react';
import { formatCurrency } from '../../helpers/Utils';
import styles from './item.styles';
import { useNavigation } from '@react-navigation/native';
const Item = ({ item }) => {
  const [indexSelected, setIndexSelected] = useState(0);

  const discountFunction = (price, reducedPrice) => {
    const discount = ((price - reducedPrice) / price) * 100;
    return discount;
  }

  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeStackNavigator', {
        screen: 'ProductDetail',
        params: {
          product: item.items[indexSelected],
          productName: item.name,
          capacities: item.items,
          imageSliders: item.imageSliders,
          productList: item.items,
          productId: item.id,
        },
      })}
      style={styles.container}>
      <Image source={{ uri: item.items[indexSelected].image }} style={styles.image} resizeMode="contain" />
      {item.items[indexSelected].reducedPrice &&
        <View style={styles.discount}>
          <Text style={styles.textDiscount}><Text style={styles.percent}>{parseInt(discountFunction(item.items[indexSelected].price, item.items[indexSelected].reducedPrice))}%</Text> GIẢM GIÁ</Text>
        </View>
      }

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
        <View style={styles.containerCapacity}>
          {item.items.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setIndexSelected(index)}
                style={styles.capacity(index, indexSelected)}
                key={index}
              >
                <Text style={styles.capacityText(index, indexSelected)}>{item.capacity}</Text>
              </TouchableOpacity>
            )
          }
          )}
        </View>

        <View style={styles.priceAndAddCart}>
          <View>
            <Text style={item.items[indexSelected].reducedPrice ? styles.price : styles.priceWithOutreducedPrice}>{formatCurrency(item.items[indexSelected].price)}</Text>
            <Text style={styles.reducedPrice}>{formatCurrency(item.items[indexSelected].reducedPrice)}</Text>
          </View>

          <TouchableOpacity style={styles.addCart}>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const isMemo = (prveProps, nextProps) => {
  if (prveProps.item === nextProps.item) return true;
  else return false;
}

export default memo(Item, isMemo);


