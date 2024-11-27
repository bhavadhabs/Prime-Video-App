import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, Linking, GestureResponderEvent, Modal, TextStyle, ImageStyle, ViewStyle } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Episode, NavigationProps } from '../../types/type';
import { RootStackParamList } from '../../../pages/types/type';
import { useActionSheet } from '@expo/react-native-action-sheet';
import DropDownPicker from 'react-native-dropdown-picker';
import VideoPlayer from 'react-native-video-player';


type MovieDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

type MovieDetailsScreenProps = {
  route: MovieDetailsScreenRouteProp;
};

type MovieItem = {
  Agerating: ReactNode;
  id: string;
  poster: string;
  modalPoster: string;
  seasonData?: {
    [season: number]: {
      poster: string;
      synopsis: string;
      episodes?: { poster: string; title: string; Synopsis: string; year: string; duration: string }[];
    };
  };
  title: string;
  synopsis: string;
  rating: string;
  agerating: string;
  duration: string;
  yearReleased: string;
  trailerUrl?: string;
  genres: string;
  seasons?: number[];
};

type ModalStyles = {
  modalTitle?: React.CSSProperties;
};

const Header = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleSubscriptionPress = (event: GestureResponderEvent) => {
    Linking.openURL('https://www.primevideo.com/addons/ref=atv_hm_hom_c_9zZ8D2_hom');
  };

  const handleHomePress = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <View style={styles.header}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.headerScrollView}
      >
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Prime Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Live TV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My Stuff   |</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSubscriptionPress}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white._CB554929912_.png' }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Subscriptions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const ModalHeader = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleSubscriptionPress = (event: GestureResponderEvent) => {
    Linking.openURL('https://www.primevideo.com/addons/ref=atv_hm_hom_c_9zZ8D2_hom');
  };

  const handleHomePress = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <View style={styles.modalHeader}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.headerScrollView}
      >
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Prime Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Live TV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My Stuff   |</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSubscriptionPress}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white._CB554929912_.png' }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Subscriptions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const movies: MovieItem[] = [
  {
    id: '1',
    poster: 'https://m.media-amazon.com/images/S/pv-target-images/07a7af2f0cc37792b2eb0ee196b53dd10a39ed816fc6f61633116e65ad603745.jpg',
    title: 'The Conjuring',
    duration: '',
    rating: '',
    synopsis: '',
    yearReleased: '',
    genres: '',
    agerating: '',
    Agerating: undefined,
    modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b168673a64d6d31b5894059d397b40051060d6ee1a7d300b83a32be5f5cca3e2._SX1080_FMjpg_.jpg',
    trailerUrl: undefined
  },
  {
    id: '2', poster: 'https://imageresizer.static9.net.au/hhV1f5069lZeQaXE2H3HsoZKCmA=/1920x0/vms-tv-images-prod.s3-ap-southeast-2.amazonaws.com%2F2022%2F12%2F471159%2Fthevampirediaries_s3_9now_nextgenstandardcard.jpg',
    title: 'The Vampire Diaries',
    duration: '',
    rating: '',
    synopsis: '',
    yearReleased: '',
    genres: '',
    agerating: '',
    Agerating: undefined,
    modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d3069884300e32026f3cdd392776af9ff2bbeb8ee4a2cb638750e4138e9257e6._SX1080_FMjpg_.jpg',
    trailerUrl: undefined
  },
  {
    id: '3', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53f5bb092515614f1f1ce3580a4b3bfd5b87d4aa166f2106aa32373ff4831705.jpg',
    title: 'The Originals',
    duration: '',
    rating: '',
    synopsis: '',
    yearReleased: '',
    genres: '',
    agerating: '',
    Agerating: undefined,
    modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a0c53a51c6a97d7e6481f967b781edfcc87857cfb8c48b7c8a67bbd5f453be35._SX1080_FMjpg_.jpg',
    trailerUrl: undefined
  },
  {
    id: '4', poster: 'https://w0.peakpx.com/wallpaper/142/858/HD-wallpaper-movie-tom-and-jerry-the-movie-droopy-dog-jerry-tom-and-jerry-tom-tom-and-jerry.jpg',
    title: 'Tom and jerry',
    duration: '',
    rating: '',
    synopsis: '',
    yearReleased: '',
    genres: '',
    agerating: '',
    Agerating: undefined,
    modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d829c4415a21e83bf5c82314ed7426e1697f1ea156a35c3363f17a1eabe44a3e._SX1080_FMjpg_.jpg',
    trailerUrl: undefined
  },
];

const HorrorMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '5', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0d03cafdb3efc2ad7e5bd147a0e93f310063c427cd773c593206c69c66e8148a.jpg',
      title: 'Annabelle (2014)',
      synopsis: 'Before The Conjuring, there was Annabelle. Capable of unspeakable evil, the actual Annabelle doll exists locked up in an occult museum visited only by a priest who blesses her twice a month. In this supernatural thriller from producer James Wan, Annabelles story begins before the evil was unleashed.John Form (Ward Horton -- The Wolf of Wall Street) has found the perfect gift...',
      rating: 'IMDb 5.4',
      duration: '1 h 30 min',
      yearReleased: '2014',
      genres: 'Tense • Exciting • Suspense • Horror',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8ac6b0c91885c07e8fdf75e52ec3d89f9e68dfb74be42a023beb7b3716e9fa89._SX1920_FMwebp_.jpg',
    },
    {
      id: '6', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7f021b286a03d907a572bc9bf050e04528993e827f0064ca7b3102eec19000d7.jpg',
      title: 'Insidious (2009)',
      synopsis: 'Josh and Renai move to a new house, seeking a fresh start. However, when their son, Dalton, mysteriously falls into a coma, paranormal events start occurring in the house...',
      rating: 'IMDb 6.8',
      duration: '1 h 43 min',
      yearReleased: '2010',
      genres: 'Horror • Suspense • Serious • Tense',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fa49b19d0afd74cd18ba54e3a019665d844d922c98df2655293b1777f1a90bc0._SX1920_FMwebp_.jpg',
      trailerUrl: '',
    },
    {
      id: '7', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7d0b1125737c38b98f3df90f4fc1e0f579b88a0cb62570aa2f4b1f49d6a89190.jpg',
      title: 'The Conjuring 2',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Renowned demonologists Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits...',
      yearReleased: '2016',
      genres: 'Horror • Suspense • Thoughtful • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fb0b1b2128eed24ee4468c643ebe6251db1d855bfe11cdd2ad7f5fcea9afc1f4._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '8', poster: 'https://wallpapers.com/images/hd/annabelle-background-25gb6mvn3ch99voj.jpg',
      title: 'Annabelle: Creation',
      duration: '1 h 45 min',
      rating: 'IMDb 6.5',
      synopsis: 'A nun and six orphaned girls become the target of a former toy makers possessed doll.',
      yearReleased: '2017',
      genres: 'Suspense • Horror • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d31cadb408b0c2e709c9ad787998eeca3d630e745b4a3a5d2f72962e59463f6d._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '9', poster: 'https://fictionhorizon.com/wp-content/uploads/2023/07/insidious-the-red-door-review.jpg',
      title: 'Insidious Red Door',
      duration: '1 h 47 min',
      rating: 'IMDb 5.5',
      synopsis: 'The horror franchises original cast returns for the final chapter of the terrifying saga.',
      yearReleased: '2023',
      genres: 'Suspense • Horror • Thriller • Dark ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/46d780804ee3997372e11a3b1a778d2e8ccaaf85eee66601db8ba9ecc9562ceb._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '10', poster: 'https://i.ytimg.com/vi/uAYC96NvSXc/maxresdefault.jpg',
      title: 'The Conjuring: The Devil Made Me Do It',
      duration: '1 h 51 min',
      rating: 'IMDb 6.3',
      synopsis: 'One of the most sensational cases from Ed and Lorraine Warrens files, it starts with a fight for the soul of a young boy, then takes them beyond anything they’d ever seen before.',
      yearReleased: '2021',
      genres: 'Horror • Suspense • Eerie • Scary',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d648062456b29122c203863881468bc31a85e85d4bcef40e16e689cd02c6308b.jpg',
      trailerUrl: undefined
    },
    {
      id: '11', poster: 'https://1.bp.blogspot.com/-kbP72r9Ik8s/Xk81jIImRfI/AAAAAAAAUN0/DhndRTrERl8dT7qaNznvletnPFndNBaowCLcBGAsYHQ/s1600/Bhoot-wallpaper.jpg',
      title: 'Bhoot - The Haunted Ship',
      duration: '1 h 54 min',
      rating: 'IMDb 5.4',
      synopsis: 'In June 2012, A huge, dead, unmanned ship-“Sea Bird”, on its way to a shipyard, broke its ties and ran ashore Juhu beach. Prithvi, a shipping officer recovering from psychotic depression due to the loss of his family, is in charge of getting Sea Bird back a float.',
      yearReleased: '2020',
      genres: 'Horror •International • Cerebral • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/f6fbaa9290ce7e8a607fa657d1b3d49a46c92d2fe8eb97bc01dbdac6ed65acdc._SX1920_FMwebp_.png',
      trailerUrl: undefined
    },
    {
      id: '12', poster: 'https://ntvb.tmsimg.com/assets/p159765_v_h10_ab.jpg?w=1280&h=720',
      title: 'Final Destination 3',
      duration: '1 h 28 min',
      rating: 'IMDb 5.8',
      synopsis: 'High school student Wendy Christensen fails to stop the ill-fated rollercoaster ride that she predicted would cause the deaths of several of her friends.',
      yearReleased: '2006',
      genres: 'Suspense • Horror • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/dcea07e7888bcf3b2a8ab66a7e971628a762a4e86460bfd0ff99eeb039d5d215._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '13', poster: 'https://ntvb.tmsimg.com/assets/p13610713_v_h10_aa.jpg?w=960&h=540',
      title: 'It (2017)',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the towns children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c93977098496f52746e3bb18429ec32b370d348aff89b2413a76c2f1cb2f5002._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '14', poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4505eb561bdf8dd1130260b1f7c64e585ede698e90c491f3711e8b92ea8d5cdb._UR1920,1080_SX480_FMwebp_.jpg',
      title: 'The Nun',
      duration: '1 h 36 min',
      rating: 'IMDb 5.3',
      synopsis: 'In this fifth installment of The Conjuring universe, a priest and a novice are sent to investigate a death in an old abbey in Romania...',
      yearReleased: '2018',
      genres: 'Horror • Bleak • Eerie • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/4d236dc9676fc99417adb19d58e0302c64ca5f316fafea607e5dd17043013d58._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '5', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0d03cafdb3efc2ad7e5bd147a0e93f310063c427cd773c593206c69c66e8148a.jpg',
      title: 'Annabelle (2014)',
      synopsis: 'Before The Conjuring, there was Annabelle. Capable of unspeakable evil, the actual Annabelle doll exists locked up in an occult museum visited only by a priest who blesses her twice a month. In this supernatural thriller from producer James Wan, Annabelles story begins before the evil was unleashed.John Form (Ward Horton -- The Wolf of Wall Street) has found the perfect gift...',
      rating: 'IMDb 5.4',
      duration: '1 h 30 min',
      yearReleased: '2014',
      genres: 'Tense • Exciting • Suspense • Horror',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8ac6b0c91885c07e8fdf75e52ec3d89f9e68dfb74be42a023beb7b3716e9fa89._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '6', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7f021b286a03d907a572bc9bf050e04528993e827f0064ca7b3102eec19000d7.jpg',
      title: 'Insidious (2009)',
      synopsis: 'Josh and Renai move to a new house, seeking a fresh start. However, when their son, Dalton, mysteriously falls into a coma, paranormal events start occurring in the house...',
      rating: 'IMDb 6.8',
      duration: '1 h 43 min',
      yearReleased: '2010',
      genres: 'Horror • Suspense • Serious • Tense',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fa49b19d0afd74cd18ba54e3a019665d844d922c98df2655293b1777f1a90bc0._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '7', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7d0b1125737c38b98f3df90f4fc1e0f579b88a0cb62570aa2f4b1f49d6a89190.jpg',
      title: 'The Conjuring 2',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Renowned demonologists Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits...',
      yearReleased: '2016',
      genres: 'Horror • Suspense • Thoughtful • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fb0b1b2128eed24ee4468c643ebe6251db1d855bfe11cdd2ad7f5fcea9afc1f4._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '8', poster: 'https://wallpapers.com/images/hd/annabelle-background-25gb6mvn3ch99voj.jpg',
      title: 'Annabelle: Creation',
      duration: '1 h 45 min',
      rating: 'IMDb 6.5',
      synopsis: 'A nun and six orphaned girls become the target of a former toy makers possessed doll.',
      yearReleased: '2017',
      genres: 'Suspense • Horror • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d31cadb408b0c2e709c9ad787998eeca3d630e745b4a3a5d2f72962e59463f6d._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '9', poster: 'https://fictionhorizon.com/wp-content/uploads/2023/07/insidious-the-red-door-review.jpg',
      title: 'Insidious Red Door',
      duration: '1 h 47 min',
      rating: 'IMDb 5.5',
      synopsis: 'The horror franchises original cast returns for the final chapter of the terrifying saga.',
      yearReleased: '2023',
      genres: 'Suspense • Horror • Thriller • Dark ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/46d780804ee3997372e11a3b1a778d2e8ccaaf85eee66601db8ba9ecc9562ceb._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '10', poster: 'https://i.ytimg.com/vi/uAYC96NvSXc/maxresdefault.jpg',
      title: 'The Conjuring: The Devil Made Me Do It',
      duration: '1 h 51 min',
      rating: 'IMDb 6.3',
      synopsis: 'One of the most sensational cases from Ed and Lorraine Warrens files, it starts with a fight for the soul of a young boy, then takes them beyond anything they’d ever seen before.',
      yearReleased: '2021',
      genres: 'Horror • Suspense • Eerie • Scary',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d648062456b29122c203863881468bc31a85e85d4bcef40e16e689cd02c6308b.jpg',
      trailerUrl: undefined
    },
    {
      id: '11', poster: 'https://1.bp.blogspot.com/-kbP72r9Ik8s/Xk81jIImRfI/AAAAAAAAUN0/DhndRTrERl8dT7qaNznvletnPFndNBaowCLcBGAsYHQ/s1600/Bhoot-wallpaper.jpg',
      title: 'Bhoot - The Haunted Ship',
      duration: '1 h 54 min',
      rating: 'IMDb 5.4',
      synopsis: 'In June 2012, A huge, dead, unmanned ship-“Sea Bird”, on its way to a shipyard, broke its ties and ran ashore Juhu beach. Prithvi, a shipping officer recovering from psychotic depression due to the loss of his family, is in charge of getting Sea Bird back a float.',
      yearReleased: '2020',
      genres: 'Horror •International • Cerebral • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/f6fbaa9290ce7e8a607fa657d1b3d49a46c92d2fe8eb97bc01dbdac6ed65acdc._SX1920_FMwebp_.png',
      trailerUrl: undefined
    },
    {
      id: '12', poster: 'https://ntvb.tmsimg.com/assets/p159765_v_h10_ab.jpg?w=1280&h=720',
      title: 'Final Destination 3',
      duration: '1 h 28 min',
      rating: 'IMDb 5.8',
      synopsis: 'High school student Wendy Christensen fails to stop the ill-fated rollercoaster ride that she predicted would cause the deaths of several of her friends.',
      yearReleased: '2006',
      genres: 'Suspense • Horror • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/dcea07e7888bcf3b2a8ab66a7e971628a762a4e86460bfd0ff99eeb039d5d215._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '13', poster: 'https://ntvb.tmsimg.com/assets/p13610713_v_h10_aa.jpg?w=960&h=540',
      title: 'It (2017)',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the towns children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c93977098496f52746e3bb18429ec32b370d348aff89b2413a76c2f1cb2f5002._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '14', poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4505eb561bdf8dd1130260b1f7c64e585ede698e90c491f3711e8b92ea8d5cdb._UR1920,1080_SX480_FMwebp_.jpg',
      title: 'The Nun',
      duration: '1 h 36 min',
      rating: 'IMDb 5.3',
      synopsis: 'In this fifth installment of The Conjuring universe, a priest and a novice are sent to investigate a death in an old abbey in Romania...',
      yearReleased: '2018',
      genres: 'Horror • Bleak • Eerie • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/4d236dc9676fc99417adb19d58e0302c64ca5f316fafea607e5dd17043013d58._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '5', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0d03cafdb3efc2ad7e5bd147a0e93f310063c427cd773c593206c69c66e8148a.jpg',
      title: 'Annabelle (2014)',
      synopsis: 'Before The Conjuring, there was Annabelle. Capable of unspeakable evil, the actual Annabelle doll exists locked up in an occult museum visited only by a priest who blesses her twice a month. In this supernatural thriller from producer James Wan, Annabelles story begins before the evil was unleashed.John Form (Ward Horton -- The Wolf of Wall Street) has found the perfect gift...',
      rating: 'IMDb 5.4',
      duration: '1 h 30 min',
      yearReleased: '2014',
      genres: 'Tense • Exciting • Suspense • Horror',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8ac6b0c91885c07e8fdf75e52ec3d89f9e68dfb74be42a023beb7b3716e9fa89._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '6', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7f021b286a03d907a572bc9bf050e04528993e827f0064ca7b3102eec19000d7.jpg',
      title: 'Insidious (2009)',
      synopsis: 'Josh and Renai move to a new house, seeking a fresh start. However, when their son, Dalton, mysteriously falls into a coma, paranormal events start occurring in the house...',
      rating: 'IMDb 6.8',
      duration: '1 h 43 min',
      yearReleased: '2010',
      genres: 'Horror • Suspense • Serious • Tense',
      agerating: 'U/A 16+',
      Agerating: '',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fa49b19d0afd74cd18ba54e3a019665d844d922c98df2655293b1777f1a90bc0._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '7', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7d0b1125737c38b98f3df90f4fc1e0f579b88a0cb62570aa2f4b1f49d6a89190.jpg',
      title: 'The Conjuring 2',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Renowned demonologists Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits...',
      yearReleased: '2016',
      genres: 'Horror • Suspense • Thoughtful • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fb0b1b2128eed24ee4468c643ebe6251db1d855bfe11cdd2ad7f5fcea9afc1f4._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '8', poster: 'https://wallpapers.com/images/hd/annabelle-background-25gb6mvn3ch99voj.jpg',
      title: 'Annabelle: Creation',
      duration: '1 h 45 min',
      rating: 'IMDb 6.5',
      synopsis: 'A nun and six orphaned girls become the target of a former toy makers possessed doll.',
      yearReleased: '2017',
      genres: 'Suspense • Horror • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d31cadb408b0c2e709c9ad787998eeca3d630e745b4a3a5d2f72962e59463f6d._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '9', poster: 'https://fictionhorizon.com/wp-content/uploads/2023/07/insidious-the-red-door-review.jpg',
      title: 'Insidious Red Door',
      duration: '1 h 47 min',
      rating: 'IMDb 5.5',
      synopsis: 'The horror franchises original cast returns for the final chapter of the terrifying saga.',
      yearReleased: '2023',
      genres: 'Suspense • Horror • Thriller • Dark ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/46d780804ee3997372e11a3b1a778d2e8ccaaf85eee66601db8ba9ecc9562ceb._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '10', poster: 'https://i.ytimg.com/vi/uAYC96NvSXc/maxresdefault.jpg',
      title: 'The Conjuring: The Devil Made Me Do It',
      duration: '1 h 51 min',
      rating: 'IMDb 6.3',
      synopsis: 'One of the most sensational cases from Ed and Lorraine Warrens files, it starts with a fight for the soul of a young boy, then takes them beyond anything they’d ever seen before.',
      yearReleased: '2021',
      genres: 'Horror • Suspense • Eerie • Scary',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d648062456b29122c203863881468bc31a85e85d4bcef40e16e689cd02c6308b.jpg',
      trailerUrl: undefined
    },
    {
      id: '11', poster: 'https://1.bp.blogspot.com/-kbP72r9Ik8s/Xk81jIImRfI/AAAAAAAAUN0/DhndRTrERl8dT7qaNznvletnPFndNBaowCLcBGAsYHQ/s1600/Bhoot-wallpaper.jpg',
      title: 'Bhoot - The Haunted Ship',
      duration: '1 h 54 min',
      rating: 'IMDb 5.4',
      synopsis: 'In June 2012, A huge, dead, unmanned ship-“Sea Bird”, on its way to a shipyard, broke its ties and ran ashore Juhu beach. Prithvi, a shipping officer recovering from psychotic depression due to the loss of his family, is in charge of getting Sea Bird back a float.',
      yearReleased: '2020',
      genres: 'Horror •International • Cerebral • Dark',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/f6fbaa9290ce7e8a607fa657d1b3d49a46c92d2fe8eb97bc01dbdac6ed65acdc._SX1920_FMwebp_.png',
      trailerUrl: undefined
    },
    {
      id: '12', poster: 'https://ntvb.tmsimg.com/assets/p159765_v_h10_ab.jpg?w=1280&h=720',
      title: 'Final Destination 3',
      duration: '1 h 28 min',
      rating: 'IMDb 5.8',
      synopsis: 'High school student Wendy Christensen fails to stop the ill-fated rollercoaster ride that she predicted would cause the deaths of several of her friends.',
      yearReleased: '2006',
      genres: 'Suspense • Horror • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/dcea07e7888bcf3b2a8ab66a7e971628a762a4e86460bfd0ff99eeb039d5d215._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '13', poster: 'https://ntvb.tmsimg.com/assets/p13610713_v_h10_aa.jpg?w=960&h=540',
      title: 'It (2017)',
      duration: '2 h 8 min',
      rating: 'IMDb 7.3',
      synopsis: 'Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the towns children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Eerie • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c93977098496f52746e3bb18429ec32b370d348aff89b2413a76c2f1cb2f5002._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '14', poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4505eb561bdf8dd1130260b1f7c64e585ede698e90c491f3711e8b92ea8d5cdb._UR1920,1080_SX480_FMwebp_.jpg',
      title: 'The Nun',
      duration: '1 h 36 min',
      rating: 'IMDb 5.3',
      synopsis: 'In this fifth installment of The Conjuring universe, a priest and a novice are sent to investigate a death in an old abbey in Romania...',
      yearReleased: '2018',
      genres: 'Horror • Bleak • Eerie • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/4d236dc9676fc99417adb19d58e0302c64ca5f316fafea607e5dd17043013d58._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: '5', poster: 'https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2023/10/04/2269495875861/PAMM_US_2023_SA_16x9_1920x1080_NB_2375011_1920x1080.jpg',
      title: "PAW Patrol: The Mighty Movie",
      duration: "1h 36m",
      rating: "IMDb 6.5",
      synopsis: "The PAW Patrol pups transform into The Mighty Pups after a meteor shower gives them superpowers.",
      yearReleased: "2023",
      genres: "Animation • Action • Adventure",
      agerating: "G",
      Agerating: "G",
      modalPoster: "https://images.justwatch.com/backdrop/309014895/s640/paw-patrol-the-mighty-movie.%7Bformat%7D",
      trailerUrl: undefined
    },
    {
      id: '6', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-Lgyzb-FCLgCkRTanUGz2G3I9bLzww0ec-RtkvmlVNFxTZPm',
      title: "Humpty Dumpty",
      duration: "1h 10m",
      rating: "IMDb 5.8",
      synopsis: "A new take on the classic nursery rhyme, with a thrilling adventure for Humpty Dumpty and friends.",
      yearReleased: "2021",
      genres: "Animation • Family • Fantasy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/bcb4a57a7130a75dbd8feafda8d3ee03c7c1dd388c39f650ed5f13cf52acaa1b.jpg",
      trailerUrl: undefined
    },
    {
      id: '7', poster: 'https://i.ytimg.com/vi/f-Rr1UyF-r0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAFe2jLwO2EH2j3Xozl4vr7MGFkKQ',
      title: "Madagascar",
      duration: "1h 26m",
      rating: "IMDb 6.9",
      synopsis: "A group of zoo animals embark on an adventure to return to the wild, discovering Madagascar.",
      yearReleased: "2005",
      genres: "Animation • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/43ccb1741707503846f1a76b0a111c5cac456341ef82a5db52793265422ccc7f._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '8', poster: 'https://cdn.prod.website-files.com/64e961c3862892bff815289d/65a78efc8aac734b3159c5bd_The-Angry-Birds-Movie-2_1920x1080_new.jpg',
      title: "The Angry Birds 2",
      duration: "1h 37m",
      rating: "IMDb 6.4",
      synopsis: "The flightless birds and scheming green pigs take their feud to the next level.",
      yearReleased: "2019",
      genres: "Animation • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/002eb96dbf42a178dcfa3b6c38a8ec04050b882907ca7c80e9f565747544ff67._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '9', poster: 'https://images8.alphacoders.com/114/1144483.jpg',
      title: "How to Train Your Dragon 2",
      duration: "1h 42m",
      rating: "IMDb 7.8",
      synopsis: "Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider.",
      yearReleased: "2014",
      genres: "Animation • Action • Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/002eb96dbf42a178dcfa3b6c38a8ec04050b882907ca7c80e9f565747544ff67._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '10', poster: 'https://qph.cf2.quoracdn.net/main-qimg-0f679be7c733cb3adf9825f6feb35a08-lq',
      title: "Sonic: The Hedgehog",
      duration: "1h 40m",
      rating: "IMDb 6.5",
      synopsis: "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.",
      yearReleased: "2020",
      genres: "Action • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d6d6d4cc4a5db4a0675ec5468a7739b60d3a125497c8673ee9f48529a520a63d._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '11', poster: 'https://m.media-amazon.com/images/S/pv-target-images/f952c79747f8c78679517047548ac9ecf4d4ed657159e64e3028a0b96753cfb6.jpg',
      title: "Dora and the Lost City",
      duration: "1h 42m",
      rating: "IMDb 6.1",
      synopsis: "Dora, a teenage explorer, leads her friends on an adventure to save her parents and solve the mystery behind a lost city of gold.",
      yearReleased: "2019",
      genres: "Adventure • Family • Fantasy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/1cd881dae97ae08c07c84dc1737b1fbdadfedc29694b1a0c5eff51a72bf22668._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '12', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0884cb5aa16eb7b5e0eae2e4336b82a5fb694ae15ea72d3be1352bb5cf200232.jpg',
      title: "Tom and Jerry: The Movie",
      duration: "1h 41m",
      rating: "IMDb 5.3",
      synopsis: "A legendary rivalry re-emerges when Jerry moves into New York City's finest hotel on the eve of the wedding of the century, forcing Tom to stop at nothing to take him out.",
      yearReleased: "2021",
      genres: "Animation • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2021/02/Tom-and-Jerry-Feature.jpg?fit=1211%2C712&ssl=1',
      trailerUrl: undefined
    },
    {
      id: '13', poster: 'https://i.ytimg.com/vi/t7nMS81XTGQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAt4leffhmyHfmLaaZUSib-4Oeehg',
      title: "Stolen Princess",
      duration: "1h 31m",
      rating: "IMDb 6.1",
      synopsis: "Ruslan, a wandering artist, and Mila, the King's daughter, fall in love but face many obstacles in their quest to be together.",
      yearReleased: "2018",
      genres: "Animation • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a3264346caf0ee2aec48268b864fab1b2ead79ddb9fa11738a02f17581f8d1df._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '14', poster: 'https://m.media-amazon.com/images/S/pv-target-images/2695d07c0c48bb08ba1b3af483dae6766cdae11e826990d28b93102c07a86b8e.jpg',
      title: "Trolls World Tour",
      duration: "1h 30m",
      rating: "IMDb 6.1",
      synopsis: "Poppy and Branch discover that there are six different troll tribes scattered over six different lands and must unite them to stop a rock empire from taking over all the troll music.",
      yearReleased: "2020",
      genres: "Animation • Adventure • Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0f91b5fe256eef76e05b03ae4daae43857dbb9d0e12e12179efc65fd12b17fd2._SX1080_FMpng_.png',
      trailerUrl: undefined
    },
  ],
};

const ActionAdventureMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '15',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/0bf7a468d1c99af82744edaed5bc4bf6e61a54f953ec19dc5f09feff54fbab38.jpg',
      title: 'The Vampire Diaries',
      duration: '22 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'Think you know vampires? You dont. Neither does Elena but shes about to. Stefan Salvatore and Damon Salvatore in the series as two vampire brothers who fights for her soul. The season begins after the deaths of Elena and Jeremy Gilberts parents. Both are put in their Aunt Jennas custody. Jeremy has become a loner and Elena starts dating a boy named Stefan Salvatore.',
      yearReleased: '2009',
      genres: 'Suspense • Horror • Drama • Romance',
      agerating: 'U/A 16+',
      modalPoster: '',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      seasonData: {
        1: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/d3069884300e32026f3cdd392776af9ff2bbeb8ee4a2cb638750e4138e9257e6._SX1080_FMjpg_.jpg',
          synopsis: 'Think you know vampires? You dont. Neither does Elena but shes about to. Stefan Salvatore and Damon Salvatore in the series as two vampire brothers who fights for her soul. The season begins after the deaths of Elena and Jeremy Gilberts parents. Both are put in their Aunt Jennas custody. Jeremy has become a loner and Elena starts dating a boy named Stefan Salvatore.',
          episodes: [
            {
              poster: 'https://m.media-amazon.com/images/S/pv-target-images/01d65ac50ea95f81d34bb23d853f92d8c651466a9317b3160f9dbdfd9327d402.png',
              title: 'Episode 1: Pilot',
              Synopsis: 'NINA DOBREV, PAUL WESLEY and IAN SOMERHALDER star in this new series, based on the best-selling book series, of two vampire brothers at war for the soul of 17-year-old Elena.',
              year: 'September 10, 2009',
              duration: '42 min'
            },
            {
              title: 'Episode 2: The Night of the Comet',
              poster: 'https://m.media-amazon.com/images/S/pv-target-images/2548b36fa8079fc11635e8f74e1e27aa6547c5b1f46454f172cb285f5ff5f7cc.png',
              Synopsis: 'Elena goes to the Salvatore house to talk to Stefan, but finds Damon there instead, who reveals surprising information about Stefans past. Vicki begins to remember the attack.',
              year: 'September 17, 2009',
              duration: '42 min',
            },
            {
              title: 'Episode 3: Friday Night Bites',
              poster: 'https://m.media-amazon.com/images/S/pv-target-images/48c451b661dba03930964e44ba2709b4bbba2a49246d58a03b2bec48acb66d41.png',
              Synopsis: 'Elena invites Stefan and Bonnie to dinner, hoping that the two will bond, but the evening is disrupted by the unexpected and unwelcome arrival of Damon and Caroline.',
              year: 'September 24, 2009',
              duration: '43 min',
            },
            {
              title: 'Episode 4: Family Ties',
              poster: 'https://m.media-amazon.com/images/S/pv-target-images/48c451b661dba03930964e44ba2709b4bbba2a49246d58a03b2bec48acb66d41.png',
              Synopsis: 'Stefan escorts Elena to the towns Founders Party. At the party, Damon tells Elena a story about the Salvatore family, leaving Elena with questions Stefan refuses to answer.',
              year: 'October 1, 2009',
              duration: '42 min',
            },
          ]
        },
        2: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/64f787ba9717b564e2be76615db23129d700865ddae046f153348190bbf49c45._SX1080_FMjpg_.jpg',
          synopsis: 'The Vampire Diaries sucks you in with its sexy drama and mystery as two vampire brothers, obsessed with the same gorgeous girl, battle to control the fate of an entire town. This season, Katherines appearance will throw a wrench in the love triangle between Stefan, Elena and Damon, and the other residents of Mystic Falls must choose sides as they fall victim to a new breed of danger.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        3: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/060e1d2bf151c805dcc33a9fec1c4e88c7255bfd109a3ebbadebcd74d7ae515e._SX1080_FMjpg_.jpg',
          synopsis: 'The third season of The CW’s number one series opens the door to learn more about Klaus and the Original Family of vampires as his motives for wanting Stefan on his side are finally revealed. As Stefan sinks deeper into the dark side, Damon and Elena struggle with the guilt of their growing bond, even as they work together to bring Stefan back from the edge.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        4: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/48e91a90fa258a7d35ad8af8d56e64cfc7760f25ed5b2e795bf294d7aff71b91._SX1080_FMjpg_.jpg',
          synopsis: 'The CW’s #1 show begins another explosive season with everything in transition. Elena awakens from her accident to find her worst nightmare realized: she must now endure the terrifying change of becoming a vampire — or face certain death. Stefan and Damon are torn even further apart over how to help her, and a mysterious new villain is introduced who seems intent on destroying Mystic Falls.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        5: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/fa421fcc39f6388aae609ddd63d9f0b0fb044617e0016eb085c4a897803c910e._SX1080_FMjpg_.jpg',
          synopsis: 'Get ready for more epic romance, suspense and thrills! The hit series picks up the summer after the season four finale, when Elena forced her doppelganger, Katherine, to take the cure to vampirism, and professed her true love to Damon … as Stefan listened in the other room — and then was stabbed by Silas and thrown in a tomb. Now, some head off to college, and there’s a shocking Salvatore secret.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        6: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/1c8ca7ed4bdbe038b2aadb90a08d90b6d4b59f6043de8e3abebed712f94c0a62._SX1080_FMjpg_.jpg',
          synopsis: 'Get ready for more epic suspense, romance and thrill rides with The Vampire Diaries. After season 5’s shocking finale sent the characters reeling, season 6 is the story of their journey back to each other, as they explore the duality of good versus evil inside themselves. Fan favorite Matt Davis rejoins the cast as Alaric Saltzman, recently returned from The Other Side.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        7: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/6504a3df9c28a460da49c6487e8d3af88c7c2898385523892a3daaae198a03b7._SX1080_FMjpg_.jpg',
          synopsis: 'Get ready for more epic thrills and romance as The Vampire Diaries continues for a seventh season. After saying an emotional goodbye to Elena Gilbert, some characters will recover while others falter. As Damon and Stefan’s mother, Lily (guest star Annie Wersching), tries to drive a wedge between the Salvatore brothers, hope remains that Stefan and Caroline’s love story is tough enough to survive.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        },
        8: {
          poster: 'https://m.media-amazon.com/images/S/pv-target-images/35be879e920c3a3c7b9316a2871538bf2c81da63f50e5f70d0e4f126de65902d._SX1080_FMjpg_.jpg',
          synopsis: 'THE VAMPIRE DIARIES enters its final season with more romance and adventure than ever before. Last season, our heroes rebuilt their world without Elena, and complicated relationships began. Damon and Enzo entered the Armory’s occult vault to remedy a crisis after Damon used the Armory to defeat Rayna. The search for Damon and Enzo will begin in season eight, even though it may be too late.',
          episodes: [
            {
              title: 'Episode 1: The Awakening', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 2: The Night of the Hunter', duration: '45 min',
              poster: '',
              Synopsis: '',
              year: ''
            },
            {
              title: 'Episode 22: Founders Day', duration: '42 min',
              poster: '',
              Synopsis: '',
              year: ''
            }
          ]
        }
      },
      trailerUrl: undefined,
      Agerating: undefined,
    },
    {
      id: '16', poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9944343_b_h9_al.jpg',
      title: 'The Originals',
      duration: '22 episodes',
      rating: 'IMDb 8.3',
      synopsis: 'From the executive producer of The Vampire Diaries and simmering with supernatural elements, this sexy new series centers on the Original vampire family, as the dangerous vampire/werewolf hybrid, Klaus (Joseph Morgan), returns to New Orleans — the town he helped build centuries ago — to find his diabolical former protégé, Marcel (Charles Michael Davis), a charismatic vampire, in control.',
      yearReleased: '2014',
      genres: 'Fantasy • Drama • Horror • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4, 5],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/a0c53a51c6a97d7e6481f967b781edfcc87857cfb8c48b7c8a67bbd5f453be35._SX1920_FMwebp_.jpg', synopsis: 'From the executive producer of The Vampire Diaries and simmering with supernatural elements, this sexy new series centers on the Original vampire family, as the dangerous vampire/werewolf hybrid, Klaus (Joseph Morgan), returns to New Orleans — the town he helped build centuries ago — to find his diabolical former protégé, Marcel (Charles Michael Davis), a charismatic vampire, in control.' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/de97bb716fab8c23a69dca23c7153686e696b1cd5d6f8f8cb1c9f1ad1aa01f5d.jpg', synopsis: 'As the Original vampire-werewolf hybrid Klaus Mikaelson (Joseph Morgan) returned to the vibrant, supernaturally charged city of New Orleans, he and his siblings found themselves caught in a bloody war between vampires and witches, unaware that a ruthless pack of wolves was already lurking in the city, waiting to stage a violent coup. Now, in season two, a new status quo must be adjusted to.' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/fbfbeaa7d3a53347627ddbb640fd6bac6a1da6c14d5962d1c00c66f7dc4e4fb3._SX1080_FMjpg_.jpg', synopsis: 'As hit series The Originals enters season three, Klaus and Elijah are estranged, even as the brothers adjust to life with their long-lost sister, Freya. Hayley suffers at the hands of Klaus’s petty vengeance, while Marcel and Davina rule the city and Cami and Vincent get caught up in a mystery involving the newest resident of New Orleans — the first vampire sired by the Mikaelsons 1,000 years ago.' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/9fa291b2546a92946a2fc6f380424336efb72a5435c90214650f393cbf9fab4d._SX1080_FMjpg_.jpg', synopsis: 'For more than a millennium, the Original vampire-werewolf hybrid Klaus Mikaelson and his brother Elijah have fought for their family no matter the cost, but their actions have spawned a legion of enemies. Now surrounded by foes, they enact a brutal strategy that will turn even their friends and family against them, thus fulfilling the prophecy itself and setting the course for season four.' },
        5: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/6560c872c003cb89ba721433cd0d26fbc358a24e2aa2dc6d8d0eb09134f9d35e.jpg', synopsis: 'Season five begins years after the Mikaelson family absorb the Hollow’s dark energy and flee New Orleans to keep their city and Hope safe. Meanwhile, Vincent and Josh preside over the Big Easy while Hayley and Freya send Hope to the Salvatore School. The danger seems contained until a tragedy forces the siblings home, which makes the closing chapter of this family saga as emotional as ever.' },
      },
      trailerUrl: undefined
    },
    {
      id: '17', poster: 'https://m.media-amazon.com/images/S/pv-target-images/65069a428f093ccd014f01bf75d7f5f1d66d7e3b883955870e5f311f0497419e.jpg',
      title: 'The Legacies',
      duration: '16 episodes',
      rating: 'IMDb 7.2',
      synopsis: 'The iconic heroes and villains of The Vampire Diaries and The Originals left an enduring legacy of love and family in their wake, which continues in LEGACIES, a thrilling new drama that tells the story of the next generation of supernatural beings at The Salvatore School for the Young and Gifted.',
      yearReleased: '2019',
      genres: 'Fantasy • Horror • Drama • Young Adult Audience',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/6f4225c2830ef9fb714437fde986a91db7f55cf449535961fcc580d2c8300c45._BR-6_AC_SX720_FMjpg_.jpg', synopsis: 'The iconic heroes and villains of The Vampire Diaries and The Originals left an enduring legacy of love and family in their wake, which continues in LEGACIES, a thrilling new drama that tells the story of the next generation of supernatural beings at The Salvatore School for the Young and Gifted.' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/b95e9611a4e05a9c1b0dcfc2d12914a3154007d6659233d6cc92199c659f719d.jpg', synopsis: 'The iconic heroes and villains of The Vampire Diaries and The Originals left an enduring legacy of love and family in their wake, which continues in LEGACIES, a thrilling drama that tells the story of the next generation of supernatural beings at The Salvatore School for the Young and Gifted.' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/0cc6f1081f3f1773714a50209106a1862220f1433eb2d7d007330cffe110cec1.jpg', synopsis: 'In season two, Hope Mikaelson reunited and worked with Alaric Saltzman to lead their Super Squad into battle against fantastic and deadly monsters. As season three begins, Hope has risked everything to pull her friends back from the brink of a monstrous prophecy that threatened them. But when a heartbreaking loss shatters her whole world, Hope Mikaelson will be forced to fight fate itself.' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/bb1504320e419edd657b0a8de635672e0b88f2fec1eb40c57d8e871743198f59.jpg', synopsis: 'Season 4 of Legacies begins with Hope having to choose between saving the boy she loves and ending Malivores threat. This choice has life-changing consequences for Alaric Saltzman and the Super Squad, a group of young vampires, witches, and werewolves who attend the Salvatore School for the Young and Gifted. Together, they use ancient folklore and tales to learn how to battle their enemies and keep balance in the world.' },
      },
      trailerUrl: undefined
    },
    {
      id: '18', poster: 'https://streamondemandathome.com/wp-content/uploads/2023/09/teen_wolf_series.jpg',
      title: 'Teen Wolf',
      duration: '24 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'A single wolf bite changes everything for awkward high school sophomore Scott McCall (Tyler Posey). Now Scott has super-human abilities, but he also soon finds himself being pulled into the middle of a war between werewolves and werewolf hunters!',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Action • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4, 5, 6],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/d1cf84f2422f31144a03291fbae965add2518d309ca7422aadf606df94bb8170._SX1080_FMpng_.png', synopsis: 'A single wolf bite changes everything for awkward high school sophomore Scott McCall (Tyler Posey). Now Scott has super-human abilities, but he also soon finds himself being pulled into the middle of a war between werewolves and werewolf hunters!' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/b3bca21d064587487239b7408fa490ab25c62c3e4b4493511cb40c57917ff2f8._BR-6_AC_SX720_FMpng_.png', synopsis: 'After an action-packed premiere season, "Teen Wolf" jumps full force into season two as Scott McCall continues to find himself caught in a supernatural war between hunters and werewolves, all while navigating the complicated roadways of high school.' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/25f8f63b276c8aab7113849d9a5b736c553a2f37f63c2b94550dd0eb55c575d2._SX1080_FMpng_.png', synopsis: 'Teen wolf Scott McCall and his friends begin their junior year of high school unaware that a new threat has arrived in Beacon Hills: a pack of Alpha werewolves intent on bringing Derek into their fold, while destroying his young pack.' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/693db6f3ede5cf8b737bf656a7f6bd9a90e9f65bee4a084944d472a71529388d.jpg', synopsis: 'Still healing from tragic losses, Scott, Stiles, Lydia and Kira return to a new semester of school with more human worries than supernatural, while also trying to help their new friend, Malia, integrate back into society. But Kate Argent’s surprising resurrection brings a new threat to Beacon Hills along with the emergence of another mysterious enemy known simply as The Benefactor.' },
        5: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/8c7369f438b09d23de2546036c6a72154976a7361768886bb8b40cf536fec011._SX1080_FMjpg_.jpg', synopsis: 'On the eve of Senior Year, Scott and his friends find themselves facing the possibility of a future without each other, a next phase of their lives that might take them in different directions despite their best intentions.' },
        6: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/0fca4236a2a97774a0148e3f6708a699c2e472ab30bb17c3f3ad0ccca4ea1ba5._SX1080_FMjpg_.jpg', synopsis: 'Storm clouds gather as Scott and the pack head into their final months of high school. Before the end, Scott and Lydia will stand alone against the growing darkness and fight to stop the destruction of everything and everyone they love.' },
      },
      trailerUrl: undefined
    },
    {
      id: '19', poster: 'https://m.media-amazon.com/images/S/pv-target-images/335385d99a99aa14e54816919b91dbdcd510f2402a6e689718273faae35f51a5.jpg',
      title: 'Reign',
      duration: '22 episodes',
      rating: 'IMDb 7.5',
      synopsis: 'Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. The teenage Mary is already a headstrong monarch - beautiful, passionate and poised at the very beginning of her tumultuous rise to power.',
      yearReleased: '2014',
      genres: 'History • Fantasy • Drama • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/1d60d649cac84cdf1d1485b7b673025169b5b093dd969786f56a2e8522b33479._SX1920_FMwebp_.jpg', synopsis: 'Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. The teenage Mary is already a headstrong monarch - beautiful, passionate and poised at the very beginning of her tumultuous rise to power.' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/16316d2f5ea1269b288c326ee115692d9db8043fdbc0454121a4dc604288306e.png', synopsis: 'The second season begins with Mary and Francis on the throne of a nation burning. France is rocked by the aftereffects of the plague -- a disease that creeps inside the castle walls, taking thousands upon thousands of lives across the land, and ravages the stability of a nation.' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/3c9f6ef690c2a7a8a46241df834928e87a06fd76a605edf007749da6a5492655.png', synopsis: 'Reign begins its third season with Mary and Francis realizing that they are more powerful together than apart, believing there is hope for them to move forward, leaving behind the anger and hurt. It also introduces us to another Court, that of Elizabeth, "Virgin" Queen of England.' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/26ddb7af9fa3b24c91ea2d93c7d3f60bc31d992ceb6a74405055415400e8ea59._SX1080_FMjpg_.jpg', synopsis: 'Season Four of Reign finds Mary rising to the challenge, taking back her country and establishing her rule in Scotland, the land of her birth but a wild nation foreign to her, and now, once again, her home. Even as our canvas expands to welcome a new court in Scotland with new players, including Marys half-brother James, and the men who vie for her hand, the French Court grows as well.' },
      },
      trailerUrl: undefined
    },
    {
      id: '20', poster: 'https://m.media-amazon.com/images/S/pv-target-images/194486fa124d651e7dd0b83d38495d8648e5c588cb70f33d5f4c7b7971c49078.png',
      title: 'I Know What You Did Last Summer',
      duration: '8 episodes',
      rating: 'IMDb 5.4',
      synopsis: 'In a town full of secrets, a group of teenagers are stalked by a mysterious killer a year after a fatal accident on their graduation night.',
      yearReleased: '2021',
      genres: 'Drama • Horror • Suspense • Mystery',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/05209fd91e61a153aff6f29f5fdffd59781ace61e91d46ca03c6b6b1af7c4234._SX1920_FMwebp_.jpg',
      seasons: [1], seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/05209fd91e61a153aff6f29f5fdffd59781ace61e91d46ca03c6b6b1af7c4234._SX1920_FMwebp_.jpg', synopsis: 'In a town full of secrets, a group of teenagers are stalked by a mysterious killer a year after a fatal accident on their graduation night.' },
      },
      trailerUrl: undefined
    },
    {
      id: '21', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c3f79be2833b9047ceac3185d1be184af40719476c10aeef14c67166c66d59c6.jpg',
      title: 'The Winchesters',
      duration: '14 episodes',
      rating: 'IMDb 6.2',
      synopsis: 'Before Supernaturals Sam and Dean, there were their parents, John and Mary. Narrated by Dean Winchester (Jensen Ackles), THE WINCHESTERS is the prequel and untold love story of how John Winchester met Mary Campbell. On a mission to trace his father’s past, John meets 19-year-old demon hunter Mary. While secrets run deep for John and Mary, they are determined to uphold their families legacies.',
      yearReleased: '2023',
      genres: 'Fantasy • Horror • Suspense • Action',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ff2d40b5ee97cf0ca1cb648b3cf5a2794c271c1498be3c29a6a2628bc79a97ea._SX1080_FMjpg_.jpg',
      seasons: [1],
      seasonData: {
        1: { poster: '', synopsis: '' },
      },
      trailerUrl: undefined
    },
    {
      id: '22', poster: 'https://m.media-amazon.com/images/S/pv-target-images/e258b005a8c8ec7c2000783af54f9961dd89aa54faacce6db82cbe9f491d620e.jpg',
      title: 'The Walking Dead',
      duration: '6 episodes',
      rating: 'IMDb 6.8',
      synopsis: '',
      yearReleased: '2015',
      genres: 'Drama • Horror • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/19f153d47cb2afe89064b141cba6fdaea546083c66b22122a383f7b4371954c5._SX1920_FMwebp_.png', synopsis: 'County Sheriff Rick Grimes, his wife, son and a small eclectic group try to survive constant attacks from zombies and other threats.' },
        2: { poster: 'https://imageservice.sky.com/contentid/A5EK5anvvYyiVA265d7XS/LAND_16_9?language=eng&territory=GB&proposition=NOWTV&version=a5b5d945-f390-3120-ab1a-c57fd94a60d8', synopsis: 'When the world is ravaged by a zombie apocalypse, police officer Rick Grimes and a small group of others must face a terrifying new reality. Can they survive the dead and each other?' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f27ee2cd3c3cff728a37c9ef61e962c00041e506c55b07c6932a74c26e1d805._SX1080_FMjpg_.jpg', synopsis: 'AMCs "The Walking Dead, the most watched drama in basic cable history returns for a thrilling new season. In this desolate world, Rick and his band of survivors must not only fight the dead, but face a whole new fear: the living.' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/a447779f9bb90af944191bf16bc0b08c0bccaf0e166be0cced1af2fe1ed41006._SX1080_FMjpg_.jpg', synopsis: 'AMCs original series, The Walking Dead, returns for a terrifying and exhilarating new season. Dont miss the series that Detroit News calls absolutely fearless and gut-wrenching.' },
        5: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/119a949475964613d5307f5d9e19a34131f5ff9161efb07521628aac2d4fc666._SX1080_FMjpg_.jpg', synopsis: 'Rick and the group are still reeling from the loss of their home, family, and friends. With the destruction of the prison, the survivors are scattered and sent on divergent paths, unsure of everyone else fate.' },
        6: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/566b1c8dd82757fa40b5419900882e5b79eb8d0ab47b432266efc546bf00cb97._SX1080_FMjpg_.jpg', synopsis: 'Season Six starts with Alexandrias safety shattered by multiple threats.' },
        7: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/6d41db0b9bc4fafa1900da05f3c9d032304e29846d0b7d11758db2c54fa55090._SX1080_FMpng_.png', synopsis: 'Up until this point, our characters have lived through conflicts... Through this, theyve become formidable. Powerful. Unstoppable.Now, that power is taken away. They had found safety and stability. They thought the world was theirs. They were wrong.' },
        8: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/fb0dc7934094f81731f46d2b2783a13650eec349d4ce75b3c045688f798edd1f.jpg', synopsis: 'In Season 8, Rick brings "All Out War" to Negan and his forces. The Saviors are larger, better-equipped, and ruthless -- but Rick and the unified communities are fighting for the promise of a brighter future.' },
        9: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/1cae96759c3948aabd2e82de250a04f4d7ad2e18abe196c722372e3985d2d5d1._BR-6_AC_SX720_FMpng_.png', synopsis: 'Last season brought the culmination of “All Out War,” which pitted Rick Grimes and his group of survivors against the Saviors and their cunning leader, Negan. Now, we see our survivors a year and a half after the end of the war, rebuilding civilization under Rick’s steadfast leadership.' },
        10: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/a6a26045b426acc7fa88d62b3301aeb90bd32003d7df0c476ec5bf3706912eec.jpg', synopsis: 'The communities are still dealing with the after effects of Alphas horrific display of power.' },
        11: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/db477bccf5315aa9b6b5f690f53dc54cf004e997abcfb462dae309ade8bc9bf1._SX1080_FMjpg_.jpg', synopsis: 'Our heroes set off to confront the Reapers, while Eugenes group assimilates to the Commonwealth.' },
      },
      trailerUrl: undefined
    },
    {
      id: '23', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53e83bc204a084572f88498d99c4e347eb3d6dbe59507889df26a02133ab9b06.jpg',
      title: 'Sherlock',
      duration: '3 episodes',
      rating: 'IMDb 9.1',
      synopsis: 'Sherlock Holmes and Doctor Watsons adventures arrive in 21st Century London.',
      yearReleased: '2017',
      genres: 'Drama • Suspense • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: '',
      seasons: [1, 2, 3, 4],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/bff2ea15ac064d1749a96931161c6e51e5c65ed83dc1a032f4fd55a22ed06e5d.jpg', synopsis: 'Sherlock Holmes and Doctor Watsons adventures arrive in 21st Century London.' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/bd2e1afac2a7abb4ccd804ecd61bced891c8917156767eae675263ad7ff57a52.jpg', synopsis: 'Sherlock and Watson return to face the ultimate test in three of their most famous cases. He meets the brilliant but eccentric Holmes when the latter, who serves as a consultant to Scotland Yard, advertises for a flatmate. Almost as soon as Watson moves into the Baker Street flat, they are embroiled in mysteries, and Sherlocks nemesis, Moriarty, appears to have a hand in the crimes.' },
        3: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/a65797f990eeddadf04eb1a217cc97cff5738412216eef1402ab571f2c8812fc._SX1080_FMjpg_.jpg', synopsis: 'Mycroft calls Sherlock back to London to investigate an underground terrorist organization. Sherlock tries to give the perfect best man speech at Johns wedding when he suddenly realizes a murder is about to take place. Sherlock goes up against Charles Augustus Magnussen, media tycoon and a notorious blackmailer. Sherlock is back, but will things ever be the same again?' },
        4: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/4422666cd5a21ab0434e79c966d4addd970cf2c96e53b23b6903d7b97b81faaa.jpg', synopsis: 'Season 4 of Sherlock is a contemporary adaptation of Sir Arthur Conan Doyles detective stories. In this season, Dr. John Watson, a war veteran, moves in with Sherlock Holmes, a Scotland Yard consultant, and they quickly become involved in mysteries. Sherlocks nemesis, Moriarty, seems to be involved in the crimes, and the Thatcher case begins to intertwine with the Moriarty problem' },
      },
      trailerUrl: undefined
    },
    {
      id: '24', poster: 'https://m.media-amazon.com/images/S/pv-target-images/43005ae192acb38ea8329c507a376cb8da1cce0cc4e03991d6d7935d1bf58647._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Night Sky',
      duration: '8 episodes',
      rating: 'IMDb 7.3',
      synopsis: 'Irene and Franklin York, a retired couple, have a secret: a Chamber buried in their backyard that miraculously leads to a strange, deserted planet. When an enigmatic young man arrives, the Yorks’ quiet existence is upended and the mysterious Chamber they thought they knew so well turns out to be much more than they could have ever imagined. Starring Sissy Spacek and JK Simmons.',
      yearReleased: '2022',
      genres: 'Adventure • Drama • Fantasy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.digitaltrends.com/wp-content/uploads/2022/05/franklin-and-irene-looking-at-the-stars-in-night-sky.jpg?p=1',
      seasons: [1],
      seasonData: {
        1: { poster: '', synopsis: '' },
      },
      trailerUrl: undefined
    },
    {
      id: '25', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9599b730ec225edaa6010edfdfcb503baa248f916e430616a86deeabe34daf41.jpg',
      title: 'The Exorcist',
      duration: '10 episodes',
      rating: 'IMDb 7.9',
      synopsis: 'A modern reinvention inspired by William Peter Blattys original 1971 book, THE EXORCIST is a propulsive, serialized, psychological thriller.',
      yearReleased: '2016',
      genres: 'Horror • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/41f1b967e7ac06f997fd8e1038547a65418420a960d4ad336508288bacb4b782.png',
      seasons: [1, 2],
      seasonData: {
        1: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/41f1b967e7ac06f997fd8e1038547a65418420a960d4ad336508288bacb4b782.png', synopsis: 'A modern reinvention inspired by William Peter Blattys original 1971 book, THE EXORCIST is a propulsive, serialized, psychological thriller.' },
        2: { poster: 'https://m.media-amazon.com/images/S/pv-target-images/ed25f16abb1bb66622963cf529b3df99a9de7f7711f65b1c62d53f44f19dd6b3._SX1080_FMpng_.png', synopsis: '' },
      },
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '15', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0bf7a468d1c99af82744edaed5bc4bf6e61a54f953ec19dc5f09feff54fbab38.jpg',
      title: 'The Vampire Diaries',
      duration: '22 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'Think you know vampires? You dont. Neither does Elena (DeGrassi: The Next Generations Nina Dobrev), but shes about to. Paul Wesley (Everwood) and Ian Somerhalder (Lost) star in the series as two vampire brothers at war for her soul.',
      yearReleased: '2009',
      genres: 'Suspense • Horror • Drama • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fa3b16deee8027741182e86e213d18e0a15443452f56f6877d7472e1f48e5d6c._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      trailerUrl: undefined
    },
    {
      id: '16', poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9944343_b_h9_al.jpg',
      title: 'The Originals',
      duration: '22 episodes',
      rating: 'IMDb 8.3',
      synopsis: 'From the executive producer of The Vampire Diaries and simmering with supernatural elements, this sexy new series centers on the Original vampire family, as the dangerous vampire/werewolf hybrid, Klaus (Joseph Morgan), returns to New Orleans — the town he helped build centuries ago — to find his diabolical former protégé, Marcel (Charles Michael Davis), a charismatic vampire, in control.',
      yearReleased: '2014',
      genres: 'Fantasy • Drama • Horror • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a0c53a51c6a97d7e6481f967b781edfcc87857cfb8c48b7c8a67bbd5f453be35._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4, 5],
      trailerUrl: undefined
    },
    {
      id: '17', poster: 'https://m.media-amazon.com/images/S/pv-target-images/82faa7f4a1611633f214de875b81c48a16704831211c85c41e107096d9fece6d.jpg',
      title: 'The Legacies',
      duration: '16 episodes',
      rating: 'IMDb 7.2',
      synopsis: 'The iconic heroes and villains of The Vampire Diaries and The Originals left an enduring legacy of love and family in their wake, which continues in LEGACIES, a thrilling new drama that tells the story of the next generation of supernatural beings at The Salvatore School for the Young and Gifted.',
      yearReleased: '2019',
      genres: 'Fantasy • Horror • Drama • Young Adult Audience',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ac18cbadfc8703823042128a3cac8e4e12d4fcc71ac639e24fb3d1f5307561ce._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '18', poster: 'https://streamondemandathome.com/wp-content/uploads/2023/09/teen_wolf_series.jpg',
      title: 'Teen Wolf',
      duration: '24 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'A single wolf bite changes everything for awkward high school sophomore Scott McCall (Tyler Posey). Now Scott has super-human abilities, but he also soon finds himself being pulled into the middle of a war between werewolves and werewolf hunters!',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Action • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/2a9dd193e179d0fffd2919250db7167b1d6a8d750a13e70da93688caf2d622d0._SX1920_FMwebp_.png',
      seasons: [1, 2, 3, 4, 5, 6],
      trailerUrl: undefined
    },
    {
      id: '19', poster: 'https://m.media-amazon.com/images/S/pv-target-images/335385d99a99aa14e54816919b91dbdcd510f2402a6e689718273faae35f51a5.jpg',
      title: 'Reign',
      duration: '22 episodes',
      rating: 'IMDb 7.5',
      synopsis: 'Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. The teenage Mary is already a headstrong monarch - beautiful, passionate and poised at the very beginning of her tumultuous rise to power.',
      yearReleased: '2014',
      genres: 'History • Fantasy • Drama • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/1d60d649cac84cdf1d1485b7b673025169b5b093dd969786f56a2e8522b33479._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '20', poster: 'https://m.media-amazon.com/images/S/pv-target-images/194486fa124d651e7dd0b83d38495d8648e5c588cb70f33d5f4c7b7971c49078.png',
      title: 'I Know What You Did Last Summer',
      duration: '8 episodes',
      rating: 'IMDb 5.4',
      synopsis: 'In a town full of secrets, a group of teenagers are stalked by a mysterious killer a year after a fatal accident on their graduation night.',
      yearReleased: '2021',
      genres: 'Drama • Horror • Suspense • Mystery',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/05209fd91e61a153aff6f29f5fdffd59781ace61e91d46ca03c6b6b1af7c4234._SX1920_FMwebp_.jpg',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '21', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c3f79be2833b9047ceac3185d1be184af40719476c10aeef14c67166c66d59c6.jpg',
      title: 'The Winchesters',
      duration: '14 episodes',
      rating: 'IMDb 6.2',
      synopsis: 'Before Supernaturals Sam and Dean, there were their parents, John and Mary. Narrated by Dean Winchester (Jensen Ackles), THE WINCHESTERS is the prequel and untold love story of how John Winchester met Mary Campbell. On a mission to trace his father’s past, John meets 19-year-old demon hunter Mary. While secrets run deep for John and Mary, they are determined to uphold their families legacies.',
      yearReleased: '2023',
      genres: 'Fantasy • Horror • Suspense • Action',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ff2d40b5ee97cf0ca1cb648b3cf5a2794c271c1498be3c29a6a2628bc79a97ea._SX1080_FMjpg_.jpg',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '22', poster: 'https://m.media-amazon.com/images/S/pv-target-images/6e3d145a8f6afac1fdbae4ed7ee98afe2778e8c32f89cc8d1420c7cc76f82d6e.jpg',
      title: 'The Walking Dead',
      duration: '6 episodes',
      rating: 'IMDb 6.8',
      synopsis: 'Set in a city where people come to escape, shield secrets, and bury their pasts, a mysterious outbreak threatens to disrupt what little stability high school guidance counselor Madison Clark and English teacher Travis Manawa have managed to assemble...',
      yearReleased: '2015',
      genres: 'Drama • Horror • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/19f153d47cb2afe89064b141cba6fdaea546083c66b22122a383f7b4371954c5._SX1920_FMwebp_.png',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      trailerUrl: undefined
    },
    {
      id: '23', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53e83bc204a084572f88498d99c4e347eb3d6dbe59507889df26a02133ab9b06.jpg',
      title: 'Sherlock',
      duration: '3 episodes',
      rating: 'IMDb 9.1',
      synopsis: 'Sherlock Holmes and Doctor Watsons adventures arrive in 21st Century London.',
      yearReleased: '2017',
      genres: 'Drama • Suspense • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/bff2ea15ac064d1749a96931161c6e51e5c65ed83dc1a032f4fd55a22ed06e5d._SX1080_FMjpg_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '24', poster: 'https://m.media-amazon.com/images/S/pv-target-images/43005ae192acb38ea8329c507a376cb8da1cce0cc4e03991d6d7935d1bf58647._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Night Sky',
      duration: '8 episodes',
      rating: 'IMDb 7.3',
      synopsis: 'Irene and Franklin York, a retired couple, have a secret: a Chamber buried in their backyard that miraculously leads to a strange, deserted planet. When an enigmatic young man arrives, the Yorks’ quiet existence is upended and the mysterious Chamber they thought they knew so well turns out to be much more than they could have ever imagined. Starring Sissy Spacek and JK Simmons.',
      yearReleased: '2022',
      genres: 'Adventure • Drama • Fantasy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.digitaltrends.com/wp-content/uploads/2022/05/franklin-and-irene-looking-at-the-stars-in-night-sky.jpg?p=1',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '25', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9599b730ec225edaa6010edfdfcb503baa248f916e430616a86deeabe34daf41.jpg',
      title: 'The Exorcist',
      duration: '10 episodes',
      rating: 'IMDb 7.9',
      synopsis: 'A modern reinvention inspired by William Peter Blattys original 1971 book, THE EXORCIST is a propulsive, serialized, psychological thriller.',
      yearReleased: '2016',
      genres: 'Horror • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/41f1b967e7ac06f997fd8e1038547a65418420a960d4ad336508288bacb4b782.png',
      seasons: [1, 2],
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '15', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0bf7a468d1c99af82744edaed5bc4bf6e61a54f953ec19dc5f09feff54fbab38.jpg',
      title: 'The Vampire Diaries',
      duration: '22 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'Think you know vampires? You dont. Neither does Elena (DeGrassi: The Next Generations Nina Dobrev), but shes about to. Paul Wesley (Everwood) and Ian Somerhalder (Lost) star in the series as two vampire brothers at war for her soul.',
      yearReleased: '2009',
      genres: 'Suspense • Horror • Drama • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fa3b16deee8027741182e86e213d18e0a15443452f56f6877d7472e1f48e5d6c._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      trailerUrl: undefined
    },
    {
      id: '16', poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9944343_b_h9_al.jpg',
      title: 'The Originals',
      duration: '22 episodes',
      rating: 'IMDb 8.3',
      synopsis: 'From the executive producer of The Vampire Diaries and simmering with supernatural elements, this sexy new series centers on the Original vampire family, as the dangerous vampire/werewolf hybrid, Klaus (Joseph Morgan), returns to New Orleans — the town he helped build centuries ago — to find his diabolical former protégé, Marcel (Charles Michael Davis), a charismatic vampire, in control.',
      yearReleased: '2014',
      genres: 'Fantasy • Drama • Horror • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a0c53a51c6a97d7e6481f967b781edfcc87857cfb8c48b7c8a67bbd5f453be35._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4, 5],
      trailerUrl: undefined
    },
    {
      id: '17', poster: 'https://m.media-amazon.com/images/S/pv-target-images/82faa7f4a1611633f214de875b81c48a16704831211c85c41e107096d9fece6d.jpg',
      title: 'The Legacies',
      duration: '16 episodes',
      rating: 'IMDb 7.2',
      synopsis: 'The iconic heroes and villains of The Vampire Diaries and The Originals left an enduring legacy of love and family in their wake, which continues in LEGACIES, a thrilling new drama that tells the story of the next generation of supernatural beings at The Salvatore School for the Young and Gifted.',
      yearReleased: '2019',
      genres: 'Fantasy • Horror • Drama • Young Adult Audience',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ac18cbadfc8703823042128a3cac8e4e12d4fcc71ac639e24fb3d1f5307561ce._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '18', poster: 'https://streamondemandathome.com/wp-content/uploads/2023/09/teen_wolf_series.jpg',
      title: 'Teen Wolf',
      duration: '24 episodes',
      rating: 'IMDb 7.7',
      synopsis: 'A single wolf bite changes everything for awkward high school sophomore Scott McCall (Tyler Posey). Now Scott has super-human abilities, but he also soon finds himself being pulled into the middle of a war between werewolves and werewolf hunters!',
      yearReleased: '2017',
      genres: 'Horror • Fantasy • Action • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/2a9dd193e179d0fffd2919250db7167b1d6a8d750a13e70da93688caf2d622d0._SX1920_FMwebp_.png',
      seasons: [1, 2, 3, 4, 5, 6],
      trailerUrl: undefined
    },
    {
      id: '19', poster: 'https://m.media-amazon.com/images/S/pv-target-images/335385d99a99aa14e54816919b91dbdcd510f2402a6e689718273faae35f51a5.jpg',
      title: 'Reign',
      duration: '22 episodes',
      rating: 'IMDb 7.5',
      synopsis: 'Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. The teenage Mary is already a headstrong monarch - beautiful, passionate and poised at the very beginning of her tumultuous rise to power.',
      yearReleased: '2014',
      genres: 'History • Fantasy • Drama • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/1d60d649cac84cdf1d1485b7b673025169b5b093dd969786f56a2e8522b33479._SX1920_FMwebp_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '20', poster: 'https://m.media-amazon.com/images/S/pv-target-images/194486fa124d651e7dd0b83d38495d8648e5c588cb70f33d5f4c7b7971c49078.png',
      title: 'I Know What You Did Last Summer',
      duration: '8 episodes',
      rating: 'IMDb 5.4',
      synopsis: 'In a town full of secrets, a group of teenagers are stalked by a mysterious killer a year after a fatal accident on their graduation night.',
      yearReleased: '2021',
      genres: 'Drama • Horror • Suspense • Mystery',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/05209fd91e61a153aff6f29f5fdffd59781ace61e91d46ca03c6b6b1af7c4234._SX1920_FMwebp_.jpg',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '21', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c3f79be2833b9047ceac3185d1be184af40719476c10aeef14c67166c66d59c6.jpg',
      title: 'The Winchesters',
      duration: '14 episodes',
      rating: 'IMDb 6.2',
      synopsis: 'Before Supernaturals Sam and Dean, there were their parents, John and Mary. Narrated by Dean Winchester (Jensen Ackles), THE WINCHESTERS is the prequel and untold love story of how John Winchester met Mary Campbell. On a mission to trace his father’s past, John meets 19-year-old demon hunter Mary. While secrets run deep for John and Mary, they are determined to uphold their families legacies.',
      yearReleased: '2023',
      genres: 'Fantasy • Horror • Suspense • Action',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ff2d40b5ee97cf0ca1cb648b3cf5a2794c271c1498be3c29a6a2628bc79a97ea._SX1080_FMjpg_.jpg',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '22', poster: 'https://m.media-amazon.com/images/S/pv-target-images/6e3d145a8f6afac1fdbae4ed7ee98afe2778e8c32f89cc8d1420c7cc76f82d6e.jpg',
      title: 'The Walking Dead',
      duration: '6 episodes',
      rating: 'IMDb 6.8',
      synopsis: 'Set in a city where people come to escape, shield secrets, and bury their pasts, a mysterious outbreak threatens to disrupt what little stability high school guidance counselor Madison Clark and English teacher Travis Manawa have managed to assemble...',
      yearReleased: '2015',
      genres: 'Drama • Horror • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/19f153d47cb2afe89064b141cba6fdaea546083c66b22122a383f7b4371954c5._SX1920_FMwebp_.png',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      trailerUrl: undefined
    },
    {
      id: '23', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53e83bc204a084572f88498d99c4e347eb3d6dbe59507889df26a02133ab9b06.jpg',
      title: 'Sherlock',
      duration: '3 episodes',
      rating: 'IMDb 9.1',
      synopsis: 'Sherlock Holmes and Doctor Watsons adventures arrive in 21st Century London.',
      yearReleased: '2017',
      genres: 'Drama • Suspense • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/bff2ea15ac064d1749a96931161c6e51e5c65ed83dc1a032f4fd55a22ed06e5d._SX1080_FMjpg_.jpg',
      seasons: [1, 2, 3, 4],
      trailerUrl: undefined
    },
    {
      id: '24', poster: 'https://m.media-amazon.com/images/S/pv-target-images/43005ae192acb38ea8329c507a376cb8da1cce0cc4e03991d6d7935d1bf58647._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Night Sky',
      duration: '8 episodes',
      rating: 'IMDb 7.3',
      synopsis: 'Irene and Franklin York, a retired couple, have a secret: a Chamber buried in their backyard that miraculously leads to a strange, deserted planet. When an enigmatic young man arrives, the Yorks’ quiet existence is upended and the mysterious Chamber they thought they knew so well turns out to be much more than they could have ever imagined. Starring Sissy Spacek and JK Simmons.',
      yearReleased: '2022',
      genres: 'Adventure • Drama • Fantasy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.digitaltrends.com/wp-content/uploads/2022/05/franklin-and-irene-looking-at-the-stars-in-night-sky.jpg?p=1',
      seasons: [1],
      trailerUrl: undefined
    },
    {
      id: '25', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9599b730ec225edaa6010edfdfcb503baa248f916e430616a86deeabe34daf41.jpg',
      title: 'The Exorcist',
      duration: '10 episodes',
      rating: 'IMDb 7.9',
      synopsis: 'A modern reinvention inspired by William Peter Blattys original 1971 book, THE EXORCIST is a propulsive, serialized, psychological thriller.',
      yearReleased: '2016',
      genres: 'Horror • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/41f1b967e7ac06f997fd8e1038547a65418420a960d4ad336508288bacb4b782.png',
      seasons: [1, 2],
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: '15', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4cb8a608f973c56d600110e6eb4f5138134693e082f7354bc07ee069e4a7e205._BR-6_AC_SX720_FMjpg_.jpg',
      title: 'Sluterra',
      duration: '1 h 45 min',
      rating: 'IMDb 7.5',
      synopsis: 'In a world where mythical creatures and humans coexist, a brave warrior sets out to uncover the secrets of Sluterra.',
      yearReleased: '2023',
      genres: 'Fantasy • Adventure',
      agerating: 'PG-13',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/4cb8a608f973c56d600110e6eb4f5138134693e082f7354bc07ee069e4a7e205._BR-6_AC_SX720_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '16', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7fbd33139fa2fadae20466b94fc213ed60ba848f3a67e18db360fb9fd7ad48ce.jpg',
      title: 'Gortimer Gibbons',
      duration: "22m",
      rating: "IMDb 8.1",
      synopsis: "Gortimer Gibbons and his two best friends navigate the magical and mysterious events of Normal Street.",
      yearReleased: "2014",
      genres: "Family • Adventure",
      agerating: "TV-Y7",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/7fbd33139fa2fadae20466b94fc213ed60ba848f3a67e18db360fb9fd7ad48ce.jpg',
      trailerUrl: undefined
    },
    {
      id: '17', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0682a927b456b717aa350181005c6370c35093ed375dec5255257847c11f8d8d._UR1920,1080_SX720_FMpng_.png',
      title: 'The Kicks',
      duration: "26m",
      rating: "IMDb 7.2",
      synopsis: 'A young soccer player moves to a new town and faces the challenges of fitting in while trying to lead her team to victory.',
      yearReleased: "2015",
      genres: "Family • Sports",
      agerating: "TV-G",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0682a927b456b717aa350181005c6370c35093ed375dec5255257847c11f8d8d._UR1920,1080_SX720_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '18', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fd8b1799a0fa815effb6d76fd869605919fd871e5cd162bd7a04e93d891913f7._UR1920,1080_SX720_FMpng_.png',
      title: 'The Stincy & Dirty Show',
      duration: "23m",
      rating: "IMDb 8.3",
      synopsis: "Best friends Stinky the garbage truck and Dirty the backhoe loader solve problems and have adventures.",
      yearReleased: "2016",
      genres: "Animation • Kids",
      agerating: "TV-Y",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/fd8b1799a0fa815effb6d76fd869605919fd871e5cd162bd7a04e93d891913f7._UR1920,1080_SX720_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '19', poster: 'https://m.media-amazon.com/images/S/pv-target-images/a684f321d5a51f70f6c1a1970ca438dcc4f33531771ec481f642f042ffae5235._UR1920,1080_SX720_FMpng_.png',
      title: 'Worlds First Christmas',
      duration: "1h 30m",
      rating: "IMDb 6.9",
      synopsis: "A heartwarming story about the origins of Christmas traditions and the spirit of giving.",
      yearReleased: "2022",
      genres: "Family • Holiday",
      agerating: "G",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a684f321d5a51f70f6c1a1970ca438dcc4f33531771ec481f642f042ffae5235._UR1920,1080_SX720_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '20', poster: 'https://ntvb.tmsimg.com/assets/p23210354_b_h10_aa.jpg?w=1280&h=720',
      title: 'Dr.Seuss Baking Challenge',
      duration: "45m",
      rating: "IMDb 7.8",
      synopsis: "Contestants create whimsical and delicious creations inspired by Dr. Seuss's beloved stories.",
      yearReleased: "2023",
      genres: "Reality • Competition",
      agerating: "TV-G",
      Agerating: undefined,
      modalPoster: 'https://ntvb.tmsimg.com/assets/p23210354_b_h10_aa.jpg?w=1280&h=720',
      trailerUrl: undefined
    },
    {
      id: '21', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c5a828a3dd1d512f381ee2cbd81d4cdf82336333f9ae37c4199ac2b7318d3283.jpg',
      title: 'Tumble Leef',
      duration: "25m",
      rating: "IMDb 8.5",
      synopsis: "Fig the fox and his friends embark on adventures and explore the wonders of the world around them.",
      yearReleased: "2014",
      genres: "Animation • Kids",
      agerating: "TV-Y",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c5a828a3dd1d512f381ee2cbd81d4cdf82336333f9ae37c4199ac2b7318d3283.jpg',
      trailerUrl: undefined
    },
    {
      id: '22', poster: 'https://ntvb.tmsimg.com/assets/p20532065_b_h8_aa.jpg?w=1280&h=720',
      title: 'Do Re Mi',
      duration: "23m",
      rating: "IMDb 7.7",
      synopsis: "Three bird friends explore the world of music and discover the joy of singing together.",
      yearReleased: "2021",
      genres: "Animation • Kids • Musical",
      agerating: "TV-Y",
      Agerating: undefined,
      modalPoster: 'https://ntvb.tmsimg.com/assets/p20532065_b_h8_aa.jpg?w=1280&h=720',
      trailerUrl: undefined
    },
    {
      id: '23', poster: 'https://m.media-amazon.com/images/S/pv-target-images/e3e79050b873e818ad042b3e587b9837ee80d16298d93cdec3504cae1a22cbfa.jpg',
      title: 'Jessy & Nessy',
      duration: "24m",
      rating: "IMDb 7.4",
      synopsis: "Jessy and her best friend Nessy, a sea monster, go on adventures to explore the world around them.",
      yearReleased: "2020",
      genres: "Animation • Kids",
      agerating: "TV-Y",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/e3e79050b873e818ad042b3e587b9837ee80d16298d93cdec3504cae1a22cbfa.jpg',
      trailerUrl: undefined
    },
    {
      id: '24', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f455714f236324ba6a618a736e3928d8de0decadffa3c9b8255750a01c30615.jpg',
      title: 'Creative Galaxy',
      duration: "22m",
      rating: "IMDb 7.1",
      synopsis: "Arty and his friends travel through the Creative Galaxy solving problems with art.",
      yearReleased: "2013",
      genres: "Animation • Kids • Family",
      agerating: "TV-Y",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9f455714f236324ba6a618a736e3928d8de0decadffa3c9b8255750a01c30615.jpg',
      trailerUrl: undefined
    },
    {
      id: '25', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5319a73638e4ddbaddfe0e5026317aa0f3167a0cfd5ac25872fd1341eff9a97d.jpg',
      title: 'Lost in Oz',
      duration: "30m",
      rating: "IMDb 8.0",
      synopsis: "Dorothy and her dog Toto are transported to a modern-day Oz and must find their way back home.",
      yearReleased: "2015",
      genres: "Animation • Adventure • Family",
      agerating: "TV-Y7",
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/5319a73638e4ddbaddfe0e5026317aa0f3167a0cfd5ac25872fd1341eff9a97d.jpg',
      trailerUrl: undefined
    },
  ],
};


const ComedyMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '26', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5dfe431f34706c7098719686ff9389b44550ced761befe5fcfa41ae9af38995c.jpg',
      title: 'Star',
      duration: '2 h 37 min',
      rating: 'IMDb 6.6',
      synopsis: 'A young mans lifelong dream of becoming an actor, supported by his father, is tested when a tragic accident leaves him unrecognizable and shattered. Amidst love lost and responsibilities abandoned, a new relationship sparks hope. "Star" explores Kalaiarasans journey to reclaim his dreams against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Romance • Sad ',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9947308f3c53bb8bf21443410bea8f7ef2ce611ce8887e702ea3c8746e63d8c5._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '27', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7e25f103214ea7116adf106e3762b591a2b46469377bc310b5983dbeb623a0f4.jpg',
      title: 'Ponniyan Selvan Part 1',
      duration: '2 h 46 min',
      rating: 'IMDb 7.6',
      synopsis: '968 AD, The Chola Empire- A period of conspiracies, mysteries, political turmoil and impending war as Pandiya rebels take an oath to spill royal blood and Chola chieftains plan a mutiny. Will the next king be the wild prince Aditya Karikalan, the hermit prince Arunmozhi Varman, their estranged uncle Madhuranthakan or the Pandiya rebel Amarabujanga?',
      yearReleased: '2022',
      genres: 'Historical • Adventure • Exciting • Serious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://i.ytimg.com/vi/OIM9o3QaVVo/maxresdefault.jpg',
      trailerUrl: undefined
    },
    {
      id: '28', poster: 'https://bbcdn.bollywoodbubble.com/wp-content/uploads/2021/05/yeh-jawaani-hai-deewani-1.jpg',
      title: 'Yeh jawani hai deewani',
      duration: '2 h 40 min',
      rating: 'IMDb 7.2',
      synopsis: 'For Bunny travelling is love, travelling is life. While Naina is a geek, looking for a stable career. Naina meets Bunny and his friends on a trekking trip. Bunnys zeal for life helps her discover a new and confident self. She hopelessly falls in love with Bunny. Bunny loves her too but loves travelling more. Will Bunny choose a happily ever after with Naina or adventure? Watch to find out!',
      yearReleased: '2013',
      genres: 'Romance • Drama •Feel-good',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.masala.com/cloud/2021/08/09/5z8HgWVN-amazingactorsofyehjawaanihaideewani.jpeg',
      trailerUrl: undefined
    },
    {
      id: '29', poster: 'https://i.cdn.newsbytesapp.com/images/l15920230429164852.jpeg',
      title: 'Ponniyan Selvan Part 2',
      duration: '2 h 45 min',
      rating: 'IMDb 7.3',
      synopsis: '968 AD. The Pandyan assassins gather once again to destroy the Chola dynasty. Now the mighty Chola princes must fight the Pandyas, the Rashtrakutas and other Chola enemies who have joined forces. Also, at play are the rumours of Ponniyin Selvan’s death at sea, the powerful Pazhuvettarayar’s betrayal, and the tragic destiny of Aditha Karikalan, whose heart was long lost to the vengeful Nandini.',
      yearReleased: '2023',
      genres: 'Drama • International • Historical • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://content.tupaki.com/twdata/2023/0323/news/First-Single--Aaganande--From--PS-2--Arriving-On-Monday--1679143332-1277.jpg',
      trailerUrl: undefined
    },
    {
      id: '30', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fb23dc40426b492fdc8790c6d6d6e63545dfa7684cced62eab213c7a27a9565e.jpg',
      title: 'Maidaan',
      duration: '2 h 59 min',
      rating: 'IMDb 8.0',
      synopsis: 'Maidaan recounts the true story of India’s greatest football coach from 1952 to 1962. Its about his passion and hard work. Coach Syed Abdul Rahim builds a great team from nothing, facing challenges from the system. Despite this, he leads the team to success in the 1956 Olympics and later in the Asian Games. Its a tale of determination and victory against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Historical • Sports',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/16fd7d1758380f190e3d616cbbba77fbd61475f7abc47b5631344227de744f0c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '31', poster: 'https://m.media-amazon.com/images/S/pv-target-images/20e07311a2535374a54ed66127107ef0fcaf7d48dab411d44a04ee4aee5bf173._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Rocky Aur Rani Kii Prem Kahaani',
      duration: '2 h 58 min',
      rating: 'IMDb 6.5',
      synopsis: 'A rollercoaster journey taking you through an epic love story in a new-age era, topped with hearty laughs and posing questions about love, family and the meaning of breaking away from generations of family traditions in the name of love.',
      yearReleased: '2023',
      genres: 'Comedy • Drama • International • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/736a0e6f337c77d954e77dd9db3093fa9c43e484ce5fca9f3a1303b91e0c33a0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '32', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9367ea63f0651197e1979b695e0db274152f1d84e170a6073bd36843d80d7ec1.jpg',
      title: 'Kalank',
      duration: '2 h 45 min',
      rating: 'IMDb 3.6',
      synopsis: 'Set in 1945, in Pre-Independent India, ‘Kalank’ is the story of a vivid and ethereal world, lost when the fire of Partition engulfs the city and the country. It’s the story of the shades of Reds in their lives as they yearn for hues of love while Husnabad gets soaked in the reds of violence and revenge.',
      yearReleased: '2019',
      genres: 'Drama • Passionate • Edifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static01.nyt.com/images/2019/04/20/arts/00kalank-1/00kalank-1-videoSixteenByNineJumbo1600.jpg',
      trailerUrl: undefined
    },
    {
      id: '33', poster: 'https://m.media-amazon.com/images/S/pv-target-images/66cf7e91c6a81325d075fc87978537b45236098b000576d37887ff78b056b25f.jpg',
      title: 'Jug Jugg Jeeyo',
      duration: '2 h 28 min',
      rating: 'IMDb 6.1',
      synopsis: '“Jug Jugg Jeeyo” is a story set in Patiala that’s about love, laughter, colour and drama. After a lifelong friendship and a 5 year marriage, Kuku and Naina need to tell their family that they want a divorce. However, Kuku’s parents, Bheem and Geeta have other plans set in store for them; all this amidst his sister’s wedding. It’s about family, values, unresolved yearnings and unexpected reunions.',
      yearReleased: '2022',
      genres: 'Comedy • Drama • Romance • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://assets.gqindia.com/photos/62b5b2623c12902127454c6d/master/pass/Jug-Jugg-Jeeyo_top-image-02.jpg',
      trailerUrl: undefined
    },
    {
      id: '34', poster: 'https://m.media-amazon.com/images/S/pv-target-images/473ed7b4b47bdd60a13ce6f612d2e38784f38a271bb9cf1f15a58bb5dd5845bd.jpg',
      title: 'Bawaal',
      duration: '2 h 17 min',
      rating: 'IMDb 6.6',
      synopsis: 'Ajay Dixit, an ordinary history teacher in a high school, enjoys mini celebrityhood in his town courtesy the fake image he has built. He shares a strained relationship with his newly-wed wife. Circumstances force him to take a trip to Europe for the World War 2 trail accompanied by his wife. Will his relationship with his wife survive this trip? Will he manage to win the war within?',
      yearReleased: '2023',
      genres: 'Drama • Action • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/244e95bac5bc1946bb29dfabcec0f91f52c2aec58b15b7721d8a55a50e30bce4._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '35', poster: 'https://resizing.flixster.com/f_yCLl9D0yjgNXDEg8fnZV2Ma1o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12584583_v_h9_ab.jpg',
      title: 'Kapoor and sons',
      duration: '2 h 17 min',
      rating: 'IMDb 7.7',
      synopsis: 'Amarjeet Kapoors dying wish is that his children and grandchildren take a family picture together and have it titled as, Kapoor and Sons- since 1921. What seems to be an easy task turns out much harder than expected when one secret after another about each family member is revealed. Watch to find out if this dysfunctional family can carry out an old mans dying wish.',
      yearReleased: '2016',
      genres: 'Drama • International • Emotional • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/779bc7c7606014fec70ede1e28d768d1d40312383b61a718d871879398d75ade._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '26', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5dfe431f34706c7098719686ff9389b44550ced761befe5fcfa41ae9af38995c.jpg',
      title: 'Star',
      duration: '2 h 37 min',
      rating: 'IMDb 6.6',
      synopsis: 'A young mans lifelong dream of becoming an actor, supported by his father, is tested when a tragic accident leaves him unrecognizable and shattered. Amidst love lost and responsibilities abandoned, a new relationship sparks hope. "Star" explores Kalaiarasans journey to reclaim his dreams against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Romance • Sad ',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9947308f3c53bb8bf21443410bea8f7ef2ce611ce8887e702ea3c8746e63d8c5._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '27', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7e25f103214ea7116adf106e3762b591a2b46469377bc310b5983dbeb623a0f4.jpg',
      title: 'Ponniyan Selvan Part 1',
      duration: '2 h 46 min',
      rating: 'IMDb 7.6',
      synopsis: '968 AD, The Chola Empire- A period of conspiracies, mysteries, political turmoil and impending war as Pandiya rebels take an oath to spill royal blood and Chola chieftains plan a mutiny. Will the next king be the wild prince Aditya Karikalan, the hermit prince Arunmozhi Varman, their estranged uncle Madhuranthakan or the Pandiya rebel Amarabujanga?',
      yearReleased: '2022',
      genres: 'Historical • Adventure • Exciting • Serious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://i.ytimg.com/vi/OIM9o3QaVVo/maxresdefault.jpg',
      trailerUrl: undefined
    },
    {
      id: '28', poster: 'https://bbcdn.bollywoodbubble.com/wp-content/uploads/2021/05/yeh-jawaani-hai-deewani-1.jpg',
      title: 'Yeh jawani hai deewani',
      duration: '2 h 40 min',
      rating: 'IMDb 7.2',
      synopsis: 'For Bunny travelling is love, travelling is life. While Naina is a geek, looking for a stable career. Naina meets Bunny and his friends on a trekking trip. Bunnys zeal for life helps her discover a new and confident self. She hopelessly falls in love with Bunny. Bunny loves her too but loves travelling more. Will Bunny choose a happily ever after with Naina or adventure? Watch to find out!',
      yearReleased: '2013',
      genres: 'Romance • Drama •Feel-good',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.masala.com/cloud/2021/08/09/5z8HgWVN-amazingactorsofyehjawaanihaideewani.jpeg',
      trailerUrl: undefined
    },
    {
      id: '29', poster: 'https://i.cdn.newsbytesapp.com/images/l15920230429164852.jpeg',
      title: 'Ponniyan Selvan Part 2',
      duration: '2 h 45 min',
      rating: 'IMDb 7.3',
      synopsis: '968 AD. The Pandyan assassins gather once again to destroy the Chola dynasty. Now the mighty Chola princes must fight the Pandyas, the Rashtrakutas and other Chola enemies who have joined forces. Also, at play are the rumours of Ponniyin Selvan’s death at sea, the powerful Pazhuvettarayar’s betrayal, and the tragic destiny of Aditha Karikalan, whose heart was long lost to the vengeful Nandini.',
      yearReleased: '2023',
      genres: 'Drama • International • Historical • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://content.tupaki.com/twdata/2023/0323/news/First-Single--Aaganande--From--PS-2--Arriving-On-Monday--1679143332-1277.jpg',
      trailerUrl: undefined
    },
    {
      id: '30', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fb23dc40426b492fdc8790c6d6d6e63545dfa7684cced62eab213c7a27a9565e.jpg',
      title: 'Maidaan',
      duration: '2 h 59 min',
      rating: 'IMDb 8.0',
      synopsis: 'Maidaan recounts the true story of India’s greatest football coach from 1952 to 1962. Its about his passion and hard work. Coach Syed Abdul Rahim builds a great team from nothing, facing challenges from the system. Despite this, he leads the team to success in the 1956 Olympics and later in the Asian Games. Its a tale of determination and victory against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Historical • Sports',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/16fd7d1758380f190e3d616cbbba77fbd61475f7abc47b5631344227de744f0c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '31', poster: 'https://m.media-amazon.com/images/S/pv-target-images/20e07311a2535374a54ed66127107ef0fcaf7d48dab411d44a04ee4aee5bf173._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Rocky Aur Rani Kii Prem Kahaani',
      duration: '2 h 58 min',
      rating: 'IMDb 6.5',
      synopsis: 'A rollercoaster journey taking you through an epic love story in a new-age era, topped with hearty laughs and posing questions about love, family and the meaning of breaking away from generations of family traditions in the name of love.',
      yearReleased: '2023',
      genres: 'Comedy • Drama • International • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/736a0e6f337c77d954e77dd9db3093fa9c43e484ce5fca9f3a1303b91e0c33a0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '32', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9367ea63f0651197e1979b695e0db274152f1d84e170a6073bd36843d80d7ec1.jpg',
      title: 'Kalank',
      duration: '2 h 45 min',
      rating: 'IMDb 3.6',
      synopsis: 'Set in 1945, in Pre-Independent India, ‘Kalank’ is the story of a vivid and ethereal world, lost when the fire of Partition engulfs the city and the country. It’s the story of the shades of Reds in their lives as they yearn for hues of love while Husnabad gets soaked in the reds of violence and revenge.',
      yearReleased: '2019',
      genres: 'Drama • Passionate • Edifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static01.nyt.com/images/2019/04/20/arts/00kalank-1/00kalank-1-videoSixteenByNineJumbo1600.jpg',
      trailerUrl: undefined
    },
    {
      id: '33', poster: 'https://m.media-amazon.com/images/S/pv-target-images/66cf7e91c6a81325d075fc87978537b45236098b000576d37887ff78b056b25f.jpg',
      title: 'Jug Jugg Jeeyo',
      duration: '2 h 28 min',
      rating: 'IMDb 6.1',
      synopsis: '“Jug Jugg Jeeyo” is a story set in Patiala that’s about love, laughter, colour and drama. After a lifelong friendship and a 5 year marriage, Kuku and Naina need to tell their family that they want a divorce. However, Kuku’s parents, Bheem and Geeta have other plans set in store for them; all this amidst his sister’s wedding. It’s about family, values, unresolved yearnings and unexpected reunions.',
      yearReleased: '2022',
      genres: 'Comedy • Drama • Romance • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://assets.gqindia.com/photos/62b5b2623c12902127454c6d/master/pass/Jug-Jugg-Jeeyo_top-image-02.jpg',
      trailerUrl: undefined
    },
    {
      id: '34', poster: 'https://m.media-amazon.com/images/S/pv-target-images/473ed7b4b47bdd60a13ce6f612d2e38784f38a271bb9cf1f15a58bb5dd5845bd.jpg',
      title: 'Bawaal',
      duration: '2 h 17 min',
      rating: 'IMDb 6.6',
      synopsis: 'Ajay Dixit, an ordinary history teacher in a high school, enjoys mini celebrityhood in his town courtesy the fake image he has built. He shares a strained relationship with his newly-wed wife. Circumstances force him to take a trip to Europe for the World War 2 trail accompanied by his wife. Will his relationship with his wife survive this trip? Will he manage to win the war within?',
      yearReleased: '2023',
      genres: 'Drama • Action • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/244e95bac5bc1946bb29dfabcec0f91f52c2aec58b15b7721d8a55a50e30bce4._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '35', poster: 'https://resizing.flixster.com/f_yCLl9D0yjgNXDEg8fnZV2Ma1o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12584583_v_h9_ab.jpg',
      title: 'Kapoor and sons',
      duration: '2 h 17 min',
      rating: 'IMDb 7.7',
      synopsis: 'Amarjeet Kapoors dying wish is that his children and grandchildren take a family picture together and have it titled as, Kapoor and Sons- since 1921. What seems to be an easy task turns out much harder than expected when one secret after another about each family member is revealed. Watch to find out if this dysfunctional family can carry out an old mans dying wish.',
      yearReleased: '2016',
      genres: 'Drama • International • Emotional • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/779bc7c7606014fec70ede1e28d768d1d40312383b61a718d871879398d75ade._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '26', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5dfe431f34706c7098719686ff9389b44550ced761befe5fcfa41ae9af38995c.jpg',
      title: 'Star',
      duration: '2 h 37 min',
      rating: 'IMDb 6.6',
      synopsis: 'A young mans lifelong dream of becoming an actor, supported by his father, is tested when a tragic accident leaves him unrecognizable and shattered. Amidst love lost and responsibilities abandoned, a new relationship sparks hope. "Star" explores Kalaiarasans journey to reclaim his dreams against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Romance • Sad ',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9947308f3c53bb8bf21443410bea8f7ef2ce611ce8887e702ea3c8746e63d8c5._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '27', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7e25f103214ea7116adf106e3762b591a2b46469377bc310b5983dbeb623a0f4.jpg',
      title: 'Ponniyan Selvan Part 1',
      duration: '2 h 46 min',
      rating: 'IMDb 7.6',
      synopsis: '968 AD, The Chola Empire- A period of conspiracies, mysteries, political turmoil and impending war as Pandiya rebels take an oath to spill royal blood and Chola chieftains plan a mutiny. Will the next king be the wild prince Aditya Karikalan, the hermit prince Arunmozhi Varman, their estranged uncle Madhuranthakan or the Pandiya rebel Amarabujanga?',
      yearReleased: '2022',
      genres: 'Historical • Adventure • Exciting • Serious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://i.ytimg.com/vi/OIM9o3QaVVo/maxresdefault.jpg',
      trailerUrl: undefined
    },
    {
      id: '28', poster: 'https://bbcdn.bollywoodbubble.com/wp-content/uploads/2021/05/yeh-jawaani-hai-deewani-1.jpg',
      title: 'Yeh jawani hai deewani',
      duration: '2 h 40 min',
      rating: 'IMDb 7.2',
      synopsis: 'For Bunny travelling is love, travelling is life. While Naina is a geek, looking for a stable career. Naina meets Bunny and his friends on a trekking trip. Bunnys zeal for life helps her discover a new and confident self. She hopelessly falls in love with Bunny. Bunny loves her too but loves travelling more. Will Bunny choose a happily ever after with Naina or adventure? Watch to find out!',
      yearReleased: '2013',
      genres: 'Romance • Drama •Feel-good',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.masala.com/cloud/2021/08/09/5z8HgWVN-amazingactorsofyehjawaanihaideewani.jpeg',
      trailerUrl: undefined
    },
    {
      id: '29', poster: 'https://i.cdn.newsbytesapp.com/images/l15920230429164852.jpeg',
      title: 'Ponniyan Selvan Part 2',
      duration: '2 h 45 min',
      rating: 'IMDb 7.3',
      synopsis: '968 AD. The Pandyan assassins gather once again to destroy the Chola dynasty. Now the mighty Chola princes must fight the Pandyas, the Rashtrakutas and other Chola enemies who have joined forces. Also, at play are the rumours of Ponniyin Selvan’s death at sea, the powerful Pazhuvettarayar’s betrayal, and the tragic destiny of Aditha Karikalan, whose heart was long lost to the vengeful Nandini.',
      yearReleased: '2023',
      genres: 'Drama • International • Historical • Adventure',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://content.tupaki.com/twdata/2023/0323/news/First-Single--Aaganande--From--PS-2--Arriving-On-Monday--1679143332-1277.jpg',
      trailerUrl: undefined
    },
    {
      id: '30', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fb23dc40426b492fdc8790c6d6d6e63545dfa7684cced62eab213c7a27a9565e.jpg',
      title: 'Maidaan',
      duration: '2 h 59 min',
      rating: 'IMDb 8.0',
      synopsis: 'Maidaan recounts the true story of India’s greatest football coach from 1952 to 1962. Its about his passion and hard work. Coach Syed Abdul Rahim builds a great team from nothing, facing challenges from the system. Despite this, he leads the team to success in the 1956 Olympics and later in the Asian Games. Its a tale of determination and victory against all odds.',
      yearReleased: '2024',
      genres: 'Drama • Historical • Sports',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/16fd7d1758380f190e3d616cbbba77fbd61475f7abc47b5631344227de744f0c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '31', poster: 'https://m.media-amazon.com/images/S/pv-target-images/20e07311a2535374a54ed66127107ef0fcaf7d48dab411d44a04ee4aee5bf173._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Rocky Aur Rani Kii Prem Kahaani',
      duration: '2 h 58 min',
      rating: 'IMDb 6.5',
      synopsis: 'A rollercoaster journey taking you through an epic love story in a new-age era, topped with hearty laughs and posing questions about love, family and the meaning of breaking away from generations of family traditions in the name of love.',
      yearReleased: '2023',
      genres: 'Comedy • Drama • International • Romance',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/736a0e6f337c77d954e77dd9db3093fa9c43e484ce5fca9f3a1303b91e0c33a0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '32', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9367ea63f0651197e1979b695e0db274152f1d84e170a6073bd36843d80d7ec1.jpg',
      title: 'Kalank',
      duration: '2 h 45 min',
      rating: 'IMDb 3.6',
      synopsis: 'Set in 1945, in Pre-Independent India, ‘Kalank’ is the story of a vivid and ethereal world, lost when the fire of Partition engulfs the city and the country. It’s the story of the shades of Reds in their lives as they yearn for hues of love while Husnabad gets soaked in the reds of violence and revenge.',
      yearReleased: '2019',
      genres: 'Drama • Passionate • Edifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static01.nyt.com/images/2019/04/20/arts/00kalank-1/00kalank-1-videoSixteenByNineJumbo1600.jpg',
      trailerUrl: undefined
    },
    {
      id: '33', poster: 'https://m.media-amazon.com/images/S/pv-target-images/66cf7e91c6a81325d075fc87978537b45236098b000576d37887ff78b056b25f.jpg',
      title: 'Jug Jugg Jeeyo',
      duration: '2 h 28 min',
      rating: 'IMDb 6.1',
      synopsis: '“Jug Jugg Jeeyo” is a story set in Patiala that’s about love, laughter, colour and drama. After a lifelong friendship and a 5 year marriage, Kuku and Naina need to tell their family that they want a divorce. However, Kuku’s parents, Bheem and Geeta have other plans set in store for them; all this amidst his sister’s wedding. It’s about family, values, unresolved yearnings and unexpected reunions.',
      yearReleased: '2022',
      genres: 'Comedy • Drama • Romance • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://assets.gqindia.com/photos/62b5b2623c12902127454c6d/master/pass/Jug-Jugg-Jeeyo_top-image-02.jpg',
      trailerUrl: undefined
    },
    {
      id: '34', poster: 'https://m.media-amazon.com/images/S/pv-target-images/473ed7b4b47bdd60a13ce6f612d2e38784f38a271bb9cf1f15a58bb5dd5845bd.jpg',
      title: 'Bawaal',
      duration: '2 h 17 min',
      rating: 'IMDb 6.6',
      synopsis: 'Ajay Dixit, an ordinary history teacher in a high school, enjoys mini celebrityhood in his town courtesy the fake image he has built. He shares a strained relationship with his newly-wed wife. Circumstances force him to take a trip to Europe for the World War 2 trail accompanied by his wife. Will his relationship with his wife survive this trip? Will he manage to win the war within?',
      yearReleased: '2023',
      genres: 'Drama • Action • International',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/244e95bac5bc1946bb29dfabcec0f91f52c2aec58b15b7721d8a55a50e30bce4._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '35', poster: 'https://resizing.flixster.com/f_yCLl9D0yjgNXDEg8fnZV2Ma1o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12584583_v_h9_ab.jpg',
      title: 'Kapoor and sons',
      duration: '2 h 17 min',
      rating: 'IMDb 7.7',
      synopsis: 'Amarjeet Kapoors dying wish is that his children and grandchildren take a family picture together and have it titled as, Kapoor and Sons- since 1921. What seems to be an easy task turns out much harder than expected when one secret after another about each family member is revealed. Watch to find out if this dysfunctional family can carry out an old mans dying wish.',
      yearReleased: '2016',
      genres: 'Drama • International • Emotional • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/779bc7c7606014fec70ede1e28d768d1d40312383b61a718d871879398d75ade._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: "26", poster: "https://m.media-amazon.com/images/S/pv-target-images/0ebd8f332730f13520f6183461a47fc5a1a67c6e01330f97ae3d55005b535c42.jpg",
      title: "Return of Hanuman",
      duration: "1h 35m",
      rating: "IMDb 4.5",
      synopsis: "Hanuman returns to Earth to fight evil forces.",
      yearReleased: "2007",
      genres: "Animation • Action • Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/0ebd8f332730f13520f6183461a47fc5a1a67c6e01330f97ae3d55005b535c42.jpg",
      trailerUrl: undefined
    },
    {
      id: "27", poster: "https://m.media-amazon.com/images/S/pv-target-images/fc091db5fc7477796b4ab8b7dc48e536ad60cb859b596df002f6785ee4a00039.jpg",
      title: "Super Simple",
      duration: "30m",
      rating: "IMDb 4.8",
      synopsis: "A series of simple and fun educational videos for kids.",
      yearReleased: "2018",
      genres: "Educational • Kids",
      agerating: "G",
      Agerating: "G",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/fc091db5fc7477796b4ab8b7dc48e536ad60cb859b596df002f6785ee4a00039.jpg",
      trailerUrl: undefined
    },
    {
      id: "28", poster: "https://m.media-amazon.com/images/S/pv-target-images/93016a1a187be3fb454d49b26f4c7479d1b0407728902e391ea8a5b383a6bf81.jpg",
      title: "Honey Bunny in Haunted House",
      duration: "1h 10m",
      rating: "IMDb 4.2",
      synopsis: "Honey and Bunny find themselves in a spooky haunted house.",
      yearReleased: "2020",
      genres: "Animation • Comedy • Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/93016a1a187be3fb454d49b26f4c7479d1b0407728902e391ea8a5b383a6bf81.jpg",
      trailerUrl: undefined
    },
    {
      "id": "29", poster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00009697-tmzpqdqrur-landscape.jpg",
      title: "Chhota Bheem & The Curse of Damyaan",
      duration: "1h 25m",
      rating: "IMDb 4.3",
      synopsis: "Chhota Bheem and his friends must defeat the evil Damyaan.",
      yearReleased: "2012",
      genres: "Animation • Fantasy • Action",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00009697-tmzpqdqrur-landscape.jpg",
      trailerUrl: undefined
    },
    {
      "id": "30", poster: "https://m.media-amazon.com/images/S/pv-target-images/b8ff8beec4098b96d3c0c74b000bd44f615322954b86adaf182cf823ecd4c27a.jpg",
      title: "Bheemayan",
      duration: "1h 20m",
      rating: "IMDb 4.4",
      synopsis: "A journey with Chhota Bheem inspired by the Ramayana.",
      yearReleased: "2013",
      genres: "Animation • Mythology • Action",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/b8ff8beec4098b96d3c0c74b000bd44f615322954b86adaf182cf823ecd4c27a.jpg",
      trailerUrl: undefined
    },
    {
      id: "31", poster: "https://m.media-amazon.com/images/S/pv-target-images/cc69b26fadc32a6d0a6fd34dcaadf887acd5ff18122dec3bc5359eeb09ff82b6.jpg",
      title: "Boss Baby",
      duration: "1h 37m",
      rating: "IMDb 4.7",
      synopsis: "A young boy and his suit-wearing baby brother team up to stop the evil plot of the CEO of Puppy Co.",
      yearReleased: "2017",
      genres: "Animation • Comedy • Family",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/cc69b26fadc32a6d0a6fd34dcaadf887acd5ff18122dec3bc5359eeb09ff82b6.jpg",
      trailerUrl: undefined
    },
    {
      id: "32", poster: "https://www.dreamworks.com/storage/cms-uploads/boss-baby-2-seo-share2.jpg",
      title: "Boss Baby 2",
      duration: "1h 45m",
      rating: "IMDb 4.6",
      synopsis: "The Templeton brothers are back and must work together to thwart a new evil plot.",
      yearReleased: "2021",
      genres: "Animation • Comedy • Family",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://www.dreamworks.com/storage/cms-uploads/boss-baby-2-seo-share2.jpg",
      trailerUrl: undefined
    },
    {
      id: "33", poster: "https://pbs.twimg.com/media/EYFV0ysWAAAcLFk.jpg:large",
      title: "Scoob",
      duration: "1h 34m",
      rating: "IMDb 4.3",
      synopsis: "Scooby and the gang face their biggest, most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world.",
      yearReleased: "2020",
      genres: "Animation • Comedy • Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://pbs.twimg.com/media/EYFV0ysWAAAcLFk.jpg:large",
      trailerUrl: undefined
    },
    {
      id: "34", poster: "https://image-resizer-cloud-api.akamaized.net/image/75611D23-1473-4CFF-AB22-6EDA2F3A76B3/0-16x9.jpg?width=1920&updatedTime=2024-06-28T00:48:40Z&dt=Web",
      title: "Kalvakra Returns",
      duration: "1h 30m",
      rating: "IMDb 4.5",
      synopsis: "A thrilling adventure where Kalvakra returns to claim his revenge.",
      yearReleased: "2024",
      genres: "Animation • Action • Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://image-resizer-cloud-api.akamaized.net/image/75611D23-1473-4CFF-AB22-6EDA2F3A76B3/0-16x9.jpg?width=1920&updatedTime=2024-06-28T00:48:40Z&dt=Web",
      trailerUrl: undefined
    },
    {
      id: "35", poster: "https://m.media-amazon.com/images/S/pv-target-images/9098439d79b770d4887cf2b5aa54faa8184ea38724fdf89ba7c0021f9097c8f6.jpg",
      title: "Bal Ganesh 2",
      duration: "1h 20m",
      rating: "IMDb 4.3",
      synopsis: "The adventures of young Lord Ganesh continue.",
      yearReleased: "2009",
      genres: "Animation • Mythology • Family",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/9098439d79b770d4887cf2b5aa54faa8184ea38724fdf89ba7c0021f9097c8f6.jpg",
      trailerUrl: undefined
    },
  ],
};


const DramaMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '36', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b6d53902ea67b8d211ea46ebb5ba7358a307b156415c241e27300c6e5d860e1c.jpg',
      title: 'Iron Man 2',
      duration: '2h',
      rating: 'IMDb 6.9',
      synopsis: 'Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a mad man out to kill him with his own technology, but theres something more, he is dying.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Inspiring',
      agerating: 'U/A 13+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/01608dd1d7bce69d1315e2d9eae8d503bb19ffdf8736728cdab0a7c043cbdc48._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '37', poster: 'https://www.mumbailive.com/images/media/images/vijay_the_master_1615793914771.jpg?bg=0f0d0e&crop=1280%2C720%2C0%2C0&fit=fill&fm=webp&h=606.3157894736842&height=720&w=1080&width=1280',
      title: 'Master',
      duration: '2 h 57 min',
      rating: 'IMDb 7.4',
      synopsis: 'The film Master is about JD a Personality Development professor. He is addicted to alcohol due to depression. There comes a moment that forces him to leave the college and go work as a teacher at Juvenile for a few months. As JD spends time, he comes to understand that the youngsters of the detention home are being exploited by a deadly gangster Bhavani by pushing these young minds into addiction.',
      yearReleased: '2021',
      genres: 'Action • Suspense • Emotional ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0ce6f2de4d4d41f929d71b0199857a1077ed0b39367c61bee06fdf7853237449.jpg',
      trailerUrl: undefined
    },
    {
      id: '38', poster: 'https://images.indianexpress.com/2019/08/saaho-759-2.jpeg',
      title: 'Saaho',
      duration: '2 h 49 min',
      rating: 'IMDb 5.0',
      synopsis: 'After many innocents become scapegoats in a mind boggling robbery, an undercover super cop is summoned to the city. While the investigation progresses, dark secrets about one of the biggest mafias of the world surfaces but with a bundle of mysteries attached.',
      yearReleased: '2019',
      genres: 'Suspense • Action • Ambitious • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://media.gqindia.com/wp-content/uploads/2020/10/Saaho.jpg',
      trailerUrl: undefined
    },
    {
      id: '39', poster: 'https://m.media-amazon.com/images/S/pv-target-images/8165adf0fe3e1f9b1e9fa46fcb46c32866a1802acb894a1e830b8d28103815e1.jpg',
      title: 'Dear Comrade',
      duration: '2 h 47 min',
      rating: 'IMDb 7.3',
      synopsis: 'Dear Comrade is an intense love story between Bobby (Vijay Deverakonda), a student union leader and Lily (Rashmika Mandanna) a state-level cricketer. Bobby has anger management issues, which he needs to overcome and fight for his love. Similar movie: Premalu',
      yearReleased: '2019',
      genres: 'Action • Emotional • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://baradwajrangan.wordpress.com/wp-content/uploads/2019/07/dear-comrade-music-review-a-out-and-out-classy-and-thematic-album-min-1.jpg',
      trailerUrl: undefined
    },
    {
      id: '40', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fcc2083425f15896dbf6d776a9bca1ec50b83f1da0fded49837624869a975741.jpg',
      title: 'The Witch: Part 1 - The Subversion',
      duration: '2h',
      rating: 'IMDb 7.1',
      synopsis: 'A high school student with amnesia tries to uncover what has happened to her. All leading her into deeper troubles ultimately revealing a darkness she could not have imagined.',
      yearReleased: '2018',
      genres: 'Suspense • Serious • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/47e770a0a2b9ed0c0b8f7089515c475fcd6a8da77be20801432caa34800f612a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '41', poster: 'https://fossbytes.com/wp-content/uploads/2021/12/unnamed__1_.0.jpeg',
      title: 'Spiderman no way home',
      duration: '2h 28 min',
      rating: 'IMDb 8.2',
      synopsis: 'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      yearReleased: '2021',
      genres: 'Action • Adventure • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/3c219177ecd26d1452bf8f61c6c9dee016d685a723f511497afd88d9d51d6412._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '42', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bdcf5c04453228b6492bce0366ac248c817c2fa14b0c7604625b0d7bca779dc5.jpg',
      title: 'Iron Man',
      duration: '2 h 6 min',
      rating: 'IMDb 7.9',
      synopsis: 'After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man.',
      yearReleased: '2008',
      genres: 'Action • Adventure • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/22bcdc3f0733c0a90d6a3459d81c74917e4be3632c8cfe166486d7f7783387b0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '43', poster: 'https://m.media-amazon.com/images/S/pv-target-images/05be32e45305f6000e673b96badcdfd60302f77d29ae350f17dd6044be5f57ee.jpg',
      title: 'Avengers: Endgame',
      duration: '3 h 3 min',
      rating: 'IMDb 8.4',
      synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      yearReleased: '2019',
      genres: 'Action • Fantasy • Ambitious • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/56d93e04df43a733cb47d17daac4a8803b254fdaa3bf0dfad9ae8ce4d6e20f6c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '44', poster: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/mahaan-1643020513.jpg',
      title: 'Mahaan',
      duration: '2 h 42 min',
      rating: 'IMDb 7.6',
      synopsis: 'Mahaan follows the turbulent journey of a middle-aged simple man, who later becomes a pride billionaire, followed by unexpected haywire challenges he starts to face soon after.',
      yearReleased: '2022',
      genres: 'Drama • Action • Serious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/M/MV5BZDI3OGZlNjktYzA2Zi00NGMxLWIwNjQtZDNlZjliYTQ2OGY0XkEyXkFqcGdeQXVyMjQwMDkwNTQ@._V1_.jpg',
      trailerUrl: undefined
    },
    {
      id: '45', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0ffc8aaff9c98549641b706035981be3f257d91f5e4519f8788b2fb7490ce74e.jpg',
      title: 'KGF Chapter 2',
      duration: '2 h 45 min',
      rating: 'IMDb 8.3',
      synopsis: 'Vijendra Ingalgi, Son of Anand Ingalgi continues the story of KGF and Rocky in Chapter 2. Rocky survives the attack by Vanaram’s guards after killing Garuda. He is a hero and a saviour to the people of Narachi. While trying to fulfil his promise to his mother, he must face many obstacles in the form of Adheera, Inayat Khalil and Ramika sen.',
      yearReleased: '2022',
      genres: 'Action • Drama • International • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.indianexpress.com/2022/04/kgf-2-1200.jpeg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '36', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b6d53902ea67b8d211ea46ebb5ba7358a307b156415c241e27300c6e5d860e1c.jpg',
      title: 'Iron Man 2',
      duration: '2h',
      rating: 'IMDb 6.9',
      synopsis: 'Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a mad man out to kill him with his own technology, but theres something more, he is dying.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Inspiring',
      agerating: 'U/A 13+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/01608dd1d7bce69d1315e2d9eae8d503bb19ffdf8736728cdab0a7c043cbdc48._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '37', poster: 'https://www.mumbailive.com/images/media/images/vijay_the_master_1615793914771.jpg?bg=0f0d0e&crop=1280%2C720%2C0%2C0&fit=fill&fm=webp&h=606.3157894736842&height=720&w=1080&width=1280',
      title: 'Master',
      duration: '2 h 57 min',
      rating: 'IMDb 7.4',
      synopsis: 'The film Master is about JD a Personality Development professor. He is addicted to alcohol due to depression. There comes a moment that forces him to leave the college and go work as a teacher at Juvenile for a few months. As JD spends time, he comes to understand that the youngsters of the detention home are being exploited by a deadly gangster Bhavani by pushing these young minds into addiction.',
      yearReleased: '2021',
      genres: 'Action • Suspense • Emotional ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0ce6f2de4d4d41f929d71b0199857a1077ed0b39367c61bee06fdf7853237449.jpg',
      trailerUrl: undefined
    },
    {
      id: '38', poster: 'https://images.indianexpress.com/2019/08/saaho-759-2.jpeg',
      title: 'Saaho',
      duration: '2 h 49 min',
      rating: 'IMDb 5.0',
      synopsis: 'After many innocents become scapegoats in a mind boggling robbery, an undercover super cop is summoned to the city. While the investigation progresses, dark secrets about one of the biggest mafias of the world surfaces but with a bundle of mysteries attached.',
      yearReleased: '2019',
      genres: 'Suspense • Action • Ambitious • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://media.gqindia.com/wp-content/uploads/2020/10/Saaho.jpg',
      trailerUrl: undefined
    },
    {
      id: '39', poster: 'https://m.media-amazon.com/images/S/pv-target-images/8165adf0fe3e1f9b1e9fa46fcb46c32866a1802acb894a1e830b8d28103815e1.jpg',
      title: 'Dear Comrade',
      duration: '2 h 47 min',
      rating: 'IMDb 7.3',
      synopsis: 'Dear Comrade is an intense love story between Bobby (Vijay Deverakonda), a student union leader and Lily (Rashmika Mandanna) a state-level cricketer. Bobby has anger management issues, which he needs to overcome and fight for his love. Similar movie: Premalu',
      yearReleased: '2019',
      genres: 'Action • Emotional • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://baradwajrangan.wordpress.com/wp-content/uploads/2019/07/dear-comrade-music-review-a-out-and-out-classy-and-thematic-album-min-1.jpg',
      trailerUrl: undefined
    },
    {
      id: '40', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fcc2083425f15896dbf6d776a9bca1ec50b83f1da0fded49837624869a975741.jpg',
      title: 'The Witch: Part 1 - The Subversion',
      duration: '2h',
      rating: 'IMDb 7.1',
      synopsis: 'A high school student with amnesia tries to uncover what has happened to her. All leading her into deeper troubles ultimately revealing a darkness she could not have imagined.',
      yearReleased: '2018',
      genres: 'Suspense • Serious • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/47e770a0a2b9ed0c0b8f7089515c475fcd6a8da77be20801432caa34800f612a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '41', poster: 'https://fossbytes.com/wp-content/uploads/2021/12/unnamed__1_.0.jpeg',
      title: 'Spiderman no way home',
      duration: '2h 28 min',
      rating: 'IMDb 8.2',
      synopsis: 'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      yearReleased: '2021',
      genres: 'Action • Adventure • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/3c219177ecd26d1452bf8f61c6c9dee016d685a723f511497afd88d9d51d6412._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '42', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bdcf5c04453228b6492bce0366ac248c817c2fa14b0c7604625b0d7bca779dc5.jpg',
      title: 'Iron Man',
      duration: '2 h 6 min',
      rating: 'IMDb 7.9',
      synopsis: 'After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man.',
      yearReleased: '2008',
      genres: 'Action • Adventure • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/22bcdc3f0733c0a90d6a3459d81c74917e4be3632c8cfe166486d7f7783387b0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '43', poster: 'https://m.media-amazon.com/images/S/pv-target-images/05be32e45305f6000e673b96badcdfd60302f77d29ae350f17dd6044be5f57ee.jpg',
      title: 'Avengers: Endgame',
      duration: '3 h 3 min',
      rating: 'IMDb 8.4',
      synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      yearReleased: '2019',
      genres: 'Action • Fantasy • Ambitious • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/56d93e04df43a733cb47d17daac4a8803b254fdaa3bf0dfad9ae8ce4d6e20f6c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '44', poster: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/mahaan-1643020513.jpg',
      title: 'Mahaan',
      duration: '2 h 42 min',
      rating: 'IMDb 7.6',
      synopsis: 'Mahaan follows the turbulent journey of a middle-aged simple man, who later becomes a pride billionaire, followed by unexpected haywire challenges he starts to face soon after.',
      yearReleased: '2022',
      genres: 'Drama • Action • Serious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/M/MV5BZDI3OGZlNjktYzA2Zi00NGMxLWIwNjQtZDNlZjliYTQ2OGY0XkEyXkFqcGdeQXVyMjQwMDkwNTQ@._V1_.jpg',
      trailerUrl: undefined
    },
    {
      id: '45', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0ffc8aaff9c98549641b706035981be3f257d91f5e4519f8788b2fb7490ce74e.jpg',
      title: 'KGF Chapter 2',
      duration: '2 h 45 min',
      rating: 'IMDb 8.3',
      synopsis: 'Vijendra Ingalgi, Son of Anand Ingalgi continues the story of KGF and Rocky in Chapter 2. Rocky survives the attack by Vanaram’s guards after killing Garuda. He is a hero and a saviour to the people of Narachi. While trying to fulfil his promise to his mother, he must face many obstacles in the form of Adheera, Inayat Khalil and Ramika sen.',
      yearReleased: '2022',
      genres: 'Action • Drama • International • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.indianexpress.com/2022/04/kgf-2-1200.jpeg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '36', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b6d53902ea67b8d211ea46ebb5ba7358a307b156415c241e27300c6e5d860e1c.jpg',
      title: 'Iron Man 2',
      duration: '2h',
      rating: 'IMDb 6.9',
      synopsis: 'Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a mad man out to kill him with his own technology, but theres something more, he is dying.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Inspiring',
      agerating: 'U/A 13+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/01608dd1d7bce69d1315e2d9eae8d503bb19ffdf8736728cdab0a7c043cbdc48._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '37', poster: 'https://www.mumbailive.com/images/media/images/vijay_the_master_1615793914771.jpg?bg=0f0d0e&crop=1280%2C720%2C0%2C0&fit=fill&fm=webp&h=606.3157894736842&height=720&w=1080&width=1280',
      title: 'Master',
      duration: '2 h 57 min',
      rating: 'IMDb 7.4',
      synopsis: 'The film Master is about JD a Personality Development professor. He is addicted to alcohol due to depression. There comes a moment that forces him to leave the college and go work as a teacher at Juvenile for a few months. As JD spends time, he comes to understand that the youngsters of the detention home are being exploited by a deadly gangster Bhavani by pushing these young minds into addiction.',
      yearReleased: '2021',
      genres: 'Action • Suspense • Emotional ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0ce6f2de4d4d41f929d71b0199857a1077ed0b39367c61bee06fdf7853237449.jpg',
      trailerUrl: undefined
    },
    {
      id: '38', poster: 'https://images.indianexpress.com/2019/08/saaho-759-2.jpeg',
      title: 'Saaho',
      duration: '2 h 49 min',
      rating: 'IMDb 5.0',
      synopsis: 'After many innocents become scapegoats in a mind boggling robbery, an undercover super cop is summoned to the city. While the investigation progresses, dark secrets about one of the biggest mafias of the world surfaces but with a bundle of mysteries attached.',
      yearReleased: '2019',
      genres: 'Suspense • Action • Ambitious • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://media.gqindia.com/wp-content/uploads/2020/10/Saaho.jpg',
      trailerUrl: undefined
    },
    {
      id: '39', poster: 'https://m.media-amazon.com/images/S/pv-target-images/8165adf0fe3e1f9b1e9fa46fcb46c32866a1802acb894a1e830b8d28103815e1.jpg',
      title: 'Dear Comrade',
      duration: '2 h 47 min',
      rating: 'IMDb 7.3',
      synopsis: 'Dear Comrade is an intense love story between Bobby (Vijay Deverakonda), a student union leader and Lily (Rashmika Mandanna) a state-level cricketer. Bobby has anger management issues, which he needs to overcome and fight for his love. Similar movie: Premalu',
      yearReleased: '2019',
      genres: 'Action • Emotional • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://baradwajrangan.wordpress.com/wp-content/uploads/2019/07/dear-comrade-music-review-a-out-and-out-classy-and-thematic-album-min-1.jpg',
      trailerUrl: undefined
    },
    {
      id: '40', poster: 'https://m.media-amazon.com/images/S/pv-target-images/fcc2083425f15896dbf6d776a9bca1ec50b83f1da0fded49837624869a975741.jpg',
      title: 'The Witch: Part 1 - The Subversion',
      duration: '2h',
      rating: 'IMDb 7.1',
      synopsis: 'A high school student with amnesia tries to uncover what has happened to her. All leading her into deeper troubles ultimately revealing a darkness she could not have imagined.',
      yearReleased: '2018',
      genres: 'Suspense • Serious • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/47e770a0a2b9ed0c0b8f7089515c475fcd6a8da77be20801432caa34800f612a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '41', poster: 'https://fossbytes.com/wp-content/uploads/2021/12/unnamed__1_.0.jpeg',
      title: 'Spiderman no way home',
      duration: '2h 28 min',
      rating: 'IMDb 8.2',
      synopsis: 'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      yearReleased: '2021',
      genres: 'Action • Adventure • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/3c219177ecd26d1452bf8f61c6c9dee016d685a723f511497afd88d9d51d6412._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '42', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bdcf5c04453228b6492bce0366ac248c817c2fa14b0c7604625b0d7bca779dc5.jpg',
      title: 'Iron Man',
      duration: '2 h 6 min',
      rating: 'IMDb 7.9',
      synopsis: 'After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man.',
      yearReleased: '2008',
      genres: 'Action • Adventure • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/22bcdc3f0733c0a90d6a3459d81c74917e4be3632c8cfe166486d7f7783387b0._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '43', poster: 'https://m.media-amazon.com/images/S/pv-target-images/05be32e45305f6000e673b96badcdfd60302f77d29ae350f17dd6044be5f57ee.jpg',
      title: 'Avengers: Endgame',
      duration: '3 h 3 min',
      rating: 'IMDb 8.4',
      synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      yearReleased: '2019',
      genres: 'Action • Fantasy • Ambitious • Fun',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/56d93e04df43a733cb47d17daac4a8803b254fdaa3bf0dfad9ae8ce4d6e20f6c._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '44', poster: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/mahaan-1643020513.jpg',
      title: 'Mahaan',
      duration: '2 h 42 min',
      rating: 'IMDb 7.6',
      synopsis: 'Mahaan follows the turbulent journey of a middle-aged simple man, who later becomes a pride billionaire, followed by unexpected haywire challenges he starts to face soon after.',
      yearReleased: '2022',
      genres: 'Drama • Action • Serious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/M/MV5BZDI3OGZlNjktYzA2Zi00NGMxLWIwNjQtZDNlZjliYTQ2OGY0XkEyXkFqcGdeQXVyMjQwMDkwNTQ@._V1_.jpg',
      trailerUrl: undefined
    },
    {
      id: '45', poster: 'https://m.media-amazon.com/images/S/pv-target-images/0ffc8aaff9c98549641b706035981be3f257d91f5e4519f8788b2fb7490ce74e.jpg',
      title: 'KGF Chapter 2',
      duration: '2 h 45 min',
      rating: 'IMDb 8.3',
      synopsis: 'Vijendra Ingalgi, Son of Anand Ingalgi continues the story of KGF and Rocky in Chapter 2. Rocky survives the attack by Vanaram’s guards after killing Garuda. He is a hero and a saviour to the people of Narachi. While trying to fulfil his promise to his mother, he must face many obstacles in the form of Adheera, Inayat Khalil and Ramika sen.',
      yearReleased: '2022',
      genres: 'Action • Drama • International • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.indianexpress.com/2022/04/kgf-2-1200.jpeg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: '36', poster: 'https://m.media-amazon.com/images/S/pv-target-images/08c586642c8f79ca81f4d264880aff1d22fa99a935c4aa08701e6f97b4ced9c2.jpg',
      title: 'Dangerous Book for Boys',
      duration: '1h 30m',
      rating: 'IMDb 7.5',
      synopsis: 'A story about three brothers who reconnect with their deceased father through a book he left behind.',
      yearReleased: '2018',
      genres: 'Comedy • Family',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/08c586642c8f79ca81f4d264880aff1d22fa99a935c4aa08701e6f97b4ced9c2.jpg',
      trailerUrl: undefined
    },
    {
      id: '37', poster: 'https://m.media-amazon.com/images/S/pv-target-images/f3cbd9ff83ca0adbad254cee3d2a834b5bced1babe665d7d101a872958763726.jpg',
      title: 'Selfie with Bajrangi',
      duration: '1h 45m',
      rating: 'IMDb 8.2',
      synopsis: 'A fun adventure of a boy who meets his hero, Bajrangi, and the duo embarks on exciting missions.',
      yearReleased: '2017',
      genres: 'Adventure • Animation',
      agerating: 'U',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/f3cbd9ff83ca0adbad254cee3d2a834b5bced1babe665d7d101a872958763726.jpg',
      trailerUrl: undefined
    },
    {
      id: '38',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/79381777a770d151e6521ca8148d3510de7eee8a09f82b835f70a966a7b03b4a.jpg',
      title: 'Go Diego Go',
      duration: '25m per episode',
      rating: 'IMDb 6.3',
      synopsis: 'Diego, a young animal rescuer, goes on various adventures to save animals in trouble.',
      yearReleased: '2005',
      genres: 'Animation • Family',
      agerating: 'TV-Y',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/79381777a770d151e6521ca8148d3510de7eee8a09f82b835f70a966a7b03b4a.jpg',
      trailerUrl: undefined
    },
    {
      id: '39',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/d82f60e284fb993cd3351ad234f9ff155abbe4de2aa152e4e4b040649c878a24.jpg',
      title: 'Thunder Birds',
      duration: '2h',
      rating: 'IMDb 7.0',
      synopsis: 'A thrilling adventure of a team of heroes saving the world from various dangers.',
      yearReleased: '2004',
      genres: 'Action • Adventure',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d82f60e284fb993cd3351ad234f9ff155abbe4de2aa152e4e4b040649c878a24.jpg',
      trailerUrl: undefined
    },
    {
      id: '40',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/66e5d822030723328aa571544433796e59104099f726e28d34dbf6bf01391871.jpg',
      title: 'Lost in Oz',
      duration: '30m per episode',
      rating: 'IMDb 7.6',
      synopsis: 'Dorothy and her dog Toto are transported to the magical land of Oz, where they must find a way back home.',
      yearReleased: '2015',
      genres: 'Animation • Fantasy',
      agerating: 'TV-Y7',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/66e5d822030723328aa571544433796e59104099f726e28d34dbf6bf01391871.jpg',
      trailerUrl: undefined
    },
    {
      id: '41',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/8dc208598ef6f0ae14518140e425932388b19189276a5de7969e739acaa06ae5.jpg',
      title: 'Tobot',
      duration: '20m per episode',
      rating: 'IMDb 6.5',
      synopsis: 'Young heroes pilot transforming robots to save their city from various threats.',
      yearReleased: '2010',
      genres: 'Animation • Sci-Fi',
      agerating: 'TV-Y',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8dc208598ef6f0ae14518140e425932388b19189276a5de7969e739acaa06ae5.jpg',
      trailerUrl: undefined
    },
    {
      id: '42',
      poster: 'https://i.ytimg.com/vi/4tVEwUpZCT4/maxresdefault.jpg',
      title: 'Rise of Kirmada',
      duration: '1h 30m',
      rating: 'IMDb 7.1',
      synopsis: 'A heroic journey of a group of friends fighting against the evil Kirmada.',
      yearReleased: '2019',
      genres: 'Adventure • Animation',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://i.ytimg.com/vi/4tVEwUpZCT4/maxresdefault.jpg',
      trailerUrl: undefined
    },
    {
      id: '43',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/c110849278f47aeaea2709c156cc36296a18fa364e58f54e47f90c512b06e5d4.jpg',
      title: 'Super Bheem in Dragonpur',
      duration: '1h 10m',
      rating: 'IMDb 7.3',
      synopsis: 'Super Bheem and his friends embark on an adventure to the land of Dragonpur.',
      yearReleased: '2020',
      genres: 'Action • Animation',
      agerating: 'U',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c110849278f47aeaea2709c156cc36296a18fa364e58f54e47f90c512b06e5d4.jpg',
      trailerUrl: undefined
    },
    {
      id: '44',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/b468132e571b16eb57507e492d19109e2f93545b804139513111771de8167c20.jpg',
      title: 'Oops Noah is Gone',
      duration: '1h 25m',
      rating: 'IMDb 6.0',
      synopsis: 'A fun-filled animated story about the animals left behind during Noah\'s Ark.',
      yearReleased: '2015',
      genres: 'Comedy • Animation',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b468132e571b16eb57507e492d19109e2f93545b804139513111771de8167c20.jpg',
      trailerUrl: undefined
    },
    {
      id: '45',
      poster: 'https://i.ytimg.com/vi/Yv7GWNPsT2U/maxresdefault.jpg',
      title: 'Chhota Bheem And Kaalayodha',
      duration: '1h 35m',
      rating: 'IMDb 7.8',
      synopsis: 'Chhota Bheem and his friends must face the dark warrior, Kaalayodha, to save their kingdom.',
      yearReleased: '2016',
      genres: 'Adventure • Animation',
      agerating: 'U',
      Agerating: 'undefined',
      modalPoster: 'https://i.ytimg.com/vi/Yv7GWNPsT2U/maxresdefault.jpg',
      trailerUrl: undefined
    },
  ],
};

const TopMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '46', poster: 'https://streamcoimg-a.akamaihd.net/000/325/1439/3251439-Banner-L2-4d3421b7a750bbb4aae2bb374b5af0b9.jpg',
      title: 'Joker',
      duration: '1 h 56 min',
      rating: 'IMDb 8.4',
      synopsis: '“Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale.',
      yearReleased: '2019',
      genres: 'Suspense • Drama • Bleak • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0d848f10ab32edc81fda5edf31a4e27a5efe7823059eca18a469164a351a4912._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '47', poster: 'https://4.bp.blogspot.com/-b824NRT4BQU/UAoQbquJMQI/AAAAAAAABWE/W69LQiHa77A/s1600/main.jpg',
      title: 'The Dark Knight Rises',
      duration: '2 h 44 min',
      rating: 'IMDb 8.4',
      synopsis: 'In this epic conclusion to the Dark Knight trilogy, the emergence of Bane, a masked terrorist with ruthless plans for Gotham, drives Batman out of his self-imposed exile.',
      yearReleased: '2012',
      genres: 'Drama • Action • Downbeat • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/63bf1270d081e43c650de8a83c787154dc72c0138cf5f563376a1227c0d9cd93.jpg',
      trailerUrl: undefined
    },
    {
      id: '48', poster: 'https://m.media-amazon.com/images/S/pv-target-images/557bb8bb59892f11a8e12bc73a7971ad1553a51e9f5f516d4dc2b10ba7e74cc8.png',
      title: 'Red white & Royal Blue',
      duration: '2 h 1 min',
      rating: 'IMDb 7.0',
      synopsis: 'Based on the New York Times bestseller, Red, White & Royal Blue centers around Alex, the president’s son, and Britain’s Prince Henry whose long-running feud threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.',
      yearReleased: '2023',
      genres: 'Comedy • Romance • LGBTQ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52b3a8daece2b987d37ab2978eee5d515d872d291951384e5ba418716e1a9f7a.jpg',
      trailerUrl: undefined
    },
    {
      id: '49', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b04212966cc854e2a57cb50d5d254e7e2ca2afe081e776b61c0c88ac5507e15b.jpg',
      title: 'Twilight',
      duration: '2 h 1 min',
      rating: 'IMDb 5.3',
      synopsis: 'The first film in the TWILIGHT franchise. Two hearts, two fates and two worlds – human and vampire – collide when Bella (Kristen Stewart) and Edward (Robert Pattinson) fall in love.',
      yearReleased: '2009',
      genres: 'Romance • Dreamlike • Mysterious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/667b05e2747ae6ad893c0f6ddbbe402b7d4cdbc9dcebc0d447eff50910cb56a5._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '50', poster: 'https://i.pinimg.com/originals/b6/f1/05/b6f1057e455a0538e58ce200a8f2cb49.jpg',
      title: 'The Twilight Saga: Eclipse',
      duration: '1 h 57 min',
      rating: 'IMDb 5.1',
      synopsis: 'A malicious vampire is seeking revenge in Seattle and Bella has some very difficult choices to make.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Mysterious • Strange',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/cf3a7ccf70baf293ff691deaa58f7c5561b0e6299d627098d5c4b1fc71809341._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '51', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f85a0ca1e179817af98d4fe76f61b2da8080ea385e012402e7d220228bf7319.jpg',
      title: 'The Twilight Saga: New Moon',
      duration: '2 h 3 min',
      rating: 'IMDb 4.8',
      synopsis: 'Edward leaves Bella after an attack that nearly claimed her life, and in her depression she falls into yet another paranormal relationship - this time with werewolf Jacob Black.',
      yearReleased: '2009',
      genres: 'Adventure • Drama • Atmospheric',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b72aa6361b7dcd0f996b5209911f7b4d041139bfe3ebd9ed6dc6f96f4b9dcbe3._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '52', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4912607c976f40985a8824a7756939c73030f261fe19b3c1e8466cd1b4fac306.jpg',
      title: 'The Twilight Saga: Breaking Dawn',
      duration: '1 h 55 min',
      rating: 'IMDb 4.9',
      synopsis: 'In the fourth installment of The Twilight Saga, a marriage, honeymoon and the birth of a child bring unforeseen and shocking developments for Bella (Stewart) and Edward (Pattinson).',
      yearReleased: '2011',
      genres: 'Drama • Fantasy • Dreamlike',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ea0261fa2ab860b9286a5ad3d1a96f6334d332147cab64070cd0d244273cca62._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '53', poster: 'https://ntvb.tmsimg.com/assets/p8609535_v_h10_ak.jpg?w=960&h=540',
      title: 'Final Destination 5',
      duration: '1 h 28 min',
      rating: 'IMDb 5.9',
      synopsis: 'Survivors of a suspension-bridge collapse learn theres no way you can cheat Death.',
      yearReleased: '2020',
      genres: 'Horror • Suspense • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/6bb677dc3cf534489648c8b7e0221ee9fea20229f45649c3b03266f28576cfbc._SX1080_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '54', poster: 'https://jiotvimages.cdn.jio.com/dare_images/shows/700/-/2024-06-15/240615413006.jpg',
      title: '777 Charlie',
      duration: '2 h 43 min',
      rating: 'IMDb 8.7',
      synopsis: 'Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.',
      yearReleased: '2022',
      genres: 'Adventure • Comedy • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0427999bda531075155b67b2d964b3cf84cb631a4f75f11f3c32bf50a86d7bb1._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '46', poster: 'https://streamcoimg-a.akamaihd.net/000/325/1439/3251439-Banner-L2-4d3421b7a750bbb4aae2bb374b5af0b9.jpg',
      title: 'Joker',
      duration: '1 h 56 min',
      rating: 'IMDb 8.4',
      synopsis: '“Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale.',
      yearReleased: '2019',
      genres: 'Suspense • Drama • Bleak • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0d848f10ab32edc81fda5edf31a4e27a5efe7823059eca18a469164a351a4912._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '47', poster: 'https://4.bp.blogspot.com/-b824NRT4BQU/UAoQbquJMQI/AAAAAAAABWE/W69LQiHa77A/s1600/main.jpg',
      title: 'The Dark Knight Rises',
      duration: '2 h 44 min',
      rating: 'IMDb 8.4',
      synopsis: 'In this epic conclusion to the Dark Knight trilogy, the emergence of Bane, a masked terrorist with ruthless plans for Gotham, drives Batman out of his self-imposed exile.',
      yearReleased: '2012',
      genres: 'Drama • Action • Downbeat • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/63bf1270d081e43c650de8a83c787154dc72c0138cf5f563376a1227c0d9cd93.jpg',
      trailerUrl: undefined
    },
    {
      id: '48', poster: 'https://m.media-amazon.com/images/S/pv-target-images/557bb8bb59892f11a8e12bc73a7971ad1553a51e9f5f516d4dc2b10ba7e74cc8.png',
      title: 'Red white & Royal Blue',
      duration: '2 h 1 min',
      rating: 'IMDb 7.0',
      synopsis: 'Based on the New York Times bestseller, Red, White & Royal Blue centers around Alex, the president’s son, and Britain’s Prince Henry whose long-running feud threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.',
      yearReleased: '2023',
      genres: 'Comedy • Romance • LGBTQ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52b3a8daece2b987d37ab2978eee5d515d872d291951384e5ba418716e1a9f7a.jpg',
      trailerUrl: undefined
    },
    {
      id: '49', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b04212966cc854e2a57cb50d5d254e7e2ca2afe081e776b61c0c88ac5507e15b.jpg',
      title: 'Twilight',
      duration: '2 h 1 min',
      rating: 'IMDb 5.3',
      synopsis: 'The first film in the TWILIGHT franchise. Two hearts, two fates and two worlds – human and vampire – collide when Bella (Kristen Stewart) and Edward (Robert Pattinson) fall in love.',
      yearReleased: '2009',
      genres: 'Romance • Dreamlike • Mysterious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/667b05e2747ae6ad893c0f6ddbbe402b7d4cdbc9dcebc0d447eff50910cb56a5._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '50', poster: 'https://i.pinimg.com/originals/b6/f1/05/b6f1057e455a0538e58ce200a8f2cb49.jpg',
      title: 'The Twilight Saga: Eclipse',
      duration: '1 h 57 min',
      rating: 'IMDb 5.1',
      synopsis: 'A malicious vampire is seeking revenge in Seattle and Bella has some very difficult choices to make.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Mysterious • Strange',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/cf3a7ccf70baf293ff691deaa58f7c5561b0e6299d627098d5c4b1fc71809341._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '51', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f85a0ca1e179817af98d4fe76f61b2da8080ea385e012402e7d220228bf7319.jpg',
      title: 'The Twilight Saga: New Moon',
      duration: '2 h 3 min',
      rating: 'IMDb 4.8',
      synopsis: 'Edward leaves Bella after an attack that nearly claimed her life, and in her depression she falls into yet another paranormal relationship - this time with werewolf Jacob Black.',
      yearReleased: '2009',
      genres: 'Adventure • Drama • Atmospheric',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b72aa6361b7dcd0f996b5209911f7b4d041139bfe3ebd9ed6dc6f96f4b9dcbe3._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '52', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4912607c976f40985a8824a7756939c73030f261fe19b3c1e8466cd1b4fac306.jpg',
      title: 'The Twilight Saga: Breaking Dawn',
      duration: '1 h 55 min',
      rating: 'IMDb 4.9',
      synopsis: 'In the fourth installment of The Twilight Saga, a marriage, honeymoon and the birth of a child bring unforeseen and shocking developments for Bella (Stewart) and Edward (Pattinson).',
      yearReleased: '2011',
      genres: 'Drama • Fantasy • Dreamlike',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ea0261fa2ab860b9286a5ad3d1a96f6334d332147cab64070cd0d244273cca62._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '53', poster: 'https://ntvb.tmsimg.com/assets/p8609535_v_h10_ak.jpg?w=960&h=540',
      title: 'Final Destination 5',
      duration: '1 h 28 min',
      rating: 'IMDb 5.9',
      synopsis: 'Survivors of a suspension-bridge collapse learn theres no way you can cheat Death.',
      yearReleased: '2020',
      genres: 'Horror • Suspense • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/6bb677dc3cf534489648c8b7e0221ee9fea20229f45649c3b03266f28576cfbc._SX1080_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '54', poster: 'https://jiotvimages.cdn.jio.com/dare_images/shows/700/-/2024-06-15/240615413006.jpg',
      title: '777 Charlie',
      duration: '2 h 43 min',
      rating: 'IMDb 8.7',
      synopsis: 'Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.',
      yearReleased: '2022',
      genres: 'Adventure • Comedy • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0427999bda531075155b67b2d964b3cf84cb631a4f75f11f3c32bf50a86d7bb1._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '46', poster: 'https://streamcoimg-a.akamaihd.net/000/325/1439/3251439-Banner-L2-4d3421b7a750bbb4aae2bb374b5af0b9.jpg',
      title: 'Joker',
      duration: '1 h 56 min',
      rating: 'IMDb 8.4',
      synopsis: '“Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale.',
      yearReleased: '2019',
      genres: 'Suspense • Drama • Bleak • Cerebral',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0d848f10ab32edc81fda5edf31a4e27a5efe7823059eca18a469164a351a4912._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '47', poster: 'https://4.bp.blogspot.com/-b824NRT4BQU/UAoQbquJMQI/AAAAAAAABWE/W69LQiHa77A/s1600/main.jpg',
      title: 'The Dark Knight Rises',
      duration: '2 h 44 min',
      rating: 'IMDb 8.4',
      synopsis: 'In this epic conclusion to the Dark Knight trilogy, the emergence of Bane, a masked terrorist with ruthless plans for Gotham, drives Batman out of his self-imposed exile.',
      yearReleased: '2012',
      genres: 'Drama • Action • Downbeat • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/63bf1270d081e43c650de8a83c787154dc72c0138cf5f563376a1227c0d9cd93.jpg',
      trailerUrl: undefined
    },
    {
      id: '48', poster: 'https://m.media-amazon.com/images/S/pv-target-images/557bb8bb59892f11a8e12bc73a7971ad1553a51e9f5f516d4dc2b10ba7e74cc8.png',
      title: 'Red white & Royal Blue',
      duration: '2 h 1 min',
      rating: 'IMDb 7.0',
      synopsis: 'Based on the New York Times bestseller, Red, White & Royal Blue centers around Alex, the president’s son, and Britain’s Prince Henry whose long-running feud threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.',
      yearReleased: '2023',
      genres: 'Comedy • Romance • LGBTQ',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52b3a8daece2b987d37ab2978eee5d515d872d291951384e5ba418716e1a9f7a.jpg',
      trailerUrl: undefined
    },
    {
      id: '49', poster: 'https://m.media-amazon.com/images/S/pv-target-images/b04212966cc854e2a57cb50d5d254e7e2ca2afe081e776b61c0c88ac5507e15b.jpg',
      title: 'Twilight',
      duration: '2 h 1 min',
      rating: 'IMDb 5.3',
      synopsis: 'The first film in the TWILIGHT franchise. Two hearts, two fates and two worlds – human and vampire – collide when Bella (Kristen Stewart) and Edward (Robert Pattinson) fall in love.',
      yearReleased: '2009',
      genres: 'Romance • Dreamlike • Mysterious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/667b05e2747ae6ad893c0f6ddbbe402b7d4cdbc9dcebc0d447eff50910cb56a5._SX1920_FMwebp_.jpg',
      trailerUrl: undefined
    },
    {
      id: '50', poster: 'https://i.pinimg.com/originals/b6/f1/05/b6f1057e455a0538e58ce200a8f2cb49.jpg',
      title: 'The Twilight Saga: Eclipse',
      duration: '1 h 57 min',
      rating: 'IMDb 5.1',
      synopsis: 'A malicious vampire is seeking revenge in Seattle and Bella has some very difficult choices to make.',
      yearReleased: '2010',
      genres: 'Action • Adventure • Mysterious • Strange',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/cf3a7ccf70baf293ff691deaa58f7c5561b0e6299d627098d5c4b1fc71809341._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '51', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f85a0ca1e179817af98d4fe76f61b2da8080ea385e012402e7d220228bf7319.jpg',
      title: 'The Twilight Saga: New Moon',
      duration: '2 h 3 min',
      rating: 'IMDb 4.8',
      synopsis: 'Edward leaves Bella after an attack that nearly claimed her life, and in her depression she falls into yet another paranormal relationship - this time with werewolf Jacob Black.',
      yearReleased: '2009',
      genres: 'Adventure • Drama • Atmospheric',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b72aa6361b7dcd0f996b5209911f7b4d041139bfe3ebd9ed6dc6f96f4b9dcbe3._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '52', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4912607c976f40985a8824a7756939c73030f261fe19b3c1e8466cd1b4fac306.jpg',
      title: 'The Twilight Saga: Breaking Dawn',
      duration: '1 h 55 min',
      rating: 'IMDb 4.9',
      synopsis: 'In the fourth installment of The Twilight Saga, a marriage, honeymoon and the birth of a child bring unforeseen and shocking developments for Bella (Stewart) and Edward (Pattinson).',
      yearReleased: '2011',
      genres: 'Drama • Fantasy • Dreamlike',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ea0261fa2ab860b9286a5ad3d1a96f6334d332147cab64070cd0d244273cca62._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '53', poster: 'https://ntvb.tmsimg.com/assets/p8609535_v_h10_ak.jpg?w=960&h=540',
      title: 'Final Destination 5',
      duration: '1 h 28 min',
      rating: 'IMDb 5.9',
      synopsis: 'Survivors of a suspension-bridge collapse learn theres no way you can cheat Death.',
      yearReleased: '2020',
      genres: 'Horror • Suspense • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/6bb677dc3cf534489648c8b7e0221ee9fea20229f45649c3b03266f28576cfbc._SX1080_FMpng_.png',
      trailerUrl: undefined
    },
    {
      id: '54', poster: 'https://jiotvimages.cdn.jio.com/dare_images/shows/700/-/2024-06-15/240615413006.jpg',
      title: '777 Charlie',
      duration: '2 h 43 min',
      rating: 'IMDb 8.7',
      synopsis: 'Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.',
      yearReleased: '2022',
      genres: 'Adventure • Comedy • Drama',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/0427999bda531075155b67b2d964b3cf84cb631a4f75f11f3c32bf50a86d7bb1._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: '46',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/cf255320b36ff01390e9bba0533b36d1278d772148f28c21fdcf05c956c7fe0a.jpg',
      title: 'Little Krishna',
      duration: '1h',
      rating: 'IMDb 7.4',
      synopsis: 'Little Krishna’s adventures and mischief as he grows up in the town of Vrindavan.',
      yearReleased: '2009',
      genres: 'Animation • Family',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/cf255320b36ff01390e9bba0533b36d1278d772148f28c21fdcf05c956c7fe0a.jpg',
      trailerUrl: undefined
    },
    {
      id: '47',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/043610a363943180c74eb6231f45b49b1a1dd0bcdb9fb0a58a641123c2926441.jpg',
      title: 'Chhota Bheem and Krishna',
      duration: '1h 10m',
      rating: 'IMDb 7.8',
      synopsis: 'Chhota Bheem and Krishna team up to defeat a common enemy and restore peace.',
      yearReleased: '2016',
      genres: 'Animation • Adventure',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/043610a363943180c74eb6231f45b49b1a1dd0bcdb9fb0a58a641123c2926441.jpg',
      trailerUrl: undefined
    },
    {
      id: '48',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/9f0d8d726e28ff5f38ed7c1d10e53b6803170a20d2ced2f6127ba154e6609801.jpg',
      title: 'Oggy and the Cockroaches',
      duration: '25m per episode',
      rating: 'IMDb 6.9',
      synopsis: 'Oggy’s hilarious battles with the cockroaches who invade his home.',
      yearReleased: '1998',
      genres: 'Animation • Comedy',
      agerating: 'TV-Y7',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9f0d8d726e28ff5f38ed7c1d10e53b6803170a20d2ced2f6127ba154e6609801.jpg',
      trailerUrl: undefined
    },
    {
      id: '49',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/84dee9edd3e6b4f8fe2325f8ea0959f7cecdb7397c348b558b5a7915d73e72be.jpg',
      title: 'Just add Magic Mystery City',
      duration: '30m per episode',
      rating: 'IMDb 7.1',
      synopsis: 'Three friends uncover magical secrets and solve mysteries in their town.',
      yearReleased: '2020',
      genres: 'Fantasy • Adventure',
      agerating: 'TV-G',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/84dee9edd3e6b4f8fe2325f8ea0959f7cecdb7397c348b558b5a7915d73e72be.jpg',
      trailerUrl: undefined
    },
    {
      id: '50',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/c9fac3281d49bd54e97ea3665ff96f9171c4886eaf6d503ac344d586b5192e2c.jpg',
      title: 'Bug Diaries',
      duration: '15m per episode',
      rating: 'IMDb 6.8',
      synopsis: 'The daily adventures of three bugs and their interactions with the world around them.',
      yearReleased: '2018',
      genres: 'Animation • Family',
      agerating: 'TV-Y',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c9fac3281d49bd54e97ea3665ff96f9171c4886eaf6d503ac344d586b5192e2c.jpg',
      trailerUrl: undefined
    },
    {
      id: '51',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/9d26e5870ccc83c6d391881e9559cfbc860828ef838cc30234d669d999595ae5.jpg',
      title: 'Shinchan',
      duration: '20m per episode',
      rating: 'IMDb 7.0',
      synopsis: 'Shinchan’s mischievous adventures and hilarious antics in his everyday life.',
      yearReleased: '1992',
      genres: 'Animation • Comedy',
      agerating: 'TV-PG',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9d26e5870ccc83c6d391881e9559cfbc860828ef838cc30234d669d999595ae5.jpg',
      trailerUrl: undefined
    },
    {
      id: '52',
      poster: 'https://animehunch.com/wp-content/uploads/2022/05/Doraemon.jpg',
      title: 'Doraemon',
      duration: '25m per episode',
      rating: 'IMDb 8.0',
      synopsis: 'The adventures of a robotic cat from the future who helps a young boy navigate life.',
      yearReleased: '1979',
      genres: 'Animation • Comedy',
      agerating: 'TV-Y',
      Agerating: undefined,
      modalPoster: 'https://animehunch.com/wp-content/uploads/2022/05/Doraemon.jpg',
      trailerUrl: undefined
    },
    {
      id: '53',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/dd6963597d01b03f880ee22c69c964c6daab22aea6c94413098b85a15c77521e._SX1080_FMjpg_.jpg',
      title: 'Mini Buds',
      duration: '30m per episode',
      rating: 'IMDb 6.4',
      synopsis: 'The adventures of a group of tiny friends navigating their world.',
      yearReleased: '2021',
      genres: 'Animation • Family',
      agerating: 'TV-Y',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/dd6963597d01b03f880ee22c69c964c6daab22aea6c94413098b85a15c77521e._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '54',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/d7bb82221c13520b590da6f627cc552062c00b604b1ebd8c28931cafa62a5b03.jpg',
      title: 'Pete the Cat',
      duration: '25m per episode',
      rating: 'IMDb 7.2',
      synopsis: 'The adventures of Pete the Cat, a cool cat who loves to rock and explore.',
      yearReleased: '2017',
      genres: 'Animation • Musical',
      agerating: 'TV-Y',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d7bb82221c13520b590da6f627cc552062c00b604b1ebd8c28931cafa62a5b03.jpg',
      trailerUrl: undefined
    },
    {
      id: '55',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/89d2d3449d1c9e8060fb83dba36e3fed08f3ba98cabb65b96f29a56957632c23.jpg',
      title: 'Tenali Raman',
      duration: '1h 20m',
      rating: 'IMDb 7.5',
      synopsis: 'The witty and humorous adventures of Tenali Raman, a legendary poet and scholar.',
      yearReleased: '2019',
      genres: 'Animation • Historical',
      agerating: 'U',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/89d2d3449d1c9e8060fb83dba36e3fed08f3ba98cabb65b96f29a56957632c23.jpg',
      trailerUrl: undefined
    },
  ],
};

const FanatasyMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '55', poster: 'https://m.media-amazon.com/images/S/pv-target-images/12e95ed0b3350055e3133a42ccbdedd77e3f4bb96f1d605c49684645169a4b23.jpg',
      title: 'Thor',
      duration: '1 h 54 min',
      rating: 'IMDb 7.0',
      synopsis: 'The powerful but arrogant warrior Thor is cast out of the fantastic realm of Asgard and sent to live amongst humans on Earth, where he soon becomes one of their finest defenders.',
      yearReleased: '2011',
      genres: 'Action • Fantasy • Exciting • Passionate',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ba48201486f84456cdf6e30fe0beea8831cbbb4994c21b302b6d83468e375877.png',
      trailerUrl: undefined
    },
    {
      id: '56', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4127d541f47ab35486234e3a119307a7a7c11506fd19081edd927da8a70b0b1c.jpg',
      title: 'Aquaman',
      duration: '2 h 17 min',
      rating: 'IMDb 6.8',
      synopsis: 'Aquaman reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime-to discover if he is worthy of who he was born to be a king...',
      yearReleased: '2018',
      genres: 'Adventure • Action • Intense • Outrageous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d7c32b70c03f4bda25c68ad296bbb7a380f9b72b47ca31faaff646d26e9e5193.jpg',
      trailerUrl: undefined
    },
    {
      id: '57', poster: 'https://m.media-amazon.com/images/S/pv-target-images/ad225bdbe1f79b537253f1cca083271fff33cc06d4b8071ed92e70c73d720125.jpg',
      title: 'Ant-Man and The Wasp: Quantumania',
      duration: '2 h 6 min',
      rating: 'IMDb 6.0',
      synopsis: 'Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) are Ant-Man and The Wasp. Together, with their families, they explore the Quantum Realm, interact with strange new creatures and embark on an adventure that pushes them beyond what they thought possible. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers...',
      yearReleased: '2023',
      genres: 'Action • Adventure • Comedy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.alphacoders.com/131/1315750.jpeg',
      trailerUrl: undefined
    },
    {
      id: '58', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5bc555d86d6b03d49d4b90daa59f80872fc8783665c72c10210b4eadf41a6e96.jpg',
      title: 'In the Heart of the Sea',
      duration: '1 h 55 min',
      rating: 'IMDb 6.9',
      synopsis: 'In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.',
      yearReleased: '2015',
      genres: 'Action • Drama • Harrowing • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8d260dfdf777740c2168044915a5df9758bfbbe83e1ef7640a7e7283c2c74c8a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '59', poster: 'https://m.media-amazon.com/images/S/pv-target-images/1e74f51cc3240081db18cf705e658418c57a44d384c2cda7eca9679ee6309533.jpg',
      title: 'Power Rangers',
      duration: '1 h 58 min',
      rating: 'IMDb 5.9',
      synopsis: 'Five ordinary teenagers must team together to become something extraordinary in order to save the world from being obliterated by an alien threat.',
      yearReleased: '2017',
      genres: 'Fantasy • Action • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52840ec492cbcc01c38a5b756bed483d690443d29ea1be5ebcb31e15d0e002fd._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '60', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9302e6e732884b025c317c56fe31e04a8776d561f56a17c3a8cb5a0a3ab9509d.jpg',
      title: 'The Amazing Spider-Man',
      duration: '2 h 15 min',
      rating: 'IMDb 6.9',
      synopsis: 'Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his fathers, he pursues a quest to solve his parents disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors alter ego, the Lizard.',
      yearReleased: '2012',
      genres: 'Action • Science Fiction • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.jdmagicbox.com/comp/jd_social/news/2018jul12/image-44730-w8fjcj7mm2.jpg',
      trailerUrl: undefined
    },
    {
      id: '61', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c795c2e67aa831064a5cd6eb9a8dbbf5c90e2a03e4dc5b7c95c5deae0cffe035.jpg',
      title: 'Wonder Woman',
      duration: '2 h 21 min',
      rating: 'IMDb 7.3',
      synopsis: 'Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powers…and her true destiny.',
      yearReleased: '2017',
      genres: 'Action • Adventure • Ambitious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/90e88fa2b360a331f2cbf2fd6271ea4d41f09447f9489cd89c679b3164bf677b.jpg',
      trailerUrl: undefined
    },
    {
      id: '62', poster: 'https://m.media-amazon.com/images/S/pv-target-images/94e7f0bb76dde53ee32fa02ef22eb862a6746b8c8c15b25cf9619b89a0f1ac66.jpg',
      title: 'Thor: The Dark World',
      duration: '1 h 52 min',
      rating: 'IMDb 6.8',
      synopsis: 'In the aftermath of Marvel’s "Thor" and "Marvel’s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness.',
      yearReleased: '2013',
      genres: 'Action • Adventure • Exciting • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/04d570e19249200d2dd2ae417979354c99ee263744ac2ac64b63d80916aa9f8d.jpg',
      trailerUrl: undefined
    },
    {
      id: '63', poster: 'https://m.media-amazon.com/images/S/pv-target-images/be7c378f3d62d7085ce2e32537b89108aaf59289f81c77e4128d5c4a57a11bab.jpg',
      title: 'Dont Knock Twice',
      duration: '1 h 29 min',
      rating: 'IMDb 5.1',
      synopsis: 'A mother desperately looking to reconnect with her estranged daughter attracts the attention of a demonic witch.',
      yearReleased: '2017',
      genres: 'Suspense • Fantasy • Thoughtful • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b93d420d72afa376e2e32dc016bd0ac3ccd9bbd66b52d28f181ab83ac96e9d73.jpg',
      trailerUrl: undefined
    },
    {
      id: '64', poster: 'https://m.media-amazon.com/images/S/pv-target-images/6fec6f4bb7a926d4a66714d7f30c4a1a52187a7c0f5dfb37b6f6a18ee4e972c6.jpg',
      title: 'Thor: Love and Thunder',
      duration: '1 h 58 min',
      rating: 'IMDb 6.2',
      synopsis: 'In Marvel Studios’ Thor: Love and Thunder, the God of Thunder (Chris Hemsworth) teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster (Natalie Portman) to take on a galactic killer known as Gorr the God Butcher (Christian Bale). WARNING: Some flashing-lights scenes in this film may affect photosensitive viewers.',
      yearReleased: '2022',
      genres: 'Comedy • Science Fiction • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a9e98052f1ae8c46739537ec368fef723e99610b7b208a018b0a479b19a97f91.jpg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '55', poster: 'https://m.media-amazon.com/images/S/pv-target-images/12e95ed0b3350055e3133a42ccbdedd77e3f4bb96f1d605c49684645169a4b23.jpg',
      title: 'Thor',
      duration: '1 h 54 min',
      rating: 'IMDb 7.0',
      synopsis: 'The powerful but arrogant warrior Thor is cast out of the fantastic realm of Asgard and sent to live amongst humans on Earth, where he soon becomes one of their finest defenders.',
      yearReleased: '2011',
      genres: 'Action • Fantasy • Exciting • Passionate',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ba48201486f84456cdf6e30fe0beea8831cbbb4994c21b302b6d83468e375877.png',
      trailerUrl: undefined
    },
    {
      id: '56', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4127d541f47ab35486234e3a119307a7a7c11506fd19081edd927da8a70b0b1c.jpg',
      title: 'Aquaman',
      duration: '2 h 17 min',
      rating: 'IMDb 6.8',
      synopsis: 'Aquaman reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime-to discover if he is worthy of who he was born to be a king...',
      yearReleased: '2018',
      genres: 'Adventure • Action • Intense • Outrageous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d7c32b70c03f4bda25c68ad296bbb7a380f9b72b47ca31faaff646d26e9e5193.jpg',
      trailerUrl: undefined
    },
    {
      id: '57', poster: 'https://m.media-amazon.com/images/S/pv-target-images/ad225bdbe1f79b537253f1cca083271fff33cc06d4b8071ed92e70c73d720125.jpg',
      title: 'Ant-Man and The Wasp: Quantumania',
      duration: '2 h 6 min',
      rating: 'IMDb 6.0',
      synopsis: 'Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) are Ant-Man and The Wasp. Together, with their families, they explore the Quantum Realm, interact with strange new creatures and embark on an adventure that pushes them beyond what they thought possible. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers...',
      yearReleased: '2023',
      genres: 'Action • Adventure • Comedy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.alphacoders.com/131/1315750.jpeg',
      trailerUrl: undefined
    },
    {
      id: '58', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5bc555d86d6b03d49d4b90daa59f80872fc8783665c72c10210b4eadf41a6e96.jpg',
      title: 'In the Heart of the Sea',
      duration: '1 h 55 min',
      rating: 'IMDb 6.9',
      synopsis: 'In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.',
      yearReleased: '2015',
      genres: 'Action • Drama • Harrowing • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8d260dfdf777740c2168044915a5df9758bfbbe83e1ef7640a7e7283c2c74c8a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '59', poster: 'https://m.media-amazon.com/images/S/pv-target-images/1e74f51cc3240081db18cf705e658418c57a44d384c2cda7eca9679ee6309533.jpg',
      title: 'Power Rangers',
      duration: '1 h 58 min',
      rating: 'IMDb 5.9',
      synopsis: 'Five ordinary teenagers must team together to become something extraordinary in order to save the world from being obliterated by an alien threat.',
      yearReleased: '2017',
      genres: 'Fantasy • Action • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52840ec492cbcc01c38a5b756bed483d690443d29ea1be5ebcb31e15d0e002fd._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '60', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9302e6e732884b025c317c56fe31e04a8776d561f56a17c3a8cb5a0a3ab9509d.jpg',
      title: 'The Amazing Spider-Man',
      duration: '2 h 15 min',
      rating: 'IMDb 6.9',
      synopsis: 'Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his fathers, he pursues a quest to solve his parents disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors alter ego, the Lizard.',
      yearReleased: '2012',
      genres: 'Action • Science Fiction • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.jdmagicbox.com/comp/jd_social/news/2018jul12/image-44730-w8fjcj7mm2.jpg',
      trailerUrl: undefined
    },
    {
      id: '61', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c795c2e67aa831064a5cd6eb9a8dbbf5c90e2a03e4dc5b7c95c5deae0cffe035.jpg',
      title: 'Wonder Woman',
      duration: '2 h 21 min',
      rating: 'IMDb 7.3',
      synopsis: 'Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powers…and her true destiny.',
      yearReleased: '2017',
      genres: 'Action • Adventure • Ambitious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/90e88fa2b360a331f2cbf2fd6271ea4d41f09447f9489cd89c679b3164bf677b.jpg',
      trailerUrl: undefined
    },
    {
      id: '62', poster: 'https://m.media-amazon.com/images/S/pv-target-images/94e7f0bb76dde53ee32fa02ef22eb862a6746b8c8c15b25cf9619b89a0f1ac66.jpg',
      title: 'Thor: The Dark World',
      duration: '1 h 52 min',
      rating: 'IMDb 6.8',
      synopsis: 'In the aftermath of Marvel’s "Thor" and "Marvel’s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness.',
      yearReleased: '2013',
      genres: 'Action • Adventure • Exciting • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/04d570e19249200d2dd2ae417979354c99ee263744ac2ac64b63d80916aa9f8d.jpg',
      trailerUrl: undefined
    },
    {
      id: '63', poster: 'https://m.media-amazon.com/images/S/pv-target-images/be7c378f3d62d7085ce2e32537b89108aaf59289f81c77e4128d5c4a57a11bab.jpg',
      title: 'Dont Knock Twice',
      duration: '1 h 29 min',
      rating: 'IMDb 5.1',
      synopsis: 'A mother desperately looking to reconnect with her estranged daughter attracts the attention of a demonic witch.',
      yearReleased: '2017',
      genres: 'Suspense • Fantasy • Thoughtful • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b93d420d72afa376e2e32dc016bd0ac3ccd9bbd66b52d28f181ab83ac96e9d73.jpg',
      trailerUrl: undefined
    },
    {
      id: '64', poster: 'https://m.media-amazon.com/images/S/pv-target-images/6fec6f4bb7a926d4a66714d7f30c4a1a52187a7c0f5dfb37b6f6a18ee4e972c6.jpg',
      title: 'Thor: Love and Thunder',
      duration: '1 h 58 min',
      rating: 'IMDb 6.2',
      synopsis: 'In Marvel Studios’ Thor: Love and Thunder, the God of Thunder (Chris Hemsworth) teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster (Natalie Portman) to take on a galactic killer known as Gorr the God Butcher (Christian Bale). WARNING: Some flashing-lights scenes in this film may affect photosensitive viewers.',
      yearReleased: '2022',
      genres: 'Comedy • Science Fiction • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a9e98052f1ae8c46739537ec368fef723e99610b7b208a018b0a479b19a97f91.jpg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '55', poster: 'https://m.media-amazon.com/images/S/pv-target-images/12e95ed0b3350055e3133a42ccbdedd77e3f4bb96f1d605c49684645169a4b23.jpg',
      title: 'Thor',
      duration: '1 h 54 min',
      rating: 'IMDb 7.0',
      synopsis: 'The powerful but arrogant warrior Thor is cast out of the fantastic realm of Asgard and sent to live amongst humans on Earth, where he soon becomes one of their finest defenders.',
      yearReleased: '2011',
      genres: 'Action • Fantasy • Exciting • Passionate',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/ba48201486f84456cdf6e30fe0beea8831cbbb4994c21b302b6d83468e375877.png',
      trailerUrl: undefined
    },
    {
      id: '56', poster: 'https://m.media-amazon.com/images/S/pv-target-images/4127d541f47ab35486234e3a119307a7a7c11506fd19081edd927da8a70b0b1c.jpg',
      title: 'Aquaman',
      duration: '2 h 17 min',
      rating: 'IMDb 6.8',
      synopsis: 'Aquaman reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime-to discover if he is worthy of who he was born to be a king...',
      yearReleased: '2018',
      genres: 'Adventure • Action • Intense • Outrageous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/d7c32b70c03f4bda25c68ad296bbb7a380f9b72b47ca31faaff646d26e9e5193.jpg',
      trailerUrl: undefined
    },
    {
      id: '57', poster: 'https://m.media-amazon.com/images/S/pv-target-images/ad225bdbe1f79b537253f1cca083271fff33cc06d4b8071ed92e70c73d720125.jpg',
      title: 'Ant-Man and The Wasp: Quantumania',
      duration: '2 h 6 min',
      rating: 'IMDb 6.0',
      synopsis: 'Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) are Ant-Man and The Wasp. Together, with their families, they explore the Quantum Realm, interact with strange new creatures and embark on an adventure that pushes them beyond what they thought possible. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers...',
      yearReleased: '2023',
      genres: 'Action • Adventure • Comedy • Science Fiction',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.alphacoders.com/131/1315750.jpeg',
      trailerUrl: undefined
    },
    {
      id: '58', poster: 'https://m.media-amazon.com/images/S/pv-target-images/5bc555d86d6b03d49d4b90daa59f80872fc8783665c72c10210b4eadf41a6e96.jpg',
      title: 'In the Heart of the Sea',
      duration: '1 h 55 min',
      rating: 'IMDb 6.9',
      synopsis: 'In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.',
      yearReleased: '2015',
      genres: 'Action • Drama • Harrowing • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8d260dfdf777740c2168044915a5df9758bfbbe83e1ef7640a7e7283c2c74c8a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '59', poster: 'https://m.media-amazon.com/images/S/pv-target-images/1e74f51cc3240081db18cf705e658418c57a44d384c2cda7eca9679ee6309533.jpg',
      title: 'Power Rangers',
      duration: '1 h 58 min',
      rating: 'IMDb 5.9',
      synopsis: 'Five ordinary teenagers must team together to become something extraordinary in order to save the world from being obliterated by an alien threat.',
      yearReleased: '2017',
      genres: 'Fantasy • Action • Ambitious • Fantastic',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/52840ec492cbcc01c38a5b756bed483d690443d29ea1be5ebcb31e15d0e002fd._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '60', poster: 'https://m.media-amazon.com/images/S/pv-target-images/9302e6e732884b025c317c56fe31e04a8776d561f56a17c3a8cb5a0a3ab9509d.jpg',
      title: 'The Amazing Spider-Man',
      duration: '2 h 15 min',
      rating: 'IMDb 6.9',
      synopsis: 'Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his fathers, he pursues a quest to solve his parents disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors alter ego, the Lizard.',
      yearReleased: '2012',
      genres: 'Action • Science Fiction • Emotional',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://images.jdmagicbox.com/comp/jd_social/news/2018jul12/image-44730-w8fjcj7mm2.jpg',
      trailerUrl: undefined
    },
    {
      id: '61', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c795c2e67aa831064a5cd6eb9a8dbbf5c90e2a03e4dc5b7c95c5deae0cffe035.jpg',
      title: 'Wonder Woman',
      duration: '2 h 21 min',
      rating: 'IMDb 7.3',
      synopsis: 'Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powers…and her true destiny.',
      yearReleased: '2017',
      genres: 'Action • Adventure • Ambitious • Exciting',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/90e88fa2b360a331f2cbf2fd6271ea4d41f09447f9489cd89c679b3164bf677b.jpg',
      trailerUrl: undefined
    },
    {
      id: '62', poster: 'https://m.media-amazon.com/images/S/pv-target-images/94e7f0bb76dde53ee32fa02ef22eb862a6746b8c8c15b25cf9619b89a0f1ac66.jpg',
      title: 'Thor: The Dark World',
      duration: '1 h 52 min',
      rating: 'IMDb 6.8',
      synopsis: 'In the aftermath of Marvel’s "Thor" and "Marvel’s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness.',
      yearReleased: '2013',
      genres: 'Action • Adventure • Exciting • Thrilling',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/04d570e19249200d2dd2ae417979354c99ee263744ac2ac64b63d80916aa9f8d.jpg',
      trailerUrl: undefined
    },
    {
      id: '63', poster: 'https://m.media-amazon.com/images/S/pv-target-images/be7c378f3d62d7085ce2e32537b89108aaf59289f81c77e4128d5c4a57a11bab.jpg',
      title: 'Dont Knock Twice',
      duration: '1 h 29 min',
      rating: 'IMDb 5.1',
      synopsis: 'A mother desperately looking to reconnect with her estranged daughter attracts the attention of a demonic witch.',
      yearReleased: '2017',
      genres: 'Suspense • Fantasy • Thoughtful • Eerie',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b93d420d72afa376e2e32dc016bd0ac3ccd9bbd66b52d28f181ab83ac96e9d73.jpg',
      trailerUrl: undefined
    },
    {
      id: '64', poster: 'https://m.media-amazon.com/images/S/pv-target-images/6fec6f4bb7a926d4a66714d7f30c4a1a52187a7c0f5dfb37b6f6a18ee4e972c6.jpg',
      title: 'Thor: Love and Thunder',
      duration: '1 h 58 min',
      rating: 'IMDb 6.2',
      synopsis: 'In Marvel Studios’ Thor: Love and Thunder, the God of Thunder (Chris Hemsworth) teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster (Natalie Portman) to take on a galactic killer known as Gorr the God Butcher (Christian Bale). WARNING: Some flashing-lights scenes in this film may affect photosensitive viewers.',
      yearReleased: '2022',
      genres: 'Comedy • Science Fiction • Exciting • Frightening',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/a9e98052f1ae8c46739537ec368fef723e99610b7b208a018b0a479b19a97f91.jpg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: "56", poster: "https://m.media-amazon.com/images/S/pv-target-images/326670a89ff8c26211a292722a7b27cedcfddeb79ce43f27175ff6ae87ae4ae6._UR1920,1080_SX720_FMpng_.png",
      title: "Wonderstruck",
      duration: "1h 56min",
      rating: "PG",
      synopsis: "Wonderstruck tells the story of two children, Ben and Rose, who are each searching for something they have lost. Ben is searching for his father, and Rose is searching for her mother, set in the 1920s and 1970s respectively.",
      yearReleased: "2017",
      genres: "Drama, Mystery",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/326670a89ff8c26211a292722a7b27cedcfddeb79ce43f27175ff6ae87ae4ae6._UR1920,1080_SX720_FMpng_.png",
      trailerUrl: undefined
    },
    {
      id: "57", poster: "https://m.media-amazon.com/images/S/pv-target-images/b11fe3f327cfffc6e266f88c3dd408e8f1032aead1ae718ced1fe1f6729f788b.jpg",
      title: "The Addams Family 2",
      duration: "1h 33min",
      rating: "PG",
      synopsis: "The Addams Family 2 follows the eccentric family on a road trip across America. They encounter hilarious adventures and new friends along the way while facing family challenges.",
      yearReleased: "2021",
      genres: "Animation, Comedy",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/b11fe3f327cfffc6e266f88c3dd408e8f1032aead1ae718ced1fe1f6729f788b.jpg",
      trailerUrl: undefined
    },
    {
      id: "58", poster: "https://m.media-amazon.com/images/S/pv-target-images/eb63a1d54ff0e340098157f9e365b19e77ba3dc44b1a1ef49642b20dcbc81a72.jpg",
      title: "Frozen 2",
      duration: "1h 43min",
      rating: "PG",
      synopsis: "In Frozen 2, Queen Elsa, Princess Anna, Kristoff, Olaf, and Sven embark on a journey beyond their kingdom to discover the origin of Elsa's magical powers and save their land.",
      yearReleased: "2019",
      genres: "Animation, Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/eb63a1d54ff0e340098157f9e365b19e77ba3dc44b1a1ef49642b20dcbc81a72.jpg",
      trailerUrl: undefined
    },
    {
      id: "59", poster: "https://ntvb.tmsimg.com/assets/p9991822_v_h8_aj.jpg?w=1280&h=720",
      title: "Frozen",
      duration: "1h 42min",
      rating: "PG",
      synopsis: "Frozen tells the story of two sisters, Elsa and Anna, in the kingdom of Arendelle. When Elsa accidentally sets off an eternal winter, Anna teams up with an ice seller and a reindeer to find Elsa and save their kingdom.",
      yearReleased: "2013",
      genres: "Animation, Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://ntvb.tmsimg.com/assets/p9991822_v_h8_aj.jpg?w=1280&h=720",
      trailerUrl: undefined
    },
    {
      id: "60", poster: "https://miro.medium.com/v2/resize:fit:900/1*N4pYzDvh9JqIvv3rl55SrQ.jpeg",
      title: "Cinderella",
      duration: "1h 25min",
      rating: "G",
      synopsis: "Cinderella is a classic fairy tale about a young woman who, with the help of her fairy godmother, overcomes her cruel stepmother and stepsisters to attend the royal ball and meet her prince charming.",
      yearReleased: "1950",
      genres: "Animation, Family",
      agerating: "G",
      Agerating: "G",
      modalPoster: "https://miro.medium.com/v2/resize:fit:900/1*N4pYzDvh9JqIvv3rl55SrQ.jpeg",
      trailerUrl: undefined
    },
    {
      id: "61", poster: "https://m.media-amazon.com/images/S/pv-target-images/15bdc5a0611eb53002bb8f630f84de206ec0a931897557562a7982450ddc8873.jpg",
      title: "Beauty and the Beast",
      duration: "1h 24min",
      rating: "G",
      synopsis: "Beauty and the Beast tells the story of Belle, a young woman who is taken prisoner by a beast in his castle. Despite her initial fears, she befriends the castle's enchanted staff and learns to look beyond the beast's exterior to recognize the kind heart and soul within.",
      yearReleased: "1991",
      genres: "Animation, Family",
      agerating: "G",
      Agerating: "G",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/15bdc5a0611eb53002bb8f630f84de206ec0a931897557562a7982450ddc8873.jpg",
      trailerUrl: undefined
    },
    {
      id: "62", poster: "https://m.media-amazon.com/images/S/pv-target-images/2077d8d924b5cb3b58b885afb4d1930e258279e32a66ffa9ed4261b3bdadf576.png",
      title: "Ice Age",
      duration: "1h 21min",
      rating: "PG",
      synopsis: "Ice Age follows a group of prehistoric animals who come together to protect an orphaned human baby. The story revolves around their adventure across a frozen world as they face challenges and develop friendships.",
      yearReleased: "2002",
      genres: "Animation, Adventure",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/2077d8d924b5cb3b58b885afb4d1930e258279e32a66ffa9ed4261b3bdadf576.png",
      trailerUrl: undefined
    },
    {
      id: "63", poster: "https://m.media-amazon.com/images/S/pv-target-images/26b9910a53eab2422dbd29c1edd59882edf6c703764f119e0f2f87e7351da319.jpg",
      title: "Alice in Wonderland",
      duration: "1h 48min",
      rating: "PG",
      synopsis: "Alice in Wonderland follows a young girl named Alice who falls through a rabbit hole into a fantastical world. There, she encounters a host of peculiar characters and embarks on an adventure to find her way back home.",
      yearReleased: "2010",
      genres: "Adventure, Family",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/26b9910a53eab2422dbd29c1edd59882edf6c703764f119e0f2f87e7351da319.jpg",
      trailerUrl: undefined
    },
    {
      id: "64", poster: "https://m.media-amazon.com/images/S/pv-target-images/a8bb18c4991d2b2f90ab5d3dee48745514f7dec50522eba9b6694fe89b063c47.jpg",
      title: "Kung Fu Panda 4",
      duration: "1h 40min",
      rating: "PG",
      synopsis: "Kung Fu Panda 4 follows Po the panda as he continues his journey as a kung fu master. He faces new challenges and adversaries while striving to maintain peace in the Valley of Peace.",
      yearReleased: "2024",
      genres: "Animation, Action",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/a8bb18c4991d2b2f90ab5d3dee48745514f7dec50522eba9b6694fe89b063c47.jpg",
      trailerUrl: undefined
    },
    {
      id: "65", poster: "https://m.media-amazon.com/images/S/pv-target-images/ce4670607b6de3e339edf1a67ff8ab687bb051f8739f6f7a1db82df545733f42.jpg",
      title: "Spiderman Across the Spiderverse",
      duration: "2h 16min",
      rating: "PG",
      synopsis: "In Spiderman Across the Spiderverse, Miles Morales teams up with other Spider-People from various dimensions to confront a new threat that endangers the multiverse.",
      yearReleased: "2023",
      genres: "Animation, Action",
      agerating: "PG",
      Agerating: "PG",
      modalPoster: "https://m.media-amazon.com/images/S/pv-target-images/ce4670607b6de3e339edf1a67ff8ab687bb051f8739f6f7a1db82df545733f42.jpg",
      trailerUrl: undefined
    },
  ],
};

