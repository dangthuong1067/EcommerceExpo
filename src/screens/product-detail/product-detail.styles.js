import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  productInfo: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  textProductDetails: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    flex: 1,
  },
 
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
 
  rating: {
    alignSelf: 'flex-start',
  },
  bottomButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'black'
  },
  button: {
    padding: 5,
    borderWidth: 1,
    gap: 10,
    marginLeft: 10
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
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

  reviewItem: {
    marginBottom: 20,
    paddingHorizontal:20
  },

  customerInfo: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: '#00CC33',
    marginRight: 5,
    justifyContent:'center',
    alignItems:'center'
  },

  ratingContainer: {
    marginVertical: 5
  },

  reviewImages: {
    flexDirection: 'row',
    marginTop:5
  },

  reviewImageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 7,
    marginRight: 7
  },

  reviewImage: {
    width: 100,
    flex: 1
  },

  productCapacityContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: '#A0A0A0',
    borderRadius: 5,
    borderWidth: 0.5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20
  },

  productCapacityImage: {
    height: 50,
    borderRadius: 2,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },

  productCapacityTextContainer: {
    flex: 1
  },
  
  productCapacitySelectedText: {
    color: '#00CC33'
  },
  customerReviewsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: 'gray'
  },
  ratingMargin: {
    marginHorizontal: 10,
  },
  primaryButton:
  {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    marginRight: 5,
    padding: 7
  },
  productNameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },

  carouselDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 5,
    top: -30
  },
  carouselActiveDot: {
    backgroundColor: '#f5760e'
  },

  productAttributesButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: '#A0A0A0',
    borderRadius: 5,
    borderWidth: 0.5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20
  },
  productAttributesImageContainer: {
    height: 50,
    borderRadius: 2,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productAttributesImage: {
    width: 50,
    flex: 1
  },
  productAttributesTextContainer: {
    flex: 1
  },
  productAttributesCapacityText: {
    color: 'black',
    fontWeight: 'bold'
  },
  productAttributesSelectText: {
    color: '#00CC33'
  },
  productDetailsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
  },
  counterButton:{
    marginRight:30
  },
  textInAvatar:{
    fontWeight:'bold',
    color:'white'
  }

});

export default styles