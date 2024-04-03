import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './itemCategory.styles'

const ItemCategories = ({ categoryName, image, index, lastIndex, backgroundColor }) => {
  return (
    <View
      style={styles.itemCategory(index, lastIndex,backgroundColor)}
    >
      <Image
        source={{ uri: image }} style={styles.image}
      />
      <Text style={styles.categoryName}>{categoryName}</Text>
    </View>
  )
}

export default ItemCategories
