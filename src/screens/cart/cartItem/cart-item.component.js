import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import styles from './cart-item.styles'
import CounterButton from '../../../components/counterButton/counter-button.component'
import CheckBox from '../../../components/checkbox/checkbox.component'
import { formatCurrency } from '../../../helpers/Utils'
import { useDispatch } from 'react-redux'
import { calculateTotal, removeCartThunk, saveCheckStatusThunk } from '../../../redux/cart/cart.slice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)
  const checkBoxRef = useRef();

  useEffect(() => {
    const checked = checkBoxRef.current.isChecked()
    checked && dispatch(calculateTotal({ checked, productPriceTotal: item.price * quantity }))
  }, [])

  const removeProductInCart = () => {
    const checked = checkBoxRef.current.isChecked()
    Alert.alert('Thông báo', 'Bạn có muốn xóa sản phẩm này không?', [
      {
        text: 'OK', onPress: () => {
          dispatch(removeCartThunk({ productId: item.id }))
          checked && dispatch(calculateTotal({ productPriceTotal: item.price * quantity, isDecrease: true }))
        }
      },
      {
        text: 'Hủy',
        onPress: () => { },
      },
    ]);
  }

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1
      if (checkBoxRef.current.isChecked()) {
        dispatch(calculateTotal({ productPriceTotal: item.price * 1, isDecrease: true }))
      }

      if (newQuantity < 1) return 1
      return newQuantity
    })
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1

      if (checkBoxRef.current.isChecked()) {
        dispatch(calculateTotal({ productPriceTotal: item.price * 1, isIncrease: true, }))
      }

      return newQuantity
    })
  }

  const onPress = (checked) => {
    dispatch(calculateTotal({ checked, productPriceTotal: item.price * quantity }))
    dispatch(saveCheckStatusThunk({ productId: item.id, checkStatus: checked }))
  }

  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{`${item.name} (${item.capacity}) ${item.color}`}</Text>
        <CounterButton
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          quantity={quantity}
          style={styles.counterButton}
        />
      </View>

      <View style={styles.contentRight}>
        <TouchableOpacity
          onPress={removeProductInCart}
          style={styles.xMark}>
          <Text style={styles.remove}>X</Text>
        </TouchableOpacity>
        <Text>{formatCurrency(item.price)}</Text>

        <CheckBox
          ref={checkBoxRef}
          onPress={onPress}
          initialCheckStatus={item.check}
        />
      </View>
    </View>
  )
}

const isMemo = (prveProps, nextProps) => {
  return prveProps.item.check === nextProps.item.check
}

export default memo(CartItem, isMemo);