import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dotButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15
  },
  item: (screenWidth) => (
    {
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ececec',
    }
  ),
  image: (screenWidth) => (
    {
      width: screenWidth,
      // width: '100%',
      height: 170,
      resizeMode: 'cover'
    }),
  itemDotButton: (index, activeIndex) => ({
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: index === activeIndex ? '#f5760e' : 'gray',
    marginHorizontal: 5,
  }),
  carouselImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
})

export default styles