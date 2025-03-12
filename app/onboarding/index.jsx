import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image source={require('../../assets/onboarding-image.jpg')} style={styles.image} />

      {/* Title */}
      <Text style={styles.title}>Spend Smarter {"\n"}Save More</Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/HomeScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already Have an Account? <Text style={styles.loginLink}>Log In</Text>
      </Text>
    </View>
  );
}

// Styles
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#064E3B',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0D9488',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#0D9488',
    fontWeight: 'bold',
  },
};
