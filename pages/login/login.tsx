import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Animated, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../pages/types/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSplash, setShowSplash] = useState(true); // State to control splash screen
  const [loginMode, setLoginMode] = useState(true); // State to toggle between login and sign-up forms
  const [showCreateAccount, setShowCreateAccount] = useState(false); // State to show the Create Account form
  const [splashOpacity] = useState(new Animated.Value(1)); // Animated value for splash opacity
  const [loginOpacity] = useState(new Animated.Value(0)); // Animated value for login screen opacity

  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Hardcoded credentials for demonstration purposes
  const validEmail = 'Admin';
  const validPassword = '123';
  const validName = 'Admin'; // Valid name for account creation
  const validMobileNumber = '12345678'; // Valid mobile number for account creation

  useEffect(() => {
    // Animate splash screen opacity
    if (showSplash) {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 2000, // Duration of splash screen
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false); // Hide splash screen after animation
        // Animate login screen opacity after splash screen is hidden
        Animated.timing(loginOpacity, {
          toValue: 1,
          duration: 500, // Duration of the fade-in animation
          useNativeDriver: true,
        }).start();
      });
    }
  }, [showSplash, splashOpacity, loginOpacity]);

  const handleSignIn = () => {
    // Basic validation
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Check credentials
    if (email === validEmail && password === validPassword) {
      // Navigate to Profile screen
      navigation.navigate('Profile');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  const handleCreateAccount = () => {
    // For demonstration purposes, assume account creation is always successful
    // You can add actual validation logic here

    // After account creation, automatically log in the user
    if (validName && validMobileNumber) {
      setEmail(validEmail);
      setPassword(validPassword);
      handleSignIn();
    } else {
      Alert.alert('Create Account', 'Account creation logic needs to be implemented.');
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: showSplash ? splashOpacity : loginOpacity }]}>
      {showSplash && (
        <Animated.View style={[styles.splashContainer, { opacity: splashOpacity }]}>
          <Image
            source={{ uri: 'https://download.logo.wine/logo/Prime_Video/Prime_Video-Logo.wine.png' }}
            style={styles.splashLogo}
            resizeMode="contain"
          />
        </Animated.View>
      )}

      {!showSplash && (
        <Animated.View style={[styles.loginContainer, { opacity: loginOpacity }]}>
          {/* Background Image */}
          <ImageBackground
            source={{ uri: 'https://pplware.sapo.pt/wp-content/uploads/2023/02/Amazon-Prime-Video.jpg' }}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.overlay} />

            <View style={styles.headerContainer}>
              <Image
                source={{ uri: 'https://download.logo.wine/logo/Prime_Video/Prime_Video-Logo.wine.png' }}
                style={styles.headerImage}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>

          {loginMode ? (
            <View style={styles.containerInner}>
              <Text style={styles.title}>Sign-In</Text>
              <TextInput
                style={styles.input}
                placeholder="Email or mobile phone number"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign-In</Text>
              </TouchableOpacity>
              <Text style={styles.footerText}>
                By continuing, you agree to Amazon's <Text style={styles.link}>Conditions of Use</Text> and <Text style={styles.link}>Privacy Notice</Text>
              </Text>
              <TouchableOpacity>
                <Text style={styles.helpLink}>Need help?</Text>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>New to Amazon?</Text>
                <View style={styles.divider} />
              </View>

              <TouchableOpacity style={styles.secondaryButton} onPress={() => setLoginMode(false)}>
                <Text style={styles.secondaryButtonText}>Create your Amazon account</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.containerInner}>
              <Text style={styles.title}>Create Account</Text>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor="#666"
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile number"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
              />
              <Text style={styles.infoText}>
                Passwords must be at least 6 characters.
              </Text>
              <Text style={styles.infoText}>
                To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
              </Text>
              <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLoginMode(true)}>
                <Text style={styles.link}>Already have an account? Sign in</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  splashContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  splashLogo: {
    width: '80%',
    height: '50%',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 200, // Height of the background image
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay to darken the background image
  },
  headerContainer: {
    alignItems: 'center',
    top: 100,
    width: '100%',
    height: '100%',
  },
  headerImage: {
    width: 250,
    height: 93,
    top: 60,
  },
  containerInner: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Set background color to black
    padding: 20, // Added padding for better spacing
    borderRadius: 4, // Added border radius for rounded corners
  },
  title: {
    fontSize: 24,
    color: '#FFF', // Changed text color to white for better contrast
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#000', // Set background color of input fields to white
    color: '#666',
    borderColor: '#C9C9C9',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFA41C',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,
  },
  link: {
    color: '#0066C0',
  },
  helpLink: {
    color: '#0066C0',
    fontSize: 14,
    marginBottom: 30,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E7E7E7',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
  secondaryButton: {
    width: '95%',
    borderColor: '#C9C9C9',
    borderWidth: 1,
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#666',
    fontSize: 16,
  },
  infoText: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 12,
  },
});

export default LoginScreen;
