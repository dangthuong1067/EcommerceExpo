import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  containerImage: {
    alignItems: 'center',
    marginBottom: 5
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
  flex1: {
    flex: 1,

  },
  primaryButton: {
    borderRadius: 31,
    marginTop: 20
  },
  text: {
    fontSize: 18
  },
  containerScrollView: {
    flex: 1,
    paddingTop: 10
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  containerTextInputField: (errors) => ({
    marginBottom: errors ? 0 : 10
  }),
  containerError: {
    marginBottom: 5
  },
  alreadyHaveAnAcount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 40
  },
  textLogin: {
    color: "#00CC33",
    fontSize: 18,
    marginLeft: 5
  }
})

export default styles