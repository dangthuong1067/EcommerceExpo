import { Pressable, Text, TouchableOpacity, View } from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./primary-button.styles";
import { formatCurrency } from "../../helpers/Utils";
const PrimaryButton = ({
  children,
  style,
  onPress,
  isCartScreen,
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
      style={[styles.linearContainer, styles.hasCartScreen(isCartScreen)]}
    >
      {typeof children === 'string'
        ? <Text style={styles.buttonText}>{children}</Text>
        : children
      }
      {isCartScreen && <Text style={styles.quantity}>(2)</Text>}
    </LinearGradient>
    <View style={styles.totalPrice}>
      {isCartScreen && <Text style={styles.textTotalPrice}>{formatCurrency(500000)}</Text>}
    </View>
  </TouchableOpacity>
)

export default PrimaryButton
