import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header.component';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import { formatCurrency } from '../../helpers/Utils';
import PrimaryButton from '../../components/primary-button/primary-button.component';
import styles from './product-detail.styles';
import CounterButton from '../../components/counterButton/counter-button.component';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addFavoriteList, removeFavoriteProduct } from '../../redux/favorite/favorite.slice';

const customerList = [
  {
    customerId: 1,
    customerName: 'Nguyễn Thi',
    rating: 5,
    comment: 'Sản phẩm tốt',
    reviewPhoto: [
      {
        imageUrl: "https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2022/04/1200x628_Banner-KM-2.png"
      },
      {
        imageUrl: "https://baotinmobile.vn/uploads/2023/03/sl-iphone-14-promax.jpg.webp"
      }
    ]
  },
  {
    customerId: 2,
    customerName: 'Nguyễn Nhung',
    rating: 4,
    comment: 'Hài lòng',
    reviewPhoto: [
      {
        imageUrl: "https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2022/04/1200x628_Banner-KM-2.png"
      },
      {
        imageUrl: "https://baotinmobile.vn/uploads/2023/03/sl-iphone-14-promax.jpg.webp"
      },
      {
        imageUrl: "https://baotinmobile.vn/uploads/2023/03/sl-iphone-14-promax.jpg.webp"
      }
    ]
  }
]

export const toastConfig = {
  success: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold'
      }}
      text2Style={{
        fontSize: 15
      }}
      text1={text1}
      text2={text2}
    />
  )
};
const ProductDetail = ({ route, navigation }) => {
  const { product, productName, capacities, imageSliders, productList, productId } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [isShowReview, setIsShowReview] = useState(false);
  const [isShowProductDetail, setIsShowProductDetail] = useState(false);

  const [capacityText, setCapacityText] = useState();
  const [colorText, setColorText] = useState();
  const [productPrice, setProductPrice] = useState();
  const flatListRef = useRef(null);
  const favorieList = useSelector(state => state.favorite.favoriteList)
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ offset: 0 });
      }
    }, [])
  );

  useEffect(() => {
    if (route.params?.capacityText) setCapacityText(route.params?.capacityText)

    if (route.params?.colorText) setColorText(route.params?.colorText)

    if (route.params?.productPrice) setProductPrice(route.params?.productPrice)

  }, [route.params?.capacityText, route.params?.colorText, route.params?.productPrice])


  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectFavorite = () => {
    dispatch(removeFavoriteProduct(productId))
  }

  const handleUncheckFavorite = () => {
    dispatch(addFavoriteList({
      productId,
      productPrice: route.params?.productPrice ? productPrice : product.reducedPrice,
      image: product.image
    }))
  }

  const renderItemReview = ({ item }) => {
    const nameParts = item.customerName.split(' ');
    const firstName = nameParts[nameParts.length - 1];
    const firstCharacter = firstName.charAt(0);
    return (
      isShowReview && <View style={styles.reviewItem}>
        <View style={styles.customerInfo}>
          <View style={styles.avatar}>
            <Text style={styles.textInAvatar}>{firstCharacter}</Text>
          </View>
          <Text>{item.customerName}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={15}
            startingValue={item.rating}
            readonly
            style={styles.rating}
          />
        </View>
        <Text>{item.comment}</Text>
        <View style={styles.reviewImages}>
          {item.reviewPhoto.map((photo, index) => (
            <View key={index} style={styles.reviewImageContainer}>
              <Image source={{ uri: photo.imageUrl }} style={styles.reviewImage} />
            </View>
          ))}
        </View>
      </View>
    )
  };

  const renderProductDetails = () => {
    const hasFavoriteProduct = favorieList.find(item => item.id === productId)
    return (
      <View>
        <Carousel
          data={imageSliders}
          autoScroll={false}
          dotStyle={styles.carouselDot}
          activeDotStyle={styles.carouselActiveDot}
        />

        <View style={styles.productInfo}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{productName}</Text>
            {hasFavoriteProduct ? <TouchableOpacity onPress={handleSelectFavorite}>
              <Icon name="heart-sharp" size={24} color="red" />
            </TouchableOpacity> :
              <TouchableOpacity onPress={handleUncheckFavorite}>
                <Icon name="heart-outline" size={24} color="red" />
              </TouchableOpacity>
            }
          </View>

          <View style={styles.quantityContainer}>
            <CounterButton
              style={styles.counterButton}
            />

            <View style={styles.priceContainer}>
              {!route.params?.productPrice && <Text style={styles.originalPrice}>{formatCurrency(product.price)}</Text>}
              {route.params?.productPrice ? <Text style={styles.discountedPrice}>{formatCurrency(productPrice)}</Text> : <Text style={styles.discountedPrice}>{formatCurrency(product.reducedPrice)}</Text>}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChoosePhoneAttributes', {
              product: product,
              productName: productName,
              capacities: capacities,
              productList: productList,
              productId: productId
            })}
            style={styles.productAttributesButton}>
            <View style={styles.productAttributesImageContainer}>
              <Image source={{ uri: product.image }} style={styles.productAttributesImage} />
            </View>
            <View style={styles.productAttributesTextContainer}>
              <Text>Màu sắc, Dung lượng</Text>
              {route.params?.colorText && route.params?.capacityText && <Text style={styles.productAttributesCapacityText}>{`${colorText}, ${capacityText}`}</Text>}
            </View>
            <Text style={styles.productAttributesSelectText}>Chọn</Text>
          </TouchableOpacity>

          <View style={styles.productDetailsSection}>
            <Text style={styles.textProductDetails}>Chi tiết sản phẩm</Text>
            <TouchableOpacity onPress={() => setIsShowProductDetail(!isShowProductDetail)}>
              {isShowProductDetail ? <Icon name="chevron-down" size={24} color="gray" /> : <Icon name="chevron-forward-outline" size={24} color="gray" />}
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.customerReviewsSection}>
              <Text style={styles.textProductDetails}>Đánh giá của khách hàng</Text>
              <Text>4.5/5</Text>
              <View style={styles.ratingMargin}>
                <Rating
                  type="custom"
                  ratingCount={5}
                  imageSize={20}
                  startingValue={1}
                  readonly
                  style={styles.rating}
                />
              </View>
              <TouchableOpacity onPress={() => setIsShowReview(!isShowReview)}>
                {isShowReview ? <Icon name="chevron-down" size={24} color="gray" /> : <Icon name="chevron-forward-outline" size={24} color="gray" />}
              </TouchableOpacity>
            </View>


          </View>
        </View>
      </View>
    )
  }



  const addToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Thành công',
      text2: 'Sản phẩm đã được thêm vào giỏ hàng',
    });
  }
  return (
    <>
      <Header
        title={'Chi tiết sản phẩm'}
      />
      <FlatList
        data={customerList}
        keyExtractor={(item) => item.customerId}
        renderItem={renderItemReview}
        ListHeaderComponent={renderProductDetails}
        style={styles.container}
        ref={flatListRef}
      />

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{`Đánh giá\n sản phẩm`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button, marginRight: 5 }}>
          <Text style={styles.buttonText}>{`Chat với \nchủ shop`}</Text>
        </TouchableOpacity>

        <PrimaryButton
          onPress={addToCart}
          style={styles.primaryButton}
        >
          Thêm vào giỏ hàng
        </PrimaryButton>
      </View>
    </>

  );
};

export default ProductDetail;
