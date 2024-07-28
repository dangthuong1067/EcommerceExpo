import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './counter-button.styles'

const CounterButton = ({ style }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={[styles.quantityContainer, style]}>
      <TouchableOpacity
        onPress={handleDecreaseQuantity}
        style={styles.addCart}>
        <Text style={styles.textAdd}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity
        onPress={handleIncreaseQuantity}
        style={styles.addCart}>
        <Text style={styles.textAdd}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CounterButton