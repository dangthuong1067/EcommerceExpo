import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './counter-button.styles'

const CounterButton = ({ style, handleDecreaseQuantity, handleIncreaseQuantity, quantity }) => {
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