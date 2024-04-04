import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 10,
    paddingTop:25
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  itemCategory: {
    flex: 1,
   //backgroundColor:'red'
  }
})

export default styles
