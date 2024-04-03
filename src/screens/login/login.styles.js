import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  containerImage: {
    alignItems: 'center',
    marginBottom: 15
  },
  image: {
    width: 100,
    height: 100
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c5c5c7'
  },
  containerRadioButton: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10
  },
  saveAndForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  textRegister: {
    fontSize: 18,
    color: '#00CC33'
  },
  textAlreadyHaveAnAccount: {
    fontSize: 18,
    marginRight: 5
  },
  primaryButton: {
    borderRadius: 31,
    marginTop: 20,
    marginBottom: 20
  },
  textForgotPassword: {
    fontSize: 18,
    color: "#00CC33",
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerTextInputField: (errors) => ({
    marginBottom: errors ? 0 : 10
  }),
  containerError: {
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
})

export default styles