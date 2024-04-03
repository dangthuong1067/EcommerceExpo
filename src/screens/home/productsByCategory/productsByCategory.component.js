import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './productsByCategory.styles';
import Item from '../../item/item.component';
import { getCategoriesThunk, getProductsByCategoryThunk, loadingProduct, updateCategories } from '../../../redux/home/home.slice';
import ItemCategory from './itemCategory/itemCategory.component';

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const { loading, categories, productsByCategories } = useSelector(state => state.home.productsByCategories);
  const flatListRef = useRef(null);

  const getInitData = () => {
    dispatch(getCategoriesThunk());
    dispatch(getProductsByCategoryThunk());
  }

  useEffect(() => {
    getInitData();
  }, [])

  const filterWithCategory = (idCategory) => {
    const findElement = categories.find(item => item.id === idCategory && item.isSelectCategory)
    if (findElement) {
      return;
    }
    dispatch(getProductsByCategoryThunk(idCategory));
    dispatch(loadingProduct(true));
    dispatch(updateCategories(idCategory));

    flatListRef.current.scrollToOffset({ offset: 0 });
  }

  return (
    <>
      <View style={styles.preferentialProducts}>
        <Text style={styles.text}>Sản phẩm theo danh mục</Text>
        <TouchableOpacity>
          <Text style={styles.textSeeAll}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item, index) => {
          const lastIndex = categories.length - 1
          return (
            <ItemCategory
              key={item.id}
              item={item}
              lastIndex={lastIndex}
              index={index}
              filterWithCategory={filterWithCategory}
            />
          )
        })}
      </ScrollView>

      <View style={styles.itemWithCategory}>
        {loading &&
          <View style={styles.viewLoading}>
            <ActivityIndicator size="small" color="#00ff00" />
          </View>
        }
        <FlatList
          ref={flatListRef}
          data={productsByCategories}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            const lastIndex = productsByCategories.length - 1
            return (
              <View style={styles.containerItem(lastIndex, index)}>
                <Item
                  item={item}
                />
              </View>
            )
          }
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  )
}

export default ProductsByCategory