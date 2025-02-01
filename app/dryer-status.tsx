import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav'; // Import the Bottom Navigation

export default function DryerStatusScreen() {
  const router = useRouter();

  const orders = [
    { id: 'W4563' },
    { id: 'W4564' }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dryer Status</Text>
      </View>

      {/* Scrollable Order List */}
      <ScrollView style={styles.orderList}>
        {orders.map((order, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.orderCard} 
            onPress={() => router.push(`/dryer-details/${order.id}`)} // Navigate to Dryer Details
          >
            <Text style={styles.orderText}>Order ID - {order.id}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { backgroundColor: '#FFC107', height: 50, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  orderList: { flex: 1 }, // Ensures scrolling works correctly
  orderCard: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' },
  orderText: { fontSize: 18, fontWeight: 'bold' },
});
