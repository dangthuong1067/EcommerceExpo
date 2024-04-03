import { Pressable, Text, TouchableOpacity } from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./primary-button.styles";
const PrimaryButton = ({
  children,
  style,
  onPress,
  ...props
}) => (
  <TouchableOpacity
    // style={(pressed) =>
    //   [styles.button, { opacity: pressed ? 0.8 : 1 }, style]}
    style={[styles.button, style]}
    onPress={onPress}
    {...props}
  >

    <LinearGradient
      colors={['#009900', '#00CC33']}
      style={styles.linearContainer}
    >
      {typeof children === 'string'
        ? <Text style={styles.buttonText}>{children}</Text>
        : children
      }
    </LinearGradient>
  </TouchableOpacity>
)

export default PrimaryButton