const RecentlyAddedMoviesById: { [key: string]: MovieItem[] } = {
  '1': [
    {
      id: '65', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7703d3921d5c63150cfcdd72b16dd3010e07fc2ec77e95e2c9a162e33bdf1769.jpg',
      title: 'Venom',
      duration: '1 h 47 min',
      rating: 'IMDb 6.6',
      synopsis: 'Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drakes experiments, Eddies body merges with the alien Venom leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.',
      yearReleased: '2018',
      genres: 'Action • Adventure • Fantastic • Malicious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c318262b4870e5890f94f3c1350a3d411f81f55c61ade0545b55ac5dc5ad92ba._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '66', poster: 'https://img.asmedia.epimg.net/resizer/v2/XXS72335MBE6LHC3VSKSQGBTXQ.jpg?auth=95daf1232b12e60103a016dacd9d114e1e7df9a50bf83571aa820d34c794a1e3&width=1472&height=828&smart=true',
      title: 'Imaginary',
      duration: '1 h 44 min',
      rating: 'IMDb 4.7',
      synopsis: 'In IMAGINARY, a young woman returns to her childhood home only to discover that the imaginary friend she left behind is very real and very unhappy she left.',
      yearReleased: '2024',
      genres: 'Horror • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/da524347207c74bfba3af9dbd2aef2cc83303199286481c0e72fc4cd632a3e83._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '67', poster: 'https://m.media-amazon.com/images/S/pv-target-images/788575e2d08c883edb7eb45f60f6a54b736c2cd51954dadda2d659817c291c30._UR1920,1080_.jpg',
      title: 'Venom: Let There Be Carnage',
      duration: '1 h 30 min',
      rating: 'IMDb 5.9',
      synopsis: 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.',
      yearReleased: '2021',
      genres: 'Action • Science Fiction • Ambitious • Campy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.rollingstone.com/wp-content/uploads/2021/09/VEF_1630_V2013_1057c.jpg',
      trailerUrl: undefined
    },
    {
      id: '68', poster: 'https://m.media-amazon.com/images/S/pv-target-images/d4d3237fea0a970966dc00bec5d18d01c66a64584e259e926626a435d6810bc1.jpg',
      title: 'Childs Play',
      duration: '1 h 26 min',
      rating: 'IMDb 5.7',
      synopsis: 'Gunned down by Detective Mike Norris (Chris Sarandon), dying murderer Charles Lee Ray (Brad Dourif) uses black magic to put his soul inside a doll named Chucky -- which Karen Barclay (Catherine Hicks) then buys for her young son, Andy (Alex Vincent). When Chucky kills Andys baby sitter, the boy realizes the doll is alive and tries to warn people, but hes institutionalized. Now Karen must convince the detective of the murderous dolls intentions, before Andy becomes Chuckys next victim.',
      yearReleased: '2019',
      genres: 'Drama • Horror • Frightening • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/14f92eda723c391c729d0bacc50bed43ec6dec68d6aa2c43ac4c34f853dfdb88._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '69', poster: 'https://m.media-amazon.com/images/S/pv-target-images/539e7b72534bc54dc562509a3e54bbf21303bceed711e2506810f301190fa353.jpg',
      title: 'Talk to Me',
      duration: '1 h 34 min',
      rating: 'IMDb 7.1',
      synopsis: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      yearReleased: '2023',
      genres: 'Horror • Suspense • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/682e6f86a09518065203c83b564972ea737c0f2b5d610975238d150fbdb78082._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '70', poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZAFGJLQKxecWJPXU5THClrOq6EcRSLFEBKPlJuudNjP7cX4BAw4JjfLnChoKKbsLqQwavrFZ5TjhWB-qcP66K5GtLzCTzwbWZtbPuQqizXaL_DFKERDnOzxRr2qWvF7oz_bBhET7Mf-I/w1200-h630-p-k-no-nu/cabininthewoods.jpg',
      title: 'The Cabin in the Woods',
      duration: '1 h 31 min',
      rating: 'IMDb 7.0',
      synopsis: 'When five college friends (Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz, Jesse Williams) arrive at a remote forest cabin for a little vacation, little do they expect the horrors that await them. One by one, the youths fall victim to backwoods zombies, but there is another factor at play. Two scientists (Richard Jenkins, Bradley Whitford) are manipulating the ghoulish goings-on, but even as the body count rises, there is yet more at work than meets the eye.',
      yearReleased: '2012',
      genres: 'Suspense • Horror • Harrowing • Terrifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/72d656c0acf84874405fcfd8e295bb851e87ced0b48298ea421c6170d225e7f1.jpg',
      trailerUrl: undefined
    },
    {
      id: '71', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53dc71cee5197679ac5f73aa38821a877dccb6a6bc858b0a113440e20209deb9.jpg',
      title: 'Ouija',
      duration: '1 h 25 min',
      rating: 'IMDb 4.5',
      synopsis: 'Following the sudden death of her best friend, Debbie, Laine finds an antique Ouija board in Debbies room and tries to use it to say goodbye. Instead, she makes contact with a spirit that calls itself DZ. As strange events begin to occur, Laine enlists others to help her determine DZs identity and what it wants. As the friends delve deeper, they find that Debbies mysterious death was not unique, and that they will suffer the same fate unless they learn how to close the portal they have opened.',
      yearReleased: '2014',
      genres: 'Horror • Suspense • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/734656a90aec89f94ff68190bf2d80b1471e0d00a083b19bce40c4cecf68896e._UR1920,1080_SX720_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '72', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bbf6bf4d7c338c0c85904685bec4caafb789d987bc2c07bf5d88d3f8153f03b1._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Satyaprem Ki Katha',
      duration: '2 h 23 min',
      rating: 'IMDb 6.7',
      synopsis: 'Sattu is a good hearted but good for nothing LLB fail guy who dreams of marrying the IT girl of Ahmedabad Katha, a girl way out of his league. However fate has other plans and Katha and he end up getting married, much to Katha’s dismay. From here on starts Sattu’s tryst to make his wife fall in love with him and how while doing so, he ends up discovering himself and proves to be a worthy husband!',
      yearReleased: '2023',
      genres: 'Drama • Romance • International • Comedy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/satyaprem-ki-katha-box-office-day-3-early-trends-kartik-aaryan-kiara-advanis-rom-com-scores-a-double-digit-saturday-01-1068x561.jpg',
      trailerUrl: undefined
    },
    {
      id: '73', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c78d1ae888e84f292265d3dbd01e56ca5dcf08a0837feec4bcb102524073164f._UR1920,1080_.png',
      title: 'The Map of Tiny Perfect Things',
      duration: '1 h 39 min',
      rating: 'IMDb 6.8',
      synopsis: 'The story of two teenagers trapped in an endless time loop who set out to find all the tiny things that make that one day perfect.',
      yearReleased: '2021',
      genres: 'Comedy • Fantasy • Feel-good • Quirky',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.elblogdeyes.com/wp-content/uploads/2021/02/the-map-of-tiny-perfect-things.jpg',
      trailerUrl: undefined
    },
    {
      id: '74', poster: 'https://m.media-amazon.com/images/S/pv-target-images/76846198b7323ebf65ce82676f78e890948038a2d88cd652eb9b82b8b7a6cabb.jpg',
      title: 'Yodha',
      duration: '2 h 10 min',
      rating: 'IMDb 5.7',
      synopsis: 'When a group of terrorists hijack a passenger plane, an off-duty soldier crafts a plan to thwart the hijackers and safeguard the passengers survival despite the engines failure.',
      yearReleased: '2024',
      genres: 'Action • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/06911ec572774daadb35485922d31d35e86c48f9b53fbb725b3773d59ee7951a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '2': [
    {
      id: '65', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7703d3921d5c63150cfcdd72b16dd3010e07fc2ec77e95e2c9a162e33bdf1769.jpg',
      title: 'Venom',
      duration: '1 h 47 min',
      rating: 'IMDb 6.6',
      synopsis: 'Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drakes experiments, Eddies body merges with the alien Venom leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.',
      yearReleased: '2018',
      genres: 'Action • Adventure • Fantastic • Malicious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c318262b4870e5890f94f3c1350a3d411f81f55c61ade0545b55ac5dc5ad92ba._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '66', poster: 'https://img.asmedia.epimg.net/resizer/v2/XXS72335MBE6LHC3VSKSQGBTXQ.jpg?auth=95daf1232b12e60103a016dacd9d114e1e7df9a50bf83571aa820d34c794a1e3&width=1472&height=828&smart=true',
      title: 'Imaginary',
      duration: '1 h 44 min',
      rating: 'IMDb 4.7',
      synopsis: 'In IMAGINARY, a young woman returns to her childhood home only to discover that the imaginary friend she left behind is very real and very unhappy she left.',
      yearReleased: '2024',
      genres: 'Horror • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/da524347207c74bfba3af9dbd2aef2cc83303199286481c0e72fc4cd632a3e83._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '67', poster: 'https://m.media-amazon.com/images/S/pv-target-images/788575e2d08c883edb7eb45f60f6a54b736c2cd51954dadda2d659817c291c30._UR1920,1080_.jpg',
      title: 'Venom: Let There Be Carnage',
      duration: '1 h 30 min',
      rating: 'IMDb 5.9',
      synopsis: 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.',
      yearReleased: '2021',
      genres: 'Action • Science Fiction • Ambitious • Campy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.rollingstone.com/wp-content/uploads/2021/09/VEF_1630_V2013_1057c.jpg',
      trailerUrl: undefined
    },
    {
      id: '68', poster: 'https://m.media-amazon.com/images/S/pv-target-images/d4d3237fea0a970966dc00bec5d18d01c66a64584e259e926626a435d6810bc1.jpg',
      title: 'Childs Play',
      duration: '1 h 26 min',
      rating: 'IMDb 5.7',
      synopsis: 'Gunned down by Detective Mike Norris (Chris Sarandon), dying murderer Charles Lee Ray (Brad Dourif) uses black magic to put his soul inside a doll named Chucky -- which Karen Barclay (Catherine Hicks) then buys for her young son, Andy (Alex Vincent). When Chucky kills Andys baby sitter, the boy realizes the doll is alive and tries to warn people, but hes institutionalized. Now Karen must convince the detective of the murderous dolls intentions, before Andy becomes Chuckys next victim.',
      yearReleased: '2019',
      genres: 'Drama • Horror • Frightening • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/14f92eda723c391c729d0bacc50bed43ec6dec68d6aa2c43ac4c34f853dfdb88._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '69', poster: 'https://m.media-amazon.com/images/S/pv-target-images/539e7b72534bc54dc562509a3e54bbf21303bceed711e2506810f301190fa353.jpg',
      title: 'Talk to Me',
      duration: '1 h 34 min',
      rating: 'IMDb 7.1',
      synopsis: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      yearReleased: '2023',
      genres: 'Horror • Suspense • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/682e6f86a09518065203c83b564972ea737c0f2b5d610975238d150fbdb78082._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '70', poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZAFGJLQKxecWJPXU5THClrOq6EcRSLFEBKPlJuudNjP7cX4BAw4JjfLnChoKKbsLqQwavrFZ5TjhWB-qcP66K5GtLzCTzwbWZtbPuQqizXaL_DFKERDnOzxRr2qWvF7oz_bBhET7Mf-I/w1200-h630-p-k-no-nu/cabininthewoods.jpg',
      title: 'The Cabin in the Woods',
      duration: '1 h 31 min',
      rating: 'IMDb 7.0',
      synopsis: 'When five college friends (Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz, Jesse Williams) arrive at a remote forest cabin for a little vacation, little do they expect the horrors that await them. One by one, the youths fall victim to backwoods zombies, but there is another factor at play. Two scientists (Richard Jenkins, Bradley Whitford) are manipulating the ghoulish goings-on, but even as the body count rises, there is yet more at work than meets the eye.',
      yearReleased: '2012',
      genres: 'Suspense • Horror • Harrowing • Terrifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/72d656c0acf84874405fcfd8e295bb851e87ced0b48298ea421c6170d225e7f1.jpg',
      trailerUrl: undefined
    },
    {
      id: '71', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53dc71cee5197679ac5f73aa38821a877dccb6a6bc858b0a113440e20209deb9.jpg',
      title: 'Ouija',
      duration: '1 h 25 min',
      rating: 'IMDb 4.5',
      synopsis: 'Following the sudden death of her best friend, Debbie, Laine finds an antique Ouija board in Debbies room and tries to use it to say goodbye. Instead, she makes contact with a spirit that calls itself DZ. As strange events begin to occur, Laine enlists others to help her determine DZs identity and what it wants. As the friends delve deeper, they find that Debbies mysterious death was not unique, and that they will suffer the same fate unless they learn how to close the portal they have opened.',
      yearReleased: '2014',
      genres: 'Horror • Suspense • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/734656a90aec89f94ff68190bf2d80b1471e0d00a083b19bce40c4cecf68896e._UR1920,1080_SX720_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '72', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bbf6bf4d7c338c0c85904685bec4caafb789d987bc2c07bf5d88d3f8153f03b1._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Satyaprem Ki Katha',
      duration: '2 h 23 min',
      rating: 'IMDb 6.7',
      synopsis: 'Sattu is a good hearted but good for nothing LLB fail guy who dreams of marrying the IT girl of Ahmedabad Katha, a girl way out of his league. However fate has other plans and Katha and he end up getting married, much to Katha’s dismay. From here on starts Sattu’s tryst to make his wife fall in love with him and how while doing so, he ends up discovering himself and proves to be a worthy husband!',
      yearReleased: '2023',
      genres: 'Drama • Romance • International • Comedy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/satyaprem-ki-katha-box-office-day-3-early-trends-kartik-aaryan-kiara-advanis-rom-com-scores-a-double-digit-saturday-01-1068x561.jpg',
      trailerUrl: undefined
    },
    {
      id: '73', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c78d1ae888e84f292265d3dbd01e56ca5dcf08a0837feec4bcb102524073164f._UR1920,1080_.png',
      title: 'The Map of Tiny Perfect Things',
      duration: '1 h 39 min',
      rating: 'IMDb 6.8',
      synopsis: 'The story of two teenagers trapped in an endless time loop who set out to find all the tiny things that make that one day perfect.',
      yearReleased: '2021',
      genres: 'Comedy • Fantasy • Feel-good • Quirky',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.elblogdeyes.com/wp-content/uploads/2021/02/the-map-of-tiny-perfect-things.jpg',
      trailerUrl: undefined
    },
    {
      id: '74', poster: 'https://m.media-amazon.com/images/S/pv-target-images/76846198b7323ebf65ce82676f78e890948038a2d88cd652eb9b82b8b7a6cabb.jpg',
      title: 'Yodha',
      duration: '2 h 10 min',
      rating: 'IMDb 5.7',
      synopsis: 'When a group of terrorists hijack a passenger plane, an off-duty soldier crafts a plan to thwart the hijackers and safeguard the passengers survival despite the engines failure.',
      yearReleased: '2024',
      genres: 'Action • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/06911ec572774daadb35485922d31d35e86c48f9b53fbb725b3773d59ee7951a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '3': [
    {
      id: '65', poster: 'https://m.media-amazon.com/images/S/pv-target-images/7703d3921d5c63150cfcdd72b16dd3010e07fc2ec77e95e2c9a162e33bdf1769.jpg',
      title: 'Venom',
      duration: '1 h 47 min',
      rating: 'IMDb 6.6',
      synopsis: 'Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drakes experiments, Eddies body merges with the alien Venom leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.',
      yearReleased: '2018',
      genres: 'Action • Adventure • Fantastic • Malicious',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/c318262b4870e5890f94f3c1350a3d411f81f55c61ade0545b55ac5dc5ad92ba._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '66', poster: 'https://img.asmedia.epimg.net/resizer/v2/XXS72335MBE6LHC3VSKSQGBTXQ.jpg?auth=95daf1232b12e60103a016dacd9d114e1e7df9a50bf83571aa820d34c794a1e3&width=1472&height=828&smart=true',
      title: 'Imaginary',
      duration: '1 h 44 min',
      rating: 'IMDb 4.7',
      synopsis: 'In IMAGINARY, a young woman returns to her childhood home only to discover that the imaginary friend she left behind is very real and very unhappy she left.',
      yearReleased: '2024',
      genres: 'Horror • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/da524347207c74bfba3af9dbd2aef2cc83303199286481c0e72fc4cd632a3e83._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '67', poster: 'https://m.media-amazon.com/images/S/pv-target-images/788575e2d08c883edb7eb45f60f6a54b736c2cd51954dadda2d659817c291c30._UR1920,1080_.jpg',
      title: 'Venom: Let There Be Carnage',
      duration: '1 h 30 min',
      rating: 'IMDb 5.9',
      synopsis: 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.',
      yearReleased: '2021',
      genres: 'Action • Science Fiction • Ambitious • Campy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.rollingstone.com/wp-content/uploads/2021/09/VEF_1630_V2013_1057c.jpg',
      trailerUrl: undefined
    },
    {
      id: '68', poster: 'https://m.media-amazon.com/images/S/pv-target-images/d4d3237fea0a970966dc00bec5d18d01c66a64584e259e926626a435d6810bc1.jpg',
      title: 'Childs Play',
      duration: '1 h 26 min',
      rating: 'IMDb 5.7',
      synopsis: 'Gunned down by Detective Mike Norris (Chris Sarandon), dying murderer Charles Lee Ray (Brad Dourif) uses black magic to put his soul inside a doll named Chucky -- which Karen Barclay (Catherine Hicks) then buys for her young son, Andy (Alex Vincent). When Chucky kills Andys baby sitter, the boy realizes the doll is alive and tries to warn people, but hes institutionalized. Now Karen must convince the detective of the murderous dolls intentions, before Andy becomes Chuckys next victim.',
      yearReleased: '2019',
      genres: 'Drama • Horror • Frightening • Intense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/14f92eda723c391c729d0bacc50bed43ec6dec68d6aa2c43ac4c34f853dfdb88._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '69', poster: 'https://m.media-amazon.com/images/S/pv-target-images/539e7b72534bc54dc562509a3e54bbf21303bceed711e2506810f301190fa353.jpg',
      title: 'Talk to Me',
      duration: '1 h 34 min',
      rating: 'IMDb 7.1',
      synopsis: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      yearReleased: '2023',
      genres: 'Horror • Suspense • Thriller',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/682e6f86a09518065203c83b564972ea737c0f2b5d610975238d150fbdb78082._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '70', poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZAFGJLQKxecWJPXU5THClrOq6EcRSLFEBKPlJuudNjP7cX4BAw4JjfLnChoKKbsLqQwavrFZ5TjhWB-qcP66K5GtLzCTzwbWZtbPuQqizXaL_DFKERDnOzxRr2qWvF7oz_bBhET7Mf-I/w1200-h630-p-k-no-nu/cabininthewoods.jpg',
      title: 'The Cabin in the Woods',
      duration: '1 h 31 min',
      rating: 'IMDb 7.0',
      synopsis: 'When five college friends (Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz, Jesse Williams) arrive at a remote forest cabin for a little vacation, little do they expect the horrors that await them. One by one, the youths fall victim to backwoods zombies, but there is another factor at play. Two scientists (Richard Jenkins, Bradley Whitford) are manipulating the ghoulish goings-on, but even as the body count rises, there is yet more at work than meets the eye.',
      yearReleased: '2012',
      genres: 'Suspense • Horror • Harrowing • Terrifying',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/72d656c0acf84874405fcfd8e295bb851e87ced0b48298ea421c6170d225e7f1.jpg',
      trailerUrl: undefined
    },
    {
      id: '71', poster: 'https://m.media-amazon.com/images/S/pv-target-images/53dc71cee5197679ac5f73aa38821a877dccb6a6bc858b0a113440e20209deb9.jpg',
      title: 'Ouija',
      duration: '1 h 25 min',
      rating: 'IMDb 4.5',
      synopsis: 'Following the sudden death of her best friend, Debbie, Laine finds an antique Ouija board in Debbies room and tries to use it to say goodbye. Instead, she makes contact with a spirit that calls itself DZ. As strange events begin to occur, Laine enlists others to help her determine DZs identity and what it wants. As the friends delve deeper, they find that Debbies mysterious death was not unique, and that they will suffer the same fate unless they learn how to close the portal they have opened.',
      yearReleased: '2014',
      genres: 'Horror • Suspense • Eerie • Ominous',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/734656a90aec89f94ff68190bf2d80b1471e0d00a083b19bce40c4cecf68896e._UR1920,1080_SX720_FMjpg_.jpg',
      trailerUrl: undefined
    },
    {
      id: '72', poster: 'https://m.media-amazon.com/images/S/pv-target-images/bbf6bf4d7c338c0c85904685bec4caafb789d987bc2c07bf5d88d3f8153f03b1._UR1920,1080_SX720_FMjpg_.jpg',
      title: 'Satyaprem Ki Katha',
      duration: '2 h 23 min',
      rating: 'IMDb 6.7',
      synopsis: 'Sattu is a good hearted but good for nothing LLB fail guy who dreams of marrying the IT girl of Ahmedabad Katha, a girl way out of his league. However fate has other plans and Katha and he end up getting married, much to Katha’s dismay. From here on starts Sattu’s tryst to make his wife fall in love with him and how while doing so, he ends up discovering himself and proves to be a worthy husband!',
      yearReleased: '2023',
      genres: 'Drama • Romance • International • Comedy',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/satyaprem-ki-katha-box-office-day-3-early-trends-kartik-aaryan-kiara-advanis-rom-com-scores-a-double-digit-saturday-01-1068x561.jpg',
      trailerUrl: undefined
    },
    {
      id: '73', poster: 'https://m.media-amazon.com/images/S/pv-target-images/c78d1ae888e84f292265d3dbd01e56ca5dcf08a0837feec4bcb102524073164f._UR1920,1080_.png',
      title: 'The Map of Tiny Perfect Things',
      duration: '1 h 39 min',
      rating: 'IMDb 6.8',
      synopsis: 'The story of two teenagers trapped in an endless time loop who set out to find all the tiny things that make that one day perfect.',
      yearReleased: '2021',
      genres: 'Comedy • Fantasy • Feel-good • Quirky',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://www.elblogdeyes.com/wp-content/uploads/2021/02/the-map-of-tiny-perfect-things.jpg',
      trailerUrl: undefined
    },
    {
      id: '74', poster: 'https://m.media-amazon.com/images/S/pv-target-images/76846198b7323ebf65ce82676f78e890948038a2d88cd652eb9b82b8b7a6cabb.jpg',
      title: 'Yodha',
      duration: '2 h 10 min',
      rating: 'IMDb 5.7',
      synopsis: 'When a group of terrorists hijack a passenger plane, an off-duty soldier crafts a plan to thwart the hijackers and safeguard the passengers survival despite the engines failure.',
      yearReleased: '2024',
      genres: 'Action • Drama • Suspense',
      agerating: 'U/A 16+',
      Agerating: undefined,
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/06911ec572774daadb35485922d31d35e86c48f9b53fbb725b3773d59ee7951a._SX1080_FMjpg_.jpg',
      trailerUrl: undefined
    },
  ],
  '4': [
    {
      id: '66',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/9e064ef965ce668b14fb024006d7821c60bfa89f6146db93c4fbae3c07d3cf9e.jpg',
      title: 'Peter Rabbit',
      duration: '1h 35m',
      rating: 'IMDb 6.8',
      synopsis: 'Peter Rabbit and his family must confront the angry farmer and his two mischievous nephews in this fun-filled adventure.',
      yearReleased: '2018',
      genres: 'Animation • Adventure • Comedy',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/9e064ef965ce668b14fb024006d7821c60bfa89f6146db93c4fbae3c07d3cf9e.jpg',
      trailerUrl: undefined
    },
    {
      id: '67',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/5319a73638e4ddbaddfe0e5026317aa0f3167a0cfd5ac25872fd1341eff9a97d.jpg',
      title: 'Lost in Oz',
      duration: '30m per episode',
      rating: 'IMDb 7.6',
      synopsis: 'Dorothy and her dog Toto embark on an adventurous journey through the magical land of Oz.',
      yearReleased: '2015',
      genres: 'Animation • Adventure • Family',
      agerating: 'TV-Y7',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/5319a73638e4ddbaddfe0e5026317aa0f3167a0cfd5ac25872fd1341eff9a97d.jpg',
      trailerUrl: undefined
    },
    {
      id: '68',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/8dc208598ef6f0ae14518140e425932388b19189276a5de7969e739acaa06ae5.jpg',
      title: 'Tobot',
      duration: '20m per episode',
      rating: 'IMDb 6.5',
      synopsis: 'A group of young heroes pilots transforming robots to protect their city from various threats.',
      yearReleased: '2010',
      genres: 'Animation • Sci-Fi',
      agerating: 'TV-Y',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/8dc208598ef6f0ae14518140e425932388b19189276a5de7969e739acaa06ae5.jpg',
      trailerUrl: undefined
    },
    {
      id: '69',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/4929f86bfb78512f24a23d2e1326123a23786ffb663fa7242aca12fb7b104a8a.jpg',
      title: 'Princess & Dragon',
      duration: '1h 20m',
      rating: 'IMDb 7.0',
      synopsis: 'A magical tale about a princess who must defeat a fierce dragon to save her kingdom.',
      yearReleased: '2018',
      genres: 'Animation • Adventure • Family',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/4929f86bfb78512f24a23d2e1326123a23786ffb663fa7242aca12fb7b104a8a.jpg',
      trailerUrl: undefined
    },
    {
      id: '70',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/09296c2bc98bca51af378a2c877ad2647ac5013fd1af03ddd3aaa15ba94d4f0b.jpg',
      title: 'Pataliputra City of Dead',
      duration: '1h 40m',
      rating: 'IMDb 6.9',
      synopsis: 'A historical drama about the ancient city of Pataliputra and its mysterious past.',
      yearReleased: '2019',
      genres: 'Drama • History',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/09296c2bc98bca51af378a2c877ad2647ac5013fd1af03ddd3aaa15ba94d4f0b.jpg',
      trailerUrl: undefined
    },
    {
      id: '71',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/6344650cb379b51ff2d1c75aebfd6f5a6939c11ce325ce77bef959faff91d82f.jpg',
      title: 'Just Add Magic',
      duration: '25m per episode',
      rating: 'IMDb 7.5',
      synopsis: 'Three friends discover a mysterious cookbook and embark on magical adventures.',
      yearReleased: '2015',
      genres: 'Adventure • Family • Fantasy',
      agerating: 'TV-G',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/6344650cb379b51ff2d1c75aebfd6f5a6939c11ce325ce77bef959faff91d82f.jpg',
      trailerUrl: undefined
    },
    {
      id: '72',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/b370086cf8f8c6e2b9dc7f536fe890f1634d17ee1ac947f9edc6e8d03e0bd2f0.jpg',
      title: 'Spongebob Movie',
      duration: '1h 27m',
      rating: 'IMDb 7.0',
      synopsis: 'SpongeBob and Patrick go on a wild adventure to retrieve King Neptune\'s stolen crown.',
      yearReleased: '2004',
      genres: 'Animation • Adventure • Comedy',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/b370086cf8f8c6e2b9dc7f536fe890f1634d17ee1ac947f9edc6e8d03e0bd2f0.jpg',
      trailerUrl: undefined
    },
    {
      id: '73',
      poster: 'https://fwmedia.fandomwire.com/wp-content/uploads/2024/04/08115744/batman0-1024x576.jpg',
      title: 'Batman',
      duration: '2h 10m',
      rating: 'IMDb 8.0',
      synopsis: 'Batman faces a new threat in Gotham City while grappling with his own inner demons.',
      yearReleased: '2024',
      genres: 'Action • Adventure • Crime',
      agerating: 'PG-13',
      Agerating: 'undefined',
      modalPoster: 'https://fwmedia.fandomwire.com/wp-content/uploads/2024/04/08115744/batman0-1024x576.jpg',
      trailerUrl: undefined
    },
    {
      id: '74',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/2f451676c0e22537f2bbb33d31ae263b97e34ba345f067f9e3e8ff9933648578.jpg',
      title: 'Pinocchino',
      duration: '1h 15m',
      rating: 'IMDb 6.7',
      synopsis: 'A modern take on the classic tale of Pinocchio, with a new twist and adventurous plot.',
      yearReleased: '2022',
      genres: 'Animation • Adventure • Family',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://m.media-amazon.com/images/S/pv-target-images/2f451676c0e22537f2bbb33d31ae263b97e34ba345f067f9e3e8ff9933648578.jpg',
      trailerUrl: undefined
    },
    {
      id: '75',
      poster: 'https://i0.wp.com/www.rvcj.com/wp-content/uploads/2023/09/5-Green-Fold-movies.jpg?resize=1280%2C720&ssl=1',
      title: 'Curse of Damyaan',
      duration: '1h 50m',
      rating: 'IMDb 7.2',
      synopsis: 'An exciting fantasy adventure where a group of heroes must break an ancient curse.',
      yearReleased: '2023',
      genres: 'Fantasy • Adventure • Action',
      agerating: 'PG',
      Agerating: 'undefined',
      modalPoster: 'https://i0.wp.com/www.rvcj.com/wp-content/uploads/2023/09/5-Green-Fold-movies.jpg?resize=1280%2C720&ssl=1',
      trailerUrl: undefined
    },
  ],
};

const MovieCategoriesById = {
  Horror: HorrorMoviesById,
  ActionAdventure: ActionAdventureMoviesById,
  Comedy: ComedyMoviesById,
  Drama: DramaMoviesById,
  Top: TopMoviesById,
  Fantasy: FanatasyMoviesById,
  RecentlyAdded: RecentlyAddedMoviesById,
};


const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProps>();
  const { movieId } = route.params;
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);
  const [clickType, setClickType] = useState<'single' | 'long'>('single');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(1); // Default to season 1
  const [episodes, setEpisodes] = useState<{ poster: string; title: string; Synopsis: string; year: string; duration: string }[]>([]);
  const [isTrailerModalVisible, setIsTrailerModalVisible] = useState(false);
  const [isSeasonDropdownVisible, setSeasonDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Movie not found!</Text>
      </View>
    );
  }

  const horrorMovies = HorrorMoviesById[movieId] || [];
  const actionAdventureMovies = ActionAdventureMoviesById[movieId] || [];
  const comedyMovies = ComedyMoviesById[movieId] || [];
  const dramaMovies = DramaMoviesById[movieId] || [];
  const topMovies = TopMoviesById[movieId] || [];
  const fantasyMovies = FanatasyMoviesById[movieId] || [];
  const recentlyAddedMovies = RecentlyAddedMoviesById[movieId] || [];

  const handleImageLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handlePosterPress = (movieId: string) => {
    console.log(`Poster with movie ID ${movieId} pressed`);
    // Add functionality, like opening a modal or navigating to a details screen
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  const toggleSeasonDropdown = () => {
    setSeasonDropdownVisible(!isSeasonDropdownVisible);
  };

  const handleSeasonSelect = (season: number) => {
    if (!selectedMovie) {
      console.warn("No movie selected");
      return;
    }

    setSelectedSeason(season);
    setSeasonDropdownVisible(false);

    if (selectedMovie.seasonData && selectedMovie.seasonData[season]) {
      const seasonData = selectedMovie.seasonData[season];
      const selectedSeasonData = selectedMovie.seasonData?.[season];
      setEpisodes(selectedSeasonData?.episodes || []);
      const updatedMovie = {
        ...selectedMovie,
        poster: seasonData.poster || selectedMovie.poster,
        synopsis: seasonData.synopsis || selectedMovie.synopsis,
      };
      console.log("Updated Movie:", updatedMovie); // Debug log
      setSelectedMovie(updatedMovie);
    } else {
      console.warn("Season data not available for the selected season");
    }
  };

  const handleImageLongPress = () => {
    const options = ['Play', 'Play Trailer', 'Add to WatchList', 'Download', 'Share', 'View Details', 'Cancel'];
    const cancelButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex: -1,
        title: 'MovieCategoriesById',
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log('Play selected');
            break;
          case 1:
            console.log('Play Trailer selected');
            break;
          case 2:
            console.log('Add to WatchList selected');
            break;
          case 3:
            console.log('Download selected');
            break;
          case 4:
            console.log('Share selected');
            break;
          case 5:
            console.log('View Details selected');
            break;
          default:
            break;
        }
      }
    );
  };

  const handleMovieSelect = (movie: MovieItem) => {
    setSelectedMovie(movie);
  };

  const handleImagePress = (item: MovieItem) => {
    setSelectedMovie(item);
    setClickType('single');
    setModalVisible(true);
  };

  const handleLongPress = (item: MovieItem) => {
    setSelectedMovie(item);
    setClickType('long');
    setModalVisible(true);
  };

  const toggleTrailerModal = () => {
    setIsTrailerModalVisible(!isTrailerModalVisible);
  };

  const renderMovieItem = ({ item }: { item: MovieItem }) => (
    <TouchableOpacity
      onPress={() => handleImagePress(item)}
      onLongPress={() => handleLongPress(item)} // Long press triggers modal
    >
      <View style={styles.trendingItemContainer}>
        <Image source={{ uri: item.poster }} style={styles.trendingPoster} resizeMode="cover" />
      </View>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const getSectionTitle = () => {
    if (movieId === '4') {
      return (
        <Text style={styles.sectionTitle}>
          <Text style={styles.primeText}>Prime</Text> Kids and family movies
        </Text>
      );
    }
    return (
      <Text style={styles.sectionTitle}>
        <Text style={styles.primeText}>Prime</Text> Horror movies
      </Text>
    );
  };

  interface ModalStyles {
    modalTitle?: TextStyle;
    modalGenres?: TextStyle;
    modalSynopsis?: TextStyle;
    modalrating?: TextStyle;
    includedContainer?: ViewStyle;
    includedwithPrime?: TextStyle;
    includedimage?: ImageStyle;
    playButtonContainer?: ViewStyle;
    playButton?: ViewStyle;
    playButtonText?: TextStyle;
    downloadButtonContainer?: ViewStyle;
    downloadButton?: ViewStyle;
    downloadButtonText?: TextStyle;
    modalActionButtons?: ViewStyle;
    modalActionButton?: ViewStyle;
    modalActionIcon?: ImageStyle;
    actionButtonText?: TextStyle;
    modalDetailsContainer?: ViewStyle;
    modalRating?: TextStyle;
    modalDuration?: TextStyle;
    modalYear?: TextStyle;
    modalButtonContainer?: ViewStyle;
    uaButton?: ViewStyle;
    uaButtonText?: TextStyle;
    fourKButton?: ViewStyle;
    fourKButtonText?: TextStyle;
    hdrButton?: ViewStyle;
    hdrButtonText?: TextStyle;
    modalSubtitleButton?: ViewStyle;
    subtitleImage?: ImageStyle;
    modalADButton?: ViewStyle;
    modalADText?: TextStyle;
    seasonButton?: ViewStyle;
    seasonButtonText?: TextStyle;
    seasonButtonContainer?: ViewStyle;
    seasonDropdown?: ViewStyle;
    seasonDropdownItem?: ViewStyle;
    seasonDropdownText?: TextStyle;
    // Add other style properties as needed
  }

  const getModalStyles = (id: string, selectedSeason?: number): ModalStyles => {
    switch (id) {
      case '5': //ID for Annabelle (2014)
        return {
          modalGenres: {
            left: -32,
            top: -325,
          },
          modalRating: {
            left: -130,
          },
          modalDuration: {
            left: -80,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 47,
          },
          hdrButton: {
            top: -100,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '6': // ID for Insidious (2009)
        return {
          modalTitle: {
            left: 17,
            top: 174,
          },
          modalGenres: {
            left: -28,
          },
          includedwithPrime: {
            top: 148,
          },
          includedimage: {
            top: 148,
          },
          modalRating: {
            left: -126,
          },
          modalDuration: {
            left: -70,
          },
          modalYear: {
            left: -127,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 46,
          },
          hdrButton: {
            top: -100,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '7': // ID for The Conjuring 2 (2009)
        return {
          modalTitle: {
            left: 10,
            top: 180,
          },
          modalGenres: {
            left: -25,
          },
          includedwithPrime: {
            top: 152,
          },
          includedimage: {
            top: 152,
          },
          modalRating: {
            left: -135,
          },
          modalDuration: {
            left: -80,
          },
          modalYear: {
            left: -135,
          },
          uaButton: {
            top: -26,
            left: -134,
          },
          fourKButton: {
            left: 40,
          },
          hdrButton: {
            top: -101,
            left: 124,
          },
          modalSubtitleButton: {
            top: -146,
            left: -72,
          },
          modalADButton: {
            top: -95,
            left: -13,
          },
        };
      case '8': //ID for the Annabelle Creation (2017)
        return {
          modalTitle: {
            left: 35,
            top: 180,
          },
          modalGenres: {
            left: -25,
          },
          includedwithPrime: {
            top: 152,
          },
          includedimage: {
            top: 152,
          },
          modalRating: {
            left: -126,
          },
          modalDuration: {
            left: -75,
          },
          modalYear: {
            left: -126,
          },
          uaButton: {
            top: -26,
            left: -134,
          },
          fourKButton: {
            left: 40,
          },
          hdrButton: {
            top: -101,
            left: 124,
          },
          modalSubtitleButton: {
            top: -146,
            left: -72,
          },
          modalADButton: {
            top: -95,
            left: -13,
          },
        };
      case '9': //ID for the Insidious Red Door
        return {
          modalTitle: {
            left: 30,
          },
          modalGenres:
          {
            left: -40,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          modalDuration: {
            left: -70,
          },
          uaButton: {
            top: -26,
            left: -134,
          },
          fourKButton: {
            left: 40,
          },
          hdrButton: {
            top: -101,
            left: 124,
          },
          modalSubtitleButton: {
            top: -146,
            left: -72,
          },
          modalADButton: {
            top: -95,
            left: -13,
          },
        };
      case '10': //ID for The Conjuring The Devil Made Me Do It
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 18, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -33,
          },
          modalRating: {
            left: -117,
          },
          modalYear:
          {
            left: -117,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '11': //ID for the Bhoot Part One - The Haunted Ship
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 20, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -20,
          },
          modalRating: {
            left: -125,
          },
          modalYear: {
            left: -125,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };

      case '12': //ID for Final Destination 3
        return {
          modalTitle: {
            left: 30,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };

      case '13': //ID for the It(2017)
        return {
          modalTitle: {
            left: -24,
          },
          modalGenres: {
            left: -35,
          },
          modalRating: {
            left: -132,
          },
          modalYear: {
            left: -132,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '14': //ID for the Nun
        return {
          modalTitle: {
            left: -25,
          },
          modalGenres: {
            left: -45,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '15': // ID for The Vampire Diaries
        return {
          modalTitle: {
            top: 180,
            left: 38,
          },
          includedContainer: {
            top: -10,
          },
          playButtonContainer: {
            top: -10,
          },
          downloadButtonContainer: {
            top: -10,
          },
          modalActionButtons: {
            top: -10,
          },
          modalSynopsis: {
            top: 20,
          },
          modalGenres: {
            left: -25,
            top: -330,
          },
          modalRating: {
            top: 6,
          },
          modalDuration: {
            top: -2,
            left: -76,
          },
          modalYear: {
            top: -35,
          },
          uaButton: {
            top: -20,
            left: -134,
          },
          fourKButton: {
            left: 48,
            top: -58,
          },
          hdrButton: {
            top: -96,
            left: 134,
          },
          modalSubtitleButton: {
            top: -141,
            left: -70,
          },
          modalADButton: {
            top: -93,
            left: -10,
          },
        };

      case '16': // ID for The Originals
        return {
          modalTitle: {
            left: -0,
          },
          modalRating: {
            left: -110,
          },
          modalYear: {
            left: -118,
          },
          modalDuration: {
            left: -70,
            top: -20
          },
          uaButton: {
            top: -210,
            left: -131,
          },
          fourKButton: {
            left: 47,
            top: -247,
          },
          hdrButton: {
            top: -285,
            left: 131,
          },
          modalSubtitleButton: {
            top: -330,
            left: -66,
          },
          modalADButton: {
            top: -187,
            left: -10,
          },
        };
      case '17': // ID for Legacies
        return {
          modalTitle: {
            top: 180,
            left: -0,
          },
          modalGenres: {
            left: -14,
            top: -320,
          },
          modalRating: {
            top: 55,
          },
          modalYear: {
            top: 20,
          },
          modalDuration: {
            top: 52,
          },
          uaButton: {
            left: -135,
            top: 25,
          },
          fourKButton: {
            top: -13,
          },
          modalSubtitleButton: {
            left: -69,
            top: -96,
          },
          modalADButton: {
            left: -10,
            top: -70,
          },
          hdrButton: {
            top: -52,
            left: 132,
          },
        };
      case '18': // ID for the Teen Wolf
        return {
          modalTitle: {
            top: 182,
            left: -16,
          },
          modalGenres: {
            left: -38,
          },
          modalRating: {
            left: -120,
          },
          modalYear: {
            left: -120,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '19': //ID for Reign
        return {
          modalTitle: {
            top: 180,
            left: -40,
          },
          modalGenres: {
            left: -10,
          },
          modalRating: {
            left: -110,
          },
          modalYear: {
            left: -110,
          },
          modalDuration: {
            left: -50,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '20': //ID for the I Know What You Did Last Summer
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 18, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -22,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '21': //ID for The Winchesters
        return {
          modalGenres: {
            left: -27,
          },
          modalRating: {
            left: -120,
          },
          modalYear: {
            left: -120,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '22': //ID for The Walking Dead
        return {
          modalGenres: {
            left: -40,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '23': //ID for the Sherlock
        return {
          modalTitle: {
            left: -22,
          },
          modalGenres: {
            left: -37,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '24': //ID for the Night Sky
        return {
          modalTitle: {
            left: -20,
          },
          modalGenres: {
            left: - 14,
          },
          modalRating: {
            top: 40,
          },
          modalYear: {
            top: 2,
          },
          modalDuration: {
            top: 36,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '25': //ID for The Exorcist
        return {
          modalTitle: {
            left: -5,
          },
          modalGenres: {
            left: -65,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '26': //ID for the Star
        return {
          modalTitle: {
            left: -50,
          },
          modalGenres: {
            left: -78,
          },
          modalRating: {
            left: -129,
          },
          modalYear: {
            left: -129,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '27': //ID for the Ponniyan Selvan Part 1
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -10,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '28': //ID for Yeh jawani hai deewani
        return {
          modalTitle: {
            left: 50,
          },
          modalGenres: {
            left: -50,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '29': //ID for Ponniyan Selvan Part 2
        return {
          modalTitle: {
            left: 70,
            top: 180,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            top: -330,
            width: '80%',
            overflow: 'hidden',
          },
          modalYear: {
            top: -10,
          },
          modalDuration: {
            top: 24,
          },
          modalRating: {
            top: 33,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '30': //ID for Maidaan
        return {
          modalTitle: {
            left: -23,
          },
          modalGenres: {
            left: -65,
          },
          modalRating: {
            left: -127,
          },
          modalYear: {
            left: -127,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '31': //ID for Rocku Aur Rani Kii Prem Kahaani
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -127,
            top: 37,
          },
          modalYear: {
            left: -127,
            top: -5,
          },
          modalDuration: {
            top: 28,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -47,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -87,
          },
          hdrButton: {
            top: -85,
            left: 132,
          },
        };
      case '32': // Kalank
        return {
          modalTitle: {
            left: -30,
          },
          modalGenres: {
            left: -55,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -131,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 129,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '33': //Id for Jug Jugg Jeeyo
        return {
          modalGenres: {
            fontSize: 14,
            top: -332,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalYear: {
            top: -12,
          },
          modalDuration: {
            top: 21,
          },
          modalRating: {
            top: 29,
          },
          uaButton: {
            top: -18,
            left: -129,
          },
          fourKButton: {
            top: -58,
            left: 45,
          },
          hdrButton: {
            top: -97,
            left: 127,
          },
          modalSubtitleButton: {
            top: -139,
            left: -66,
          },
          modalADButton: {
            top: -92,
            left: -10,
          },
        };
      case '34': //ID for the Bawaal
        return {
          modalTitle: {
            left: -30,
          },
          modalGenres: {
            top: -337,
            left: -50,
          },
          uaButton: {
            top: -26,
            left: -131,
          },
          fourKButton: {
            top: -64,
            left: 45,
          },
          hdrButton: {
            top: -102,
            left: 129,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '35': //ID for Kapoor and sons
        return {
          modalGenres: {
            left: -14,
          },
          uaButton: {
            top: -26,
            left: -131,
          },
          fourKButton: {
            top: -64,
            left: 45,
          },
          hdrButton: {
            top: -102,
            left: 129,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '36': //ID for Iron Man 2
        return {
          modalTitle: {
            left: -10,
          },
          modalGenres: {
            left: -50,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -131,
          },
          fourKButton: {
            top: -64,
            left: 45,
          },
          hdrButton: {
            top: -102,
            left: 129,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '37': //ID for Master
        return {
          modalTitle: {
            left: -30,
          },
          modalGenres: {
            left: -50,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -131,
          },
          fourKButton: {
            top: -64,
            left: 45,
          },
          hdrButton: {
            top: -102,
            left: 129,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '38': //ID for Saaho
        return {
          modalTitle: {
            left: -37,
          },
          modalGenres: {
            left: -15,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '39': //ID for Dear Comrade
        return {
          modalTitle:
          {
            left: 6,
          },
          modalGenres: {
            left: -53,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '40': //The Witch: Part 1 - The Subversion
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -45,
          },
          modalRating: {
            left: -138,
          },
          modalYear: {
            left: -138,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '41': //ID for Spiderman no way home
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres:
          {
            left: -30,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -134,
            top: 40,
          },
          modalYear: {
            left: -134,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -90,
          },
          uaButton: {
            top: -8,
            left: -131,
          },
          fourKButton: {
            top: -48,
            left: 47,
          },
          hdrButton: {
            top: -87,
            left: 130,
          },
          modalSubtitleButton: {
            top: -129,
            left: -66,
          },
          modalADButton: {
            top: -87,
            left: -10,
          },
        };
      case '42': //ID for Iron Man
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres:
          {
            left: -30,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -138,
            top: 40,
          },
          modalYear: {
            left: -138,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -90,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -46,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -86,
          },
          hdrButton: {
            top: -84,
            left: 132,
          },
        };
      case '43': //ID for Avengers: Endgame
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres:
          {
            left: -30,
            top: -320,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -136,
            top: 29,
          },
          modalYear: {
            left: -136,
            top: -15,
          },
          modalDuration: {
            top: 19,
            left: -90,
          },
          uaButton: {
            top: -26,
            left: -133,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -67,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '44': //ID for Mahaan
        return {
          modalTitle: {
            left: -20,
          },
          modalGenres: {
            left: -31,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '45': //ID for KGF Chapter 2
        return {
          modalTitle: {
            left: 10,
          },
          modalGenres: {
            left: -13,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -129,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '46': // ID for the Joker
        return {
          modalTitle: {
            left: -30,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -46,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -86,
          },
          hdrButton: {
            top: -84,
            left: 132,
          },
        };
      case '47': //ID for The Dark Knight Rises
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -35,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '48': //ID for Red white & Royal Blue
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -60,
          },
          modalRating: {
            left: -137,
          },
          modalYear: {
            left: -137,
          },
          modalDuration: {
            left: -80,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '49': //ID for Twilight
        return {
          modalTitle: {
            left: -25,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '50': //ID for The Twilight Saga: Eclipse
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -9,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '51': //ID for The Twilight Saga: New Moon
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -30,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '52': //ID for The Twilight Saga: Breaking Dawn
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -60,
          },

        };
      case '53': //ID for Final Destination
        return {
          modalTitle: {
            left: 30,
          },
          modalGenres: {
            left: -60,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -47,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -87,
          },
          hdrButton: {
            top: -85,
            left: 132,
          },
        };
      case '54': //ID for 777 Charlie
        return {
          modalTitle: {
            left: -5,
          },
          modalGenres: {
            left: -55,
          },
          modalRating: {
            left: -128,
          },
          modalYear: {
            left: -128,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -47,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -87,
          },
          hdrButton: {
            top: -85,
            left: 132,
          },
        };
      case '55': //ID for Thor
        return {
          modalTitle: {
            left: -40,
          },
          modalGenres: {
            left: -17,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '56': //ID for Aquaman
        return {
          modalTitle: {
            left: -15,
          },
          modalGenres: {
            left: -5,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },

        };
      case '57': //ID for Ant-Man and The Wasp Quantumania
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -15,
          },
          modalRating: {
            left: -136,
            top: 40,
          },
          modalYear: {
            left: -136,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -90,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '58': //ID for In the Heart of the Sea
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '59': //ID for Power Rangers
        return {
          modalGenres: {
            left: -10,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },

        };
      case '60': //ID for The Amazing Spider-Man
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22,
          },
          modalGenres: {
            left: -24,
          },
          modalRating: {
            left: -125,
          },
          modalYear: {
            left: -125,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '61': // ID for Wonder Women
        return {
          modalGenres: {
            left: -7,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '62': //ID for The Thor : The Dark World
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -10,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },

        };
      case '63': //ID for the Don't Knock Twice
        return {
          modalTitle: {
            left: 30,
          },
          modalGenres: {
            left: -10,
          },
          uaButton: {
            top: -26,
            left: -132,
          },
          fourKButton: {
            left: 45,
          },
          hdrButton: {
            top: -101,
            left: 127,
          },
          modalSubtitleButton: {
            top: -146,
            left: -66,
          },
          modalADButton: {
            top: -95,
            left: -10,
          },
        };
      case '64': //ID for the Thor Love and Thunder
        return {
          modalTitle: {
            left: 60,
          },
          modalRating: {
            left: -130,
            top: 40,
          },
          modalYear: {
            left: -130,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -80,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '65': //ID for the Venom
        return {
          modalTitle: {
            left: -30,
          },
          modalGenres: {
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -130,
            top: 40,
          },
          modalYear: {
            left: -130,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -80,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '66': //ID for Imaginary
        return {
          modalTitle: {
            left: -11,
          },
          modalGenres: {
            left: -100,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '67': //ID for Venom: Let There Be Carnage
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
            top: -343,
          },
          modalRating: {
            left: -130,
            top: 25,
          },
          modalYear: {
            left: -130,
            top: -15,
          },
          modalDuration: {
            top: 18,
            left: -80,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '68': //ID for Child's Play
        return {
          modalTitle: {
            left: -7,
          },
          modalGenres: {
            left: -19,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '69': //ID for Talk to Me
        return {
          modalTitle: {
            left: -8,
          },
          modalGenres: {
            left: -59,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '70': //ID for The Cabin in the Woods
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            top: -345,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '71': //ID for Ouija
        return {
          modalTitle: {
            left: -40,
          },
          modalGenres: {
            top: -330,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '72': //ID for Satyaprem ki Katha
        return {
          modalTitle: {
            left: 40,
          },
          modalGenres:
          {
            left: -30,
            top: -324,
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalRating: {
            left: -132,
            top: 40,
          },
          modalYear: {
            left: -132,
            top: -4,
          },
          modalDuration: {
            top: 30,
            left: -80,
          },
          uaButton: {
            left: -135,
            top: -9,
          },
          fourKButton: {
            top: -46,
          },
          modalSubtitleButton: {
            left: -69,
            top: -129,
          },
          modalADButton: {
            left: -10,
            top: -86,
          },
          hdrButton: {
            top: -84,
            left: 132,
          },
        };
      case '73': //ID for The Map of Tiny Perfect Things
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -15,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '74': //ID for Yodha
        return {
          modalTitle: {
            left: -35,
          },
          modalGenres: {
            left: -65,
          },
          modalRating: {
            left: -130,
          },
          modalYear: {
            left: -130,
          },
          uaButton: {
            top: -12,
            left: -132,
          },
          fourKButton: {
            top: -52,
            left: 45,
          },
          hdrButton: {
            top: -90,
            left: 127,
          },
          modalSubtitleButton: {
            top: -133,
            left: -66,
          },
          modalADButton: {
            top: -89,
            left: -10,
          },
        };
      case '5': //ID for PAW Patrol: The Mighty Movie
        return {
          modalTitle: {
            left: 70,
            top: 175,
            fontSize: 22, // Adjust font size as needed
            fontWeight: 'bold',
            width: '80%', // Adjust width to ensure truncation
            overflow: 'hidden',
          },
          modalGenres: {
            left: -45,
          },
          modalRating: {

          },
        };
      default:
        return {}; // Return default styles or an empty object if the ID is not found
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => handlePosterPress(movie.id)}>
        <Image
          source={{ uri: movie.poster }}
          style={[
            styles.posterImage,
            movie.id.toString() === '1' && styles.ConjuringPoster,
            movie.id.toString() === '2' && styles.vampireDiariesPoster,
            movie.id.toString() === '3' && styles.originalsPoster,
            movie.id.toString() === '4' && styles.tomandjerrythemovieposter,
          ]}
          resizeMode="cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
      {error && <Text style={styles.errorText}>Failed to load image</Text>}
      {getSectionTitle()}
      <FlatList
        data={horrorMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      {/* Repeat FlatList for other categories */}
      <Text style={styles.webseriesTitle}>
        <Text style={styles.primeText}>Prime</Text> Amazon Original series
      </Text>
      <FlatList
        data={actionAdventureMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      <Text style={styles.recommendedMoviesTitle}>
        <Text style={styles.primeText}>Prime</Text> Amazon Latest Movies
      </Text>
      <FlatList
        data={comedyMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      <Text style={styles.popularMoviesTitle}>
        <Text style={styles.primeText}>Prime</Text> Action and Adventure Movies
      </Text>
      <FlatList
        data={dramaMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      <Text style={styles.TopMoviesTitle}>
        <Text style={styles.primeText}>Prime</Text> Top Movies
      </Text>
      <FlatList
        data={topMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      <Text style={styles.FantasyMoviesTitle}>
        <Text style={styles.primeText}>Prime</Text> Fantasy Movies
      </Text>
      <FlatList
        data={fantasyMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      <Text style={styles.RecentlyAddedMoviesTitle}>
        <Text style={styles.primeText}>Prime</Text> Recently Added Movies
      </Text>
      <FlatList
        data={recentlyAddedMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />
      {selectedMovie && (
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <ModalHeader />
            <ScrollView contentContainerStyle={styles.modalContent}>
              {clickType === 'single' ? (
                <>
                  <Image
                    source={{ uri: selectedMovie.modalPoster || selectedMovie.poster }}
                    style={styles.modalPoster}
                    resizeMode="cover"
                  />

                  {/* Title */}
                  <Text style={[styles.modalTitle, getModalStyles(selectedMovie.id).modalTitle]}>
                    {selectedMovie.title}
                  </Text>

                  {/* Season Button */}
                  {selectedMovie.seasons && selectedMovie.seasons.length > 1 && (
                    <View style={styles.modalseasonButtonContainer}>
                      <TouchableOpacity
                        onPress={toggleSeasonDropdown}
                        style={[styles.seasonButton, getModalStyles(selectedMovie.id, selectedSeason).seasonButton]}
                      >
                        <Text style={[styles.modalseasonButtonText, getModalStyles(selectedMovie.id, selectedSeason).seasonButtonText]}>
                          Season {selectedSeason}
                        </Text>
                      </TouchableOpacity>
                      {isSeasonDropdownVisible && (
                        <View style={[styles.seasonDropdown, getModalStyles(selectedMovie.id, selectedSeason).seasonDropdown]}>
                          {selectedMovie.seasons.map((season) => (
                            <TouchableOpacity
                              key={season}
                              style={[styles.seasonDropdownItem, getModalStyles(selectedMovie.id, selectedSeason).seasonDropdownItem]}
                              onPress={() => handleSeasonSelect(season)}
                            >
                              <Text style={[styles.seasonDropdownText, getModalStyles(selectedMovie.id, selectedSeason).seasonDropdownText]}>
                                Season {season}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      )}
                    </View>
                  )}

                  {/* Season Episodes */}
                  {episodes.length > 0 && (
                    <View style={styles.episodesContainer}>
                      <Text style={styles.episodesTitle}>Episodes</Text>
                      {episodes.map((episode: Episode, index: number) => (
                        <View key={index} style={styles.episodeItem}>
                          <Text style={styles.episodeTitle}>{episode.title}</Text>
                          <Text style={styles.episodeDuration}>{episode.duration}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Included with Prime */}
                  <View style={[styles.includedContainer, getModalStyles(selectedMovie.id).includedContainer]}>

                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/256/3388/3388577.png' }}
                      style={[styles.includedImage, getModalStyles(selectedMovie.id).includedimage]}
                    />
                    <Text style={[styles.includedWithPrime, getModalStyles(selectedMovie.id).includedwithPrime]}>
                      Included with Prime
                    </Text>
                  </View>

                  {/* Play Button */}
                  <View style={[styles.playButtonContainer, getModalStyles(selectedMovie.id).playButtonContainer]}>
                    <TouchableOpacity style={[styles.playButton, getModalStyles(selectedMovie.id).playButton]} onPress={() => console.log('Play')}>
                      <Text style={[styles.playButtonText, getModalStyles(selectedMovie.id).playButtonText]}>Play</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Download Button */}
                  <View style={[styles.downloadButtonContainer, getModalStyles(selectedMovie.id).downloadButtonContainer]}>
                    <TouchableOpacity style={[styles.downloadButton, getModalStyles(selectedMovie.id).downloadButton]} onPress={() => console.log('Download')}>
                      <Text style={[styles.downloadButtonText, getModalStyles(selectedMovie.id).downloadButtonText]} numberOfLines={1} ellipsizeMode="tail">
                        Download
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Action Buttons */}
                  <View style={[styles.modalActionButtons, getModalStyles(selectedMovie.id).modalActionButtons]}>
                    <TouchableOpacity
                      style={[styles.modalActionButton, styles.trailerButton, getModalStyles(selectedMovie.id).modalActionButton]}
                      onPress={toggleTrailerModal} // Open trailer modal on press
                    >
                      <Image
                        source={{ uri: 'https://cdn3.iconfinder.com/data/icons/cinema-outline-5/32/Trailer-512.png' }}
                        style={[styles.modalActionIcon, getModalStyles(selectedMovie.id).modalActionIcon]}
                      />
                      <Text style={[styles.actionButtonText, getModalStyles(selectedMovie.id).actionButtonText]}>Trailer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.modalActionButton, styles.watchlistButton, getModalStyles(selectedMovie.id).modalActionButton]} onPress={() => console.log('Watchlist')}>
                      <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/607/607914.png' }}
                        style={[styles.modalActionIcon, getModalStyles(selectedMovie.id).modalActionIcon]}
                      />
                      <Text style={[styles.actionButtonText, getModalStyles(selectedMovie.id).actionButtonText]}>Watchlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalActionButton, styles.likeButton, getModalStyles(selectedMovie.id).modalActionButton]} onPress={() => console.log('Like')}>
                      <Image
                        source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Like-PNG-Free-Image.png' }}
                        style={[styles.modalActionIcon, getModalStyles(selectedMovie.id).modalActionIcon]}
                      />
                      <Text style={[styles.actionButtonText, getModalStyles(selectedMovie.id).actionButtonText]}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalActionButton, styles.notForMeButton, getModalStyles(selectedMovie.id).modalActionButton]} onPress={() => console.log('Not for me')}>
                      <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126504.png' }}
                        style={[styles.modalActionIcon, getModalStyles(selectedMovie.id).modalActionIcon]}
                      />
                      <Text style={[styles.actionButtonText, getModalStyles(selectedMovie.id).actionButtonText]}>Not for me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalActionButton, styles.shareButton, getModalStyles(selectedMovie.id).modalActionButton]} onPress={() => console.log('Share')}>
                      <Image
                        source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-3-3/34/251-512.png' }}
                        style={[styles.modalActionIcon, getModalStyles(selectedMovie.id).modalActionIcon]}
                      />
                      <Text style={[styles.actionButtonText, getModalStyles(selectedMovie.id).actionButtonText]}>Share</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Synopsis */}
                  <Text style={[styles.modalSynopsis, getModalStyles(selectedMovie.id).modalSynopsis]}>
                    {selectedMovie.synopsis}
                  </Text>

                  {/* Rating, Duration, Year */}
                  <View style={[styles.modalDetailsContainer, getModalStyles(selectedMovie.id).modalDetailsContainer]}>
                    <Text style={[styles.modalRating, getModalStyles(selectedMovie.id).modalRating]}>
                      {selectedMovie.rating}
                    </Text>
                    <Text style={[styles.modalDuration, getModalStyles(selectedMovie.id).modalDuration]}>
                      {selectedMovie.duration}
                    </Text>
                    <Text style={[styles.modalYear, getModalStyles(selectedMovie.id).modalYear]}>
                      {selectedMovie.yearReleased}
                    </Text>
                  </View>

                  {/* U/A 16+ Button */}
                  <View style={[styles.modalButtonContainer, getModalStyles(selectedMovie.id).modalButtonContainer]}>
                    <TouchableOpacity style={[styles.uaButton, getModalStyles(selectedMovie.id).uaButton]} onPress={() => console.log('U/A 16+')}>
                      <Text style={[styles.uaButtonText, getModalStyles(selectedMovie.id).uaButtonText]}>U/A 16+</Text>
                    </TouchableOpacity>
                  </View>

                  {/* 4K Button */}
                  <View style={[styles.modalButtonContainer, getModalStyles(selectedMovie.id).modalButtonContainer]}>
                    <TouchableOpacity style={[styles.fourKButton, getModalStyles(selectedMovie.id).fourKButton]} onPress={() => console.log('4K UHD')}>
                      <Text style={[styles.fourKButtonText, getModalStyles(selectedMovie.id).fourKButtonText]}>4K UHD</Text>
                    </TouchableOpacity>
                  </View>

                  {/* HDR Button */}
                  <View style={[styles.modalButtonContainer, getModalStyles(selectedMovie.id).modalButtonContainer]}>
                    <TouchableOpacity style={[styles.hdrButton, getModalStyles(selectedMovie.id).hdrButton]} onPress={() => console.log('HDR10+')}>
                      <Text style={[styles.hdrButtonText, getModalStyles(selectedMovie.id).hdrButtonText]}>HDR10+</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Subtitles Button */}
                  <View style={[styles.modalSubtitleButton, getModalStyles(selectedMovie.id).modalSubtitleButton]}>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.freepik.com/512/10278/10278925.png' }}
                      style={[styles.subtitleImage, getModalStyles(selectedMovie.id).subtitleImage]}
                    />
                  </View>

                  {/* AD Button */}
                  <View style={[styles.modalButtonContainer, getModalStyles(selectedMovie.id).modalADButton]}>
                    <TouchableOpacity style={[styles.modalADButton, getModalStyles(selectedMovie.id).modalADButton]} onPress={() => console.log('AD')}>
                      <Text style={[styles.modalADText, getModalStyles(selectedMovie.id).modalADText]}>AD)))</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Languages */}
                  <Text style={[styles.modalGenres, getModalStyles(selectedMovie.id).modalGenres]}>
                    {selectedMovie.genres}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.selectedMovieTitle}>{selectedMovie.title}</Text>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Play selected')}>
                    <Text style={styles.modalButtonText}>Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Play Trailer selected')}>
                    <Text style={styles.modalButtonText}>Play Trailer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Add to Watch List selected')}>
                    <Text style={styles.modalButtonText}>Add to Watch List</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Download selected')}>
                    <Text style={styles.modalButtonText}>Download</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Share selected')}>
                    <Text style={styles.modalButtonText}>Share</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => console.log('View Details selected')}>
                    <Text style={styles.modalButtonText}>View Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                    <Text style={styles.modalButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
          </View>
        </Modal>
      )
      }
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    paddingVertical: 10,
    top: -20,
    width: 500,
    height: 400,
    fontSize: 10,
    backgroundColor: '#000',
  },
  headerContainer: {
    backgroundColor: '#000',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  option: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    flexDirection: 'row',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 25,
    resizeMode: 'contain',
    marginLeft: -30,
  },
  posterImage: {
    width: '120%',
    height: 230,
    marginTop: '-95%',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'black',
    marginVertical: 4, // Default margin for other section titles
    alignSelf: 'flex-start',
    marginTop: -120,
    marginLeft: 10,
    top: -10,
  },
  poster: {
    flex: 1,
  },
  ConjuringPoster: {
    alignSelf: 'flex-start', // This will align the poster to the left
    left: 0,
  },
  vampireDiariesPoster: {
    alignSelf: 'flex-start', // This will align the poster to the left
    left: -63,
  },
  originalsPoster: {
    alignSelf: 'flex-start', // This will align the poster to the left
    left: -8,
    width: '103%',
    height: 230,
  },
  tomandjerrythemovieposter: {
    alignSelf: 'flex-start', // This will align the poster to the left
    left: -63,
  },
  headerScrollView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 130,
    marginLeft: -130,
  },
  primeText: {
    color: '#1399FF',
  },
  includedWithPrime: {
    fontSize: 12, // Adjust as needed
    fontWeight: 'bold',
    color: 'white', // Example color for Prime
    textAlign: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    top: 149,
    left: -110,
  },
  includedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    top: -2,
  },
  includedImage: {
    width: 10, // Adjust size as needed
    height: 10,
    marginRight: 10,
    top: 149,
    left: -105,
  },
  playButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    top: -3,
  },
  downloadButtonContainer: {
    width: 'auto', // or a fixed width if needed
    alignItems: 'center',
    marginBottom: 60,
    top: -3,
  },
  playButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    top: 140,
    left: -5,
  },
  downloadButton: {
    flexDirection: 'row',
    paddingHorizontal: 80, // Adjust padding to fit text
    paddingVertical: 14,
    backgroundColor: '#31363F',
    borderRadius: 5,
    minWidth: 100,
    top: 70,
    left: -5,
  },
  playButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    overflow: 'hidden',
    minWidth: 200,
    flexShrink: 1,
  },
  downloadButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    overflow: 'hidden',
    minWidth: 200,
    flexShrink: 1,
  },
  toggleSeasonsButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleSeasonsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seasonButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  selectedSeasonButton: {
    backgroundColor: '#aaa',
  },
  trendingList: {
    paddingHorizontal: 10,
  },
  trendingItemContainer: {
    marginRight: 10,
    backgroundColor: '#000',
    overflow: 'hidden',
    alignItems: 'center',
    width: 190,
    height: 270,
    borderRadius: 7,
  },
  trendingPoster: {
    width: '100%',
    height: '38%',
    position: 'absolute',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  selectedMovieDetails: {
    padding: 10,
    backgroundColor: '#1a1a1a',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalDetailsContainer: {
    marginVertical: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    alignContent: 'flex-start',
    paddingVertical: -20,
    marginLeft: -8,
    marginTop: -10,
    fontSize: 10,
  },
  modalHeaderOption: {
    paddingHorizontal: 10,
    marginTop: -10,
  },
  modalHeaderText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: '#111',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    width: 400,
    marginBottom: -400,
  },
  modalPoster: {
    width: '110%',
    height: 230,
    resizeMode: 'cover',
    marginTop: '-8%',
    bottom: 2,
    marginBottom: -200,
    top: 10,
  },
  modalGenres: {
    fontSize: 15,
    color: 'white',
    marginVertical: 5,
    fontWeight: 'bold',
    top: -310,
    left: -20,
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: -200,
    color: '#fff',
    marginBottom: 10,
    marginTop: 40,
    top: 177,
    left: 20,
    marginVertical: 30,
    marginHorizontal: 10,
  },
  modalYear: {
    fontSize: 15,
    color: '#aaa',
    marginBottom: 5,
    top: -17,
    fontWeight: 'bold',
    left: -124,
  },
  modalRating: {
    fontSize: 15,
    color: '#aaa',
    fontWeight: 'bold',
    marginBottom: 5,
    top: 24,
    left: -124,
  },
  modalDuration: {
    fontSize: 15,
    color: '#aaa',
    fontWeight: 'bold',
    marginBottom: 10,
    top: 15,
    left: -80
  },
  modalSynopsis: {
    fontSize: 16, // Further reduced font size
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    marginTop: -4,
    top: 30,
    left: 65,
    padding: 37,
    marginLeft: -100,
    marginVertical: 20, // Adjusted spacing above and below the synopsis
    marginHorizontal: 40, // Ensure text doesn't touch edges
    lineHeight: 20,
  },
  modalAdditionalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalXRay: {
    fontSize: 14,
  },
  modalHDR: {
    fontSize: 14,
  },
  modalUHD: {
    fontSize: 14,
  },
  modalAgeRating: {
    fontSize: 14,
  },
  modalAds: {
    fontSize: 14,
    marginVertical: 10,
  },
  modalImageIcon: {
    width: 50,
    height: 50,
    marginVertical: 10,
    top: 50,
  },
  modalButtonContainer: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginVertical: 2,
    alignItems: 'center',
  },
  seasonButtonContainer: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
  },
  modalseasonButtonContainer: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
  },
  seasonButton: {
    backgroundColor: '#31363F',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    top: 164,
    left: -129,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seasonButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  modalseasonButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  seasonDropdown: {
    position: 'absolute',  // Position dropdown relative to the button container
    top: '100%',  // Place dropdown below the button
    left: -130,  // Align dropdown with the left edge of the button
    backgroundColor: '#31363F',  // Adjust as needed
    borderRadius: 5,
    borderColor: '#31363F',
    borderWidth: 1,
    zIndex: 1,
  },
  seasonDropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  seasonDropdownText: {
    fontSize: 16,
  },
  uaButton: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#31363F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
    left: -125,
  },
  uaButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  fourKButton: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#31363F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: -63,
    left: 48,
  },
  fourKButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  hdrButton: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 9,
    backgroundColor: '#31363F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: -104,
    left: 130,
  },
  hdrButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  modalSubtitleButton: {
    backgroundColor: '#31363F',
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    top: -145,
    left: -63,
  },
  subtitleImage: {
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as needed
    backgroundColor: '#31363F',
  },
  modalSubtitleText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedMovieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalADButton: {
    backgroundColor: '#31363F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    top: -188,
    left: -17,
  },
  modalButtons: {
    width: '100%',
    paddingHorizontal: 20,
  },
  modalIncludedPrime: {
    fontSize: 14,
    color: '#1399FF',
    marginVertical: 10,
  },
  modalADText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white', // Ensure the text color is contrasting
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  webseriesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  recommendedMoviesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  popularMoviesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  TopMoviesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  FantasyMoviesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  RecentlyAddedMoviesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-40%',
    marginVertical: 40,
    marginHorizontal: 40,
  },
  modalActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: -90, // Adjust as needed
    paddingVertical: -90, // Adjust as needed
    top: -2,
  },
  modalActionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -20, // Adjust as needed
    top: 30,
  },
  trailerButton: {
    left: -15,
  },
  watchlistButton: {
    left: -12,
  },
  likeButton: {
    left: -10,
  },
  notForMeButton: {
    left: -0,
  },
  shareButton: {
    left: 7,
  },
  modalActionIcon: {
    width: 25,
    height: 25,
    marginBottom: 15,
    justifyContent: 'space-between',
    borderColor: '#FFF',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 12, // Adjust font size as needed
  },
  episodesContainer: {
    paddingHorizontal: 15,
    top: 980,
  },
  episodesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  episodeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  episodeTitle: {
    fontSize: 16,
  },
  episodeDuration: {
    fontSize: 16,
    color: '#888',
  },
  trailerModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    padding: 20,
  },
  videoPlayer: {
    width: '100%',
    height: '80%', // Adjust based on your desired video player size
    backgroundColor: 'black', // Background color for the video player
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white', // Background color for the close button
    padding: 10,
    borderRadius: 50, // Circular button
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
  },
  closeButtonText: {
    color: 'black', // Text color for the close button
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MovieDetailsScreen;
