import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  textHome: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 10
  },
  searchAndDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  drawer: {
    marginLeft: 15
  },
  carousel: {
    paddingTop: 10,
    paddingHorizontal: 15
  },
  containerItem: (lastIndex, index) => ({
    marginRight: lastIndex === index ? 15 : 0
  }),
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  textSeeAll: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  preferentialProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15
  },
  itemCategory: (lastIndex, index, background) => ({
    width: 120,
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 10,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#d5d6db',
    marginRight: lastIndex === index ? 15 : 0,
    backgroundColor: background
  }),
  imageCategory: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  categoryName: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold'
  },
  productWithCategory: (lastIndex, index) => ({
    padding: 10, alignSelf: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d5d6db',
    marginLeft: 10,
    marginRight: lastIndex === index ? 10 : 0
  }),
  itemWithCategory: {
    marginTop: 10,
    marginBottom: 20
  }

})

export default styles