import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwiperComponent from '../swiper';


const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <SwiperComponent images={images} />
      {/* Add other content below the swiper */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
