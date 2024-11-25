import { Pressable, Text, TouchableOpacity, View } from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./primary-button.styles";
import { formatCurrency } from "../../helpers/Utils";
import { useSelector } from "react-redux";
const PrimaryButton = ({
  children,
  style,
  onPress,
  isCartScreen,
  totalCheckedProducts,
  ...props
}) => {

  const totalPrice = useSelector(state => state.cart.totalPrice)

  return (
    <TouchableOpacity
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
        {isCartScreen && totalCheckedProducts > 0 && <Text style={styles.quantity}>({totalCheckedProducts})</Text>}
      </LinearGradient>
      <View style={styles.totalPrice}>
        {isCartScreen && totalCheckedProducts > 0 && <Text style={styles.textTotalPrice}>{formatCurrency(totalPrice)}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton
