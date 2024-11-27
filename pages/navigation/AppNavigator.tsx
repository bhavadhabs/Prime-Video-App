import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../pages/profile/profile';
import MovieDetailsScreen from '../../pages/profile/DetailedScreen/MovieDetailedScreen';
import { RootStackParamList } from '../../pages/types/type'; // Adjust path as per your file structure

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
