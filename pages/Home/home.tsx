import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
  // Mock data for movies
  const movies = [
    { id: '1', title: 'Movie 1', poster: 'https://example.com/movie1.jpg' },
    { id: '2', title: 'Movie 2', poster: 'https://example.com/movie2.jpg' },
    { id: '3', title: 'Movie 3', poster: 'https://example.com/movie3.jpg' },
    // Add more movies as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Releases</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
          {movies.map(movie => (
            <TouchableOpacity key={movie.id} style={styles.movieItem}>
              <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Add more sections for Top TV Shows, Recommended, etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  movieList: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  movieItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  movieTitle: {
    color: '#ddd',
    marginTop: 5,
  },
});

export default HomeScreen;
