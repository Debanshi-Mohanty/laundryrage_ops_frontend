import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  return (
    <View style={styles.bottomNav}>
      {/* Account Button */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => pathname !== '/account' && router.push('/account')}
      >
        <Image source={require('../assets/images/account.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => pathname !== '/home' && router.push('/home')}
      >
        <Image source={require('../assets/images/home.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Complain Button */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => pathname !== '/complain' && router.push('/complain')}
      >
        <Image source={require('../assets/images/complain.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Complain</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFC107',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: { alignItems: 'center' },
  navIcon: { width: 25, height: 25 },
  navText: { fontSize: 12, fontWeight: 'bold' },
});
