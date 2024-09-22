import { View, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './cart.styles'
import Header from '../../components/header/Header.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import CartItem from './cartItem/cart-item.component'
import { useDispatch, useSelector } from 'react-redux'
import { getCartListThunk } from '../../redux/cart/cart.slice'
import { useFocusEffect } from '@react-navigation/native';

const cartItems = [
  {
    id: 1,
    name: 'Sản phẩm A',
    price: 200000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/319715/xiaomi-redmi-13c-5g-041223-025918-600x600.jpg',
  },
  {
    id: 2,
    name: 'Sản phẩm B',
    price: 300000,
    image: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/24/redminote12-0.png'
  },
]

const Cart = () => {
  const { cartList } = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const cartItems = cartList?.map(item => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    };
  }) || [];


  useFocusEffect(
    useCallback(() => {
      dispatch(getCartListThunk());
    }, [])
  );
  return (
    <>
      <Header
        title={'Giỏ hàng'}
      />
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <PrimaryButton
        style={styles.primaryButton}
        isCartScreen={true}
      >
        Thanh toán
      </PrimaryButton>
    </>
  );
}

export default Cart