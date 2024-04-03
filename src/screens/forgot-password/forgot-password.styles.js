import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  containerImage: {
    alignItems: 'center',
    marginBottom: 25
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
  textEmail: {
    fontSize: 18,
    textAlign: 'center',
  },
  primaryButton: {
    borderRadius: 31,
    marginTop: 20,
    marginBottom: 20
  }
})

export default styles