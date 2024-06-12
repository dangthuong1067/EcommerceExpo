import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './carousel.styles';

const Carousel = ({ data, autoScroll = true, dotStyle, activeDotStyle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    let intervalId;

    if (autoScroll) {
      intervalId = setInterval(() => {
        const nextIndex = (activeIndex + 1) % data.length;
        setActiveIndex(nextIndex);
        scrollToIndex(nextIndex);
      }, 3000); 
    }

    return () => clearInterval(intervalId);
  }, [activeIndex, data.length, autoScroll]);

  const scrollToIndex = (index) => {
    scrollViewRef.current?.scrollTo({ x: screenWidth * index, animated: true });
  };

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(newIndex);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} 
      >
        {data.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item.imageUrl }}
            style={styles.carouselImage}
            resizeMode='contain'
          />
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => scrollToIndex(index)}
            style={[
              dotStyle, 
              index === activeIndex && activeDotStyle, 
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
