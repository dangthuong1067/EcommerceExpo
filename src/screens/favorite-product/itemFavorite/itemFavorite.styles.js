import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerFavoriteProduct:{
    flexDirection: 'row', 
    borderWidth: 1, 
    borderColor: '#d5d6db',
     paddingBottom: 15
  },
  containerImage:{
    width: 150,
     marginLeft: 20
  },
  containerHeart:{
    justifyContent: 'flex-start',
     marginRight: 20,
      marginTop: 10
  },
  heart:{
    alignItems: 'center', 
    marginBottom: 40 
  },
 
  image: {
    height: 130,
    resizeMode: 'contain',
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 5
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  price: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'line-through'
  },
 
  priceAndAddCart: {
    flexDirection: 'row',
  },
  addCart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#489969',
  },
  textAdd: {
    color: 'white',
    fontSize: 25,
  },
})

export default styles