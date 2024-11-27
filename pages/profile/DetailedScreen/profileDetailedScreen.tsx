import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ProfileDetailsProps {
  route: { params: { name: string, avatar: string } };
}

const ProfileDetailsScreen: React.FC<ProfileDetailsProps> = ({ route }) => {
  const { name, avatar } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.profileName}>{name}</Text>
      {/* Add more profile details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414', // Dark background color to match Prime Video's theme
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular avatar
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProfileDetailsScreen;
