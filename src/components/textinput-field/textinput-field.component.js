import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './textinput-field.styles'

const TextInputField = ({
  placeholder,
  label,
  iconLeft,
  onBlur,
  onChangeText,
  value,
  secure = false
}) => {
  const [showSecureText, setShowSecureText] = useState(true)

  const onPress = () => {
    setShowSecureText(!showSecureText)
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerTextInput}>
        <View style={styles.icon}>
          <Icon
            name={iconLeft}
            size={27}
            color='#838079'
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder={placeholder}
            secureTextEntry={(secure && showSecureText) ? true : false}
            style={styles.placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize="none"
          />
        </View>
        {secure &&
          <TouchableOpacity
            onPress={onPress}
          >
            <Icon
              name={showSecureText ? "eye-off-outline" : "eye-outline"}
              size={27}
              color='#838079'
            />
          </TouchableOpacity>
        }
      </View>
    </>

  )
}

export default TextInputField