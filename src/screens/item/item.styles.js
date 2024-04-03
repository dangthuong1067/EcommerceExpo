import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginLeft: 15,
    // width: 250
  },
  discount: {
    width: 50,
    height: 60,
    backgroundColor: '#21804b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    right: 10
  },
  textDiscount: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 10
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  price: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'line-through'
  },
  priceWithOutreducedPrice: {
    fontSize: 18,
    color: 'black',
  },
  reducedPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ce4547',
  },
  containerCapacity: {
    flexDirection: 'row',
    marginVertical: 3
  },
  capacity: (index, indexSelect) => ({
    borderWidth: 1,
    borderColor: index == indexSelect ? "#47ba64" : '#495057',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 5,
    marginRight: 10
  }),
  capacityText: (index, indexSelect) => ({
    fontSize: 16,
    color: index == indexSelect ? "#47ba64" : null
  }),
  priceAndAddCart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

  },
  addCart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#489969',
    marginLeft: 10
  },
  textAdd: {
    color: 'white',
    fontSize: 25,
  },
  percent: {
    fontSize: 17
  }
  // color: "#47ba64"
})

export default styles