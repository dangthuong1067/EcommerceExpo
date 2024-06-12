import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1
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

  color: (index, indexSelect) => ({
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 7,
    marginBottom: 7,
    justifyContent: 'space-between',

    borderWidth: 1,
    borderColor: index == indexSelect ? "#47ba64" : '#E0E0E0',
  }),
  colorImageContainer: {
    height: 100,
    borderRadius: 7,
    marginRight: 7,
    margin: 3
  },
  colorText: { flex: 1 },
  productImage: {
    width: 100,
    flex: 1
  },

  productSummaryContainer: {
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
    paddingBottom: 20
  },
  productSummaryContent: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20
  },
  productImageContainer: {
    height: 100,
    borderRadius: 7,
    marginRight: 7,
    margin: 3,
  },
  productImage: { width: 100, flex: 1 },
  productName: {
    fontWeight: 'bold'
  },
  selectedColor: { fontWeight: 'bold' },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'red'
  },

  attributeSelectionContainer: {
    padding: 15
  },
  attributeLabel: {
    marginBottom: 10
  },

  selectedAttribute: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  colorList: { flexDirection: 'row' },
  attributeLabel: { marginBottom: 10 },
  primaryButton: {
    marginBottom: 25,
    marginHorizontal: 20
  },


})

export default styles