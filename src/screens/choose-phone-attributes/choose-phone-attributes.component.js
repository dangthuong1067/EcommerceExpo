import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header.component'
import PrimaryButton from '../../components/primary-button/primary-button.component';
import { formatCurrency } from '../../helpers/Utils';
import styles from './choose-phone-attributes.styles';

const ChoosePhoneAttributes = ({ route, navigation }) => {
  const { product, productName, capacities, productList } = route.params;

  const [indexSelectedCapacity, setIndexSelectedCapacity] = useState(undefined);
  const [indexSelectedColor, setIndexSelectedColor] = useState(undefined);
  const capacityText = capacities[indexSelectedCapacity]?.capacity

  const [colorText, setColorText] = useState(undefined);
  const productPrice = productList.find(item => item.capacity === capacityText)?.colors.find(item => item.color === colorText).price

  const handleSelect = () => {
    if (!colorText) return Alert.alert('Vui lòng chọn màu sắc')
    if (!capacityText) return Alert.alert('Vui lòng chọn dung lượng')

    navigation.navigate({
      name: 'ProductDetail',
      params: { 
        colorText: colorText ,
        capacityText: capacityText,
        productPrice: productPrice
      },
      merge: true,
    });
  }
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setIndexSelectedColor(index)
        setColorText(item.color)
      }}
      style={styles.color(index, indexSelectedColor)}
    >
      <View style={styles.colorImageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>
      <Text style={styles.colorText}>{item.color}</Text>
    </TouchableOpacity>

  )
  return (
    <>
      <View style={styles.container}>
        <Header
          title={'Lựa chọn thuộc tính'}
        />
        <View style={styles.productSummaryContainer}>
          <View style={styles.productSummaryContent}>
            <View style={styles.productImageContainer}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
            </View>

            <View>
              <Text style={styles.productName}>{productName}</Text>
              {colorText && capacityText && <Text>Màu sắc: <Text style={styles.selectedColor}>{`${colorText} / ${capacityText}`}</Text></Text>}
              <Text style={styles.discountedPrice}>{formatCurrency(productPrice)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.attributeSelectionContainer}>
          <Text style={styles.attributeLabel}>Màu sắc: <Text style={styles.selectedAttribute}>{colorText}</Text></Text>
          <View style={styles.colorList}>
            <FlatList
              data={product.colors}
              keyExtractor={(item, index) => index}
              renderItem={renderItem}
              numColumns={2}
            />
          </View>

          <Text style={styles.attributeLabel}>Dung lượng: <Text style={styles.selectedAttribute}>{capacityText}</Text></Text>
          <View style={styles.containerCapacity}>
            {capacities.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setIndexSelectedCapacity(index)}
                  style={styles.capacity(index, indexSelectedCapacity)}
                  key={index}
                >
                  <Text
                    style={styles.capacityText(index, indexSelectedCapacity)}
                  >{item.capacity}</Text>
                </TouchableOpacity>
              )
            }
            )}
          </View>
        </View>
      </View>

      <PrimaryButton
        onPress={handleSelect}
        style={styles.primaryButton}
      >
        Chọn
      </PrimaryButton>
    </>
  )
}

export default ChoosePhoneAttributes