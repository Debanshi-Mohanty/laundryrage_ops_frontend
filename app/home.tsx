import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav'; // Import BottomNav component

export default function HomeScreen() {
  const router = useRouter(); // Expo Router for navigation

  // Order Status Data
  const orders = [
    { title: 'Orders Status', icon: require('../assets/images/orders.png'), yellow: 5, green: 3, route: 'orders' },
    { title: 'Wash Status', icon: require('../assets/images/wash.png'), yellow: 3, green: 3, route: 'wash-status' },
    { title: 'Dry Completed', icon: require('../assets/images/dry.png'), yellow: 3, green: 3, route: 'dryer-status' },
    { title: 'Iron Completed', icon: require('../assets/images/iron.png'), yellow: 1, green: 3, route: 'iron-status' },
    { title: 'Packing Status', icon: require('../assets/images/packing.png'), yellow: 1, green: 1, route: 'packing-status' },
    { title: 'Delivery Status', icon: require('../assets/images/delivery.png'), yellow: 1, green: 1, route: 'delivery-status' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hub Status</Text>
      </View>

      {/* Grid Layout */}
      <View style={styles.grid}>
        {orders.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => item.route && router.push(item.route)} 
          >
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.badgeContainer}>
              <View style={[styles.badge, { backgroundColor: 'yellow' }]}>
                <Text>{item.yellow}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: 'green' }]}>
                <Text>{item.green}</Text>
              </View>
            </View>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { backgroundColor: '#FFC107', height: 50, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 },
  card: { width: 140, height: 120, backgroundColor: 'white', margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 3 },
  icon: { width: 40, height: 40 },
  badgeContainer: { flexDirection: 'row', position: 'absolute', top: 10, right: 10 },
  badge: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 2 },
  text: { marginTop: 10, fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
});
