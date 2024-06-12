import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header.component'
import PrimaryButton from '../../components/primary-button/primary-button.component';
import { formatCurrency } from '../../helpers/Utils';
import styles from './choose-phone-attributes.styles';

const ChoosePhoneAttributes = ({ route }) => {
  const { product, productName, capacities } = route.params;
  const [indexSelectedCapacity, setIndexSelectedCapacity] = useState(0);
  const capacityText = capacities[indexSelectedCapacity].capacity

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => setIndexSelectedCapacity(index)}
      style={styles.color(index, indexSelectedCapacity)}
    >
      <View style={styles.colorImageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>
      <Text style={styles.colorText}>{item}</Text>
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
              <Text>Màu sắc: <Text style={styles.selectedColor}>Trắng/ 64GB</Text></Text>
              <Text style={styles.discountedPrice}>{formatCurrency(product.reducedPrice)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.attributeSelectionContainer}>
          <Text style={styles.attributeLabel}>Màu sắc: <Text style={styles.selectedAttribute}>{capacities[0].colors[0]}</Text></Text>
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
                  <Text style={styles.capacityText(index, indexSelectedCapacity)}>{item.capacity}</Text>
                </TouchableOpacity>
              )
            }
            )}
          </View>
        </View>
      </View>

      <PrimaryButton
        onPress={() => { }}
        style={styles.primaryButton}
      >
        Chọn
      </PrimaryButton>
    </>
  )
}

export default ChoosePhoneAttributes