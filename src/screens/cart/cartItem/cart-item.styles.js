import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginBottom:10
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  remove: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryButton:
  {
     padding: 7,
  },
  contentRight:{
    alignItems: 'flex-end'
  },
  xMark:{
    marginBottom:5
  },
  cost:{
    textDecorationLine: 'line-through',
    marginBottom:5 
  }
})

export default styles
