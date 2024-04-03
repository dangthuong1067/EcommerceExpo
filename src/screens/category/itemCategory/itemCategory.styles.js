import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemCategory: (index, lastIndex, backgroundColor) => ({
    backgroundColor: backgroundColor, alignItems: 'center', borderRadius: 15,
    marginRight: index % 2 === 0 && index !== lastIndex ? 5 : 0,
    marginLeft: index % 2 !== 0 ? 5 : 0,
    width: index === lastIndex && width / 2 - 15,
    paddingVertical: 20
  }),
  image: {
    width: 50,
    height: 50,
    marginBottom: 40
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  }
})

export default styles
