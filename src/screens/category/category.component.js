import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import styles from './category.styles'
import { useDispatch, useSelector } from 'react-redux';
import ItemCategories from './itemCategory/itemCategory.component';
import Search from '../../components/search/search.component';
import { getCategoriesListThunk } from '../../redux/categories/categories.slice';

const Category = () => {
  const dispatch = useDispatch()
  const { categoriesList } = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getCategoriesListThunk())
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục sản phẩm</Text>
      <View style={styles.search}>
        <Search />
      </View>

      {categoriesList.length === 0 ?
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green" />
        </View>
        :
        <FlatList
          data={categoriesList}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}

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
      }
    </View>
  )
}

export default Category