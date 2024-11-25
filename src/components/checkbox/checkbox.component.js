import { View, Text, TouchableOpacity } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import styles from './checkbox.styles'
import Icon from 'react-native-vector-icons/Ionicons'

const CheckBox = forwardRef(({ label, onPress, initialCheckStatus }, ref) => {
  const [isCheck, setIsCheck] = useState(initialCheckStatus)

  useImperativeHandle(ref, () => ({
    isChecked: () => isCheck,
  }));

  return (
    <TouchableOpacity
      onPress={() => {
        setIsCheck(prevIsCheck => {
          const newIsCheck = !prevIsCheck;
          onPress(newIsCheck);
          return newIsCheck;
        });
      }}
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
  );
});

export default CheckBox