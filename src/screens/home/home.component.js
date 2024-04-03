import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import styles from './home.styles';
import Icon from 'react-native-vector-icons/Ionicons'
import Item from '../item/item.component';
import Search from '../../components/search/search.component';
import ProductsByCategory from './productsByCategory/productsByCategory.component';
import { getStaticDataThunk } from '../../redux/staticData/staticData.slice';
import { getCategoriesThunk } from '../../redux/home/home.slice';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const { banners, saleProducts, popularProducts, categoriesList } = useSelector(state => state.staticData);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getStaticDataThunk());
    await dispatch(getCategoriesThunk());
    setRefreshing(false);
  };

  return (
    <>
      <Text style={styles.textHome}>Trang chủ</Text>
      {/* Search and Drawer */}
      <View style={styles.searchAndDrawer}>
        <Search />

        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}>
          <Icon
            name={'menu-outline'}
            size={35}
            color='#081a2b'
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.carousel}>
          <Carousel data={banners} />
        </View>

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Sản phẩm ưu đãi</Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={saleProducts.slice(0, 5)}
            renderItem={({ item, index }) => {
              const lastIndex = saleProducts.slice(0, 5).length - 1
              return (
                <View style={styles.containerItem(lastIndex, index)}>
                  <Item
                    item={item}
                  />
                </View>
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Sản phẩm phổ biến</Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View >
          <FlatList
            data={popularProducts.slice(0, 5)}
            renderItem={({ item, index }) => {
              const lastIndex = popularProducts.slice(0, 5).length - 1
              return (
                <View style={styles.containerItem(lastIndex, index)}>
                  <Item
                    item={item}
                  />
                </View>
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Danh mục sản phẩm </Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categoriesList.filter(item => item.id !== -1).map((item, index) => {
            const lastIndex = categoriesList.filter(item => item.id !== -1).length - 1
            return (
              <TouchableOpacity
                style={[styles.itemCategory(lastIndex, index)]}
                key={item.id}
              >
                <Image
                  source={{ uri: item.image }} style={styles.imageCategory}
                />
                <Text style={styles.categoryName}>{item.categoryName}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        <ProductsByCategory />
      </ScrollView >
    </>
  )
}

export default Home;