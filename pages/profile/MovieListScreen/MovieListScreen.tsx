import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../pages/types/type'; // Adjust the path as per your project structure

type MovieListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MovieList'>;
type MovieListScreenRouteProp = RouteProp<RootStackParamList, 'MovieList'>;

type MovieListScreenProps = {
  navigation: MovieListScreenNavigationProp;
  route: MovieListScreenRouteProp;
};

type Movie = {
  id: string;
  title: string;
  poster: string;
};

const movies: Movie[] = [
  { id: '1', title: 'The Conjuring', poster: 'https://wallpapers.com/images/hd/the-conjuring-poster-y2bs1yiiscn9qdio.jpg' },
  { id: '2', title: 'The Vampire Diaries', poster: 'https://imageresizer.static9.net.au/d-6aq9EjgZ_MKidtxLVYfp9Wesc=/1280x0/filters:format(webp)/vms-tv-images-prod.s3-ap-southeast-2.amazonaws.com%2F2022%2F12%2F471159%2Fthevampirediaries_s3_9now_nextgenstandardcard.jpg' },
  { id: '3', title: 'The Originals', poster: 'https://w0.peakpx.com/wallpaper/295/820/HD-wallpaper-the-originals-tv-series-2013-poster-the-originals-man-woman-fantasy-all-girl-actress-dark-tv-series-vampire-wolf-actor-dog.jpg' },
  { id: '4', title: 'Tom and Jerry', poster: 'https://w0.peakpx.com/wallpaper/142/858/HD-wallpaper-movie-tom-and-jerry-the-movie-droopy-dog-jerry-tom-and-jerry-tom-tom-and-jerry.jpg' },
];

const MovieListScreen: React.FC<MovieListScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}>
      <Image source={{ uri: item.poster }} style={styles.poster} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MovieListScreen;
