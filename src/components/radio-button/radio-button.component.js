import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './radio-button.styles'

const RadioButton = ({ label, isCheckRadio, onChange, value }) => {
  const onPress = () => {
    onChange(value)
  }
  return (
    <TouchableOpacity style={styles.container}
      onPress={onPress}
    >
      <View
        style={styles.radioButton}
      >
        {isCheckRadio && <View style={styles.radioInner} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default RadioButton