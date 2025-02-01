import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function PackingStatusScreen() {
  const router = useRouter();
  const orders = [{ id: 'W4563' }, { id: 'W4564' }];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Packing Status</Text>
      </View>

      {/* Scrollable Order List */}
      <ScrollView contentContainerStyle={styles.orderList}>
        {orders.map((order, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.orderCard} 
            onPress={() => router.push(`/packing-details/${order.id}`)}
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
  container: { flex: 1, backgroundColor: 'white' },
  header: { backgroundColor: '#FFC107', height: 50, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  orderList: { flexGrow: 1, paddingBottom: 60 }, // Ensures list doesn't overlap bottom nav
  orderCard: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' },
  orderText: { fontSize: 16, fontWeight: 'bold' },
});
