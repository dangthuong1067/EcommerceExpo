import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './cart-item.styles'
import CounterButton from '../../../components/counterButton/counter-button.component'
import CheckBox from '../../../components/checkbox/checkbox.component'
import { formatCurrency } from '../../../helpers/Utils'
import { useDispatch } from 'react-redux'
import { removeCartThunk } from '../../../redux/cart/cart.slice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const removeProductInCart = () => {
    dispatch(removeCartThunk({ productId: item.id }))
  }
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <CounterButton
          style={styles.counterButton}
        />
      </View>

      <View style={styles.contentRight}>
        <TouchableOpacity
          onPress={removeProductInCart}
          style={styles.xMark}>
          <Text style={styles.remove}>X</Text>
        </TouchableOpacity>
        <Text>{formatCurrency(200000)}</Text>
        <Text style={styles.cost}>{formatCurrency(500000)}</Text>

        <CheckBox
        />
      </View>
    </View>
  )
}

export default CartItem