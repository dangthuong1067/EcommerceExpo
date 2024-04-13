import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './category.styles'
import { useSelector } from 'react-redux';
import ItemCategories from './itemCategory/itemCategory.component';
import Search from '../../components/search/search.component';

const Category = () => {
  const { categoriesList } = useSelector(state => state.staticData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục sản phẩm</Text>
      <View style={styles.search}>
        <Search />
      </View>

      <FlatList
        data={categoriesList}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={{ marginHorizontal: 10, gap: 10 }}

        renderItem={({ item, index }) => {
          const lastIndex = categoriesList.length - 1
          return (
              <ItemCategories
                categoryName={item.categoryName}
                image={item.image}
                index={index}
                lastIndex={lastIndex}
                backgroundColor={item.background}
              />
          )
        }}
      />
    </View>
  )
}

export default Category