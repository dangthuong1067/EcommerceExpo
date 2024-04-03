import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCheckBox: {
    fontSize: 18
  }
})

export default styles