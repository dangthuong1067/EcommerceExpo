import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './checkbox.styles'
import Icon from 'react-native-vector-icons/Ionicons'

const CheckBox = ({ label, isCheck, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.circle}>
        {isCheck &&
          <Icon
            name={'checkmark-outline'}
            size={15}
            color='black'
          />
        }
      </View>
      <Text style={styles.textCheckBox}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CheckBox