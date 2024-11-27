import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const swiperHeight = 250; // Adjust as needed

interface SwiperComponentProps {
  images: string[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} autoplayTimeout={5}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: swiperHeight,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: swiperHeight,
  },
});

export default SwiperComponent;
