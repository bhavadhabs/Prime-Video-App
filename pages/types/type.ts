import { StackNavigationProp } from '@react-navigation/stack';
import { ReactNode } from 'react';

export type MovieCategoryById = 'Horror' | 'ActionAdventure' | 'Comedy' | 'Drama' | 'Top' | 'Fantasy' | 'RecentlyAdded';

export interface Episode {
  title: string;
  duration: string;
}

export interface MovieItem {
  synopsis: ReactNode;
  rating: ReactNode;
  duration: ReactNode;
  id: string;
  poster: string;
  title: string;
  agerating: string;
  yearReleased: string;
  genres: string;
  seasons?: number[];
  seasonPosters?: { [season: number]: { poster: string; synopsis: string } };
  seasonData?: {
    [season: number]: {
      poster: string;
      synopsis: string;
      episodes?: { title: string; duration: string }[];
    };
  };
  TrailerScreen: { trailerUrl: string };
}

interface MovieModalProps {
  selectedMovie: MovieItem | null; // Allow null
  isModalVisible: boolean;
  closeModal: () => void;
  clickType: string;
}

export type RootStackParamList = {
  Profile: undefined;
  Splash: undefined;
  MoviePage: { profileId: string };
  MovieDetails: { movieId: string }; // movieId is a string
  FullPreviewScreen: { movie: MovieItem };
  MovieList: undefined;
  Login: undefined;
  Home: undefined;
  seasonData?: {
    [season: number]: {
      poster: string;
      synopsis: string;
      episodes?: { title: string; duration: string }[];
    };
  };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
