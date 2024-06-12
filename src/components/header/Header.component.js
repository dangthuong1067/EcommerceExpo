import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
  },
  backButton: {
    position:'absolute',
    top:41,
    left:10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
