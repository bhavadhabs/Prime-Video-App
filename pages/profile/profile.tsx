import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, Modal, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../pages/types/type'; // Ensure this path matches your actual file structure

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type MovieItem = {
  id: string;
  title: string;
  poster: string;
};

type Profile = {
  id: string;
  name: string;
  avatar: string;
  movieId?: string;
  isAddProfile?: boolean;
};

const initialProfiles: Profile[] = [
  { id: '1', name: 'Stefan', avatar: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png', movieId: '1' },
  { id: '2', name: 'Damon', avatar: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png', movieId: '2' },
  { id: '3', name: 'Elena', avatar: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-3.png', movieId: '3' },
  { id: '4', name: 'Children', avatar: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png', movieId: '4' },
  { id: '5', name: 'New', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZBcy0RgpH-vbc74sQJGu7olXpJ5WVOfmo1DRBWVrmfbYfzb4', isAddProfile: true },
];

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [editMode, setEditMode] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  const handleManageProfiles = () => {
    setEditMode(true);
  };

  const handleProfileSelect = (profile: Profile) => {
    if (editMode) {
      setEditingProfile(profile);
    } else {
      if (profile.movieId) {
        navigation.navigate('MovieDetails', { movieId: profile.movieId });
      } else {
        console.log('Other profile actions');
      }
    }
  };

  const saveProfileChanges = () => {
    if (editingProfile) {
      const updatedProfiles = profiles.map((profile) =>
        profile.id === editingProfile.id ? editingProfile : profile
      );
      setProfiles(updatedProfiles);
      setEditingProfile(null);
      setEditMode(false);
    }
  };

  const renderItem = ({ item }: { item: Profile }) => {
    const isSpecialProfile = item.movieId === '4' || item.id === '5'; // Check for 'Children' and 'New' profiles

    return (
      <TouchableOpacity
        style={[
          styles.profileContainer,
          item.isAddProfile ? styles.addProfileContainer : null,
          isSpecialProfile ? styles.specialProfileContainer : null // Apply special styling
        ]}
        onPress={() => handleProfileSelect(item)}
      >
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.profileName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Who's Watching?</Text>
      </View>
      <FlatList
        data={profiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.profileList}
      />
      <View style={styles.footer}>
        {!editMode && (
          <TouchableOpacity style={styles.manageProfilesButton} onPress={handleManageProfiles}>
            <Text style={styles.manageProfilesText}>Edit profiles</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.learnMoreText}>Learn more</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Learn More */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>What are Prime Video Profiles?</Text>
            <ScrollView>
              <Text style={styles.modalText}>
              Prime Video Profiles allows you to access separate recommendations, season progress and Watchlist based on individual profile activity.
              </Text>
              <Text style={styles.modalText}>
                Prime Video Profiles allows you to create and manage multiple profiles within your account with content personalized separately to each profile. Each profile will have separate recommendations, season progress and Watchlist based on individual profile activity.
              </Text>
              <Text style={styles.modalText}>
                To control access to your profile, see Lock Your Prime Video Profile.
              </Text>
              <Text style={styles.modalText}>
              You can have up to six user profiles (the default primary profile plus up to five additional profiles, which can be either adult or Kid's profiles) within Prime Video on a single Amazon account.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Modal for Editing Profile */}
      {editingProfile && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!editingProfile}
          onRequestClose={() => setEditingProfile(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TextInput
                style={styles.input}
                value={editingProfile.name}
                onChangeText={(text) => setEditingProfile({ ...editingProfile, name: text })}
                placeholder="Enter new profile name"
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.input}
                value={editingProfile.avatar}
                onChangeText={(text) => setEditingProfile({ ...editingProfile, avatar: text })}
                placeholder="Enter new profile avatar URL"
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.saveButton} onPress={saveProfileChanges}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');
const profileWidth = (width - 120) / 3; // Adjusted to fit the screen width with spacing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 17,
  },
  titleContainer: {
    marginVertical: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    top: 29,
  },
  profileList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  profileContainer: {
    width: profileWidth,
    alignItems: 'center',
    top: -93,
    left: 18,
    margin: 10, // Added margin for spacing between profiles
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  addProfileContainer: {
    backgroundColor: 'black',
  },
  specialProfileContainer: {
    margin: 12,
    alignSelf: 'flex-start', // Align to the left
    left: 62,
    top: -110,
  },
  avatar: {
    width: profileWidth,
    height: profileWidth,
    borderRadius: profileWidth / 2, // Adjusted to maintain circular avatar
    borderWidth: 2,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  manageProfilesButton: {
    backgroundColor: '#222', // Updated color to match the image
    padding: 8,
    borderRadius: 5,
    top: -20,
    width: '97%',
    alignItems: 'center',
    marginVertical: 5,
  },
  manageProfilesText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  learnMoreText: {
    color: '#1399FF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    maxHeight: '100%',
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    top: 40,
    color: '#fff',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 30,
    top: 18,
    color: '#fff',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
