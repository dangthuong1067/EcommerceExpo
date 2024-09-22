import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './counter-button.styles'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../../redux/cart/cart.slice'

const CounterButton = ({ style }) => {
  const { quantity } = useSelector(state => state.cart);
  const dispatch = useDispatch()
 
  const handleIncreaseQuantity = () => {
    dispatch(updateQuantity(quantity + 1))
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(updateQuantity(quantity - 1))
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