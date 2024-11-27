import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/login/login';
import ProfileScreen from './pages/profile/profile';
import MovieDetailsScreen from './pages/profile/DetailedScreen/MovieDetailedScreen';
import MovieListScreen from './pages/profile/MovieListScreen/MovieListScreen';
import { RootStackParamList } from './pages/types/type'; // Adjust path as per your file structure
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
          <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'Movies' }} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
};

export default App;
