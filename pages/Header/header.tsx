import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking, GestureResponderEvent } from 'react-native';

const Header = () => {
  const handleSubscriptionPress = (event: GestureResponderEvent) => {
    Linking.openURL('https://www.primevideo.com/addons/ref=atv_hm_hom_c_9zZ8D2_hom');
  };

  return (
    <View style={styles.header}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.headerScrollView}
      >
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://img1.pnghut.com/2/0/1/b1j7dAWG0K/streaming-media-black-and-white-casting-area-logo.jpg' }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://your-profile-icon-url-here' }} // Replace with actual profile icon URL
            style={styles.logo}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default Header;
