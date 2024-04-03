import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productWithCategory: (lastIndex, index) => ({
    padding: 10, alignSelf: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d5d6db',
    marginLeft: 10,
    marginRight: lastIndex === index ? 10 : 0
  }),

  categoryText: (isSelectCategory) => ({
    color: isSelectCategory ? 'white' : 'black',
    fontWeight: 500
  })


})

export default styles