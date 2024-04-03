import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo, useState } from 'react';
import { formatCurrency } from '../../helpers/Utils';
import styles from './item.styles';
const Item = ({ item }) => {
  const [indexSelected, setIndexSelected] = useState(0);

  const discountFunction = (price, reducedPrice) => {
    const discount = ((price - reducedPrice) / price) * 100;
    return discount;
  }
  return (
    <View style={styles.container}>
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
    </View>
  )
}

const isMemo = (prveProps, nextProps) => {
  if (prveProps.item === nextProps.item) return true;
  else return false;
}

export default memo(Item, isMemo);


