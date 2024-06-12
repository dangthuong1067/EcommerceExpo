import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import { formatCurrency } from '../../helpers/Utils';
import PrimaryButton from '../../components/primary-button/primary-button.component';
import styles from './product-detail.styles';

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

const ProductDetail = ({ route, navigation }) => {
  const { product, productName, capacities, imageSliders } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderItemReview = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.customerInfo}>
        <View style={styles.avatar} />
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
        {item.reviewPhoto.map((photo) => (
          <View style={styles.reviewImageContainer}>
            <Image source={{ uri: photo.imageUrl }} style={styles.reviewImage} />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <>
      <Header
        title={'Chi tiết sản phẩm'}
      />
      <ScrollView style={styles.container}>
        <View >
          <Carousel
            data={imageSliders}
            autoScroll={false}
            dotStyle={styles.carouselDot}
            activeDotStyle={styles.carouselActiveDot}
          />
        </View>

        <View style={styles.productInfo}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{productName}</Text>
            <TouchableOpacity >
              <Icon name="heart-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.quantityContainer}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={handleIncreaseQuantity}
                style={styles.addCart}>
                <Text style={styles.textAdd}>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={handleDecreaseQuantity}
                style={styles.addCart}>
                <Text style={styles.textAdd}>-</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{formatCurrency(product.price)}</Text>
              <Text style={styles.discountedPrice}>{formatCurrency(product.reducedPrice)}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChoosePhoneAttributes', {
              product: product,
              productName: productName,
              capacities: capacities
            })}
            style={styles.productAttributesButton}>
            <View style={styles.productAttributesImageContainer}>
              <Image source={{ uri: product.image }} style={styles.productAttributesImage} />
            </View>
            <View style={styles.productAttributesTextContainer}>
              <Text>Màu sắc, Dung lượng</Text>
              <Text style={styles.productAttributesCapacityText}>{`${product.colors[0]}, ${product.capacity}`}</Text>
            </View>
            <Text style={styles.productAttributesSelectText}>Chọn</Text>
          </TouchableOpacity>

          <View style={styles.productDetailsSection}>
            <Text style={styles.textProductDetails}>Chi tiết sản phẩm</Text>
            <TouchableOpacity>
              <Icon name="chevron-down" size={24} color="gray" />
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
              <TouchableOpacity>
                <Icon name="chevron-down" size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={customerList}
              keyExtractor={(item) => item.customerId}
              renderItem={renderItemReview}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{`Đánh giá\n sản phẩm`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button, marginRight: 5 }}>
          <Text style={styles.buttonText}>{`Chat với \nchủ shop`}</Text>
        </TouchableOpacity>

        <PrimaryButton
          onPress={() => console.log('vào')}
          style={styles.primaryButton}
        >
          Thêm vào giỏ hàng
        </PrimaryButton>
      </View>
    </>

  );
};

export default ProductDetail;
