import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 31,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  linearContainer: {
    paddingVertical: 13,
    //flex: 1,
    borderRadius: 31,
    shadowColor: '#212529',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 31,
  }
});

export default styles;