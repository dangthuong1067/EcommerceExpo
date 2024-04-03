import { Image, Text, TouchableOpacity, View } from "react-native"
import TextInputField from "../../components/textinput-field/textinput-field.component"
import PrimaryButton from "../../components/primary-button/primary-button.component"
import styles from "./forgot-password.styles"
import IMAGES from "../../images/images"

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={IMAGES.logo}
          style={styles.image}
          resizeMode="cover" />
        <Text style={styles.appName}>Ecommerce App</Text>
      </View>
      <Text style={styles.textEmail}>Nhập địa chỉ email của bạn để khôi phục lại mật khẩu.</Text>
      <TextInputField
        label="Email"
        iconLeft="mail-outline"
        placeholder={"Email"}
      />
      <PrimaryButton
        style={styles.primaryButton}
      >
        Gửi xác nhận
      </PrimaryButton>
    </View>
  )
}

export default ForgotPassword