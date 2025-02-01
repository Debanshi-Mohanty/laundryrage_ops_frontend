import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';
import { useRouter } from 'expo-router';

export default function OrdersScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('pending');

  // Mock Order Data
  const pendingOrders = ['W4562', 'W4563', 'W4564'];
  const completedOrders = ['W4565', 'W4566', 'W4567'];

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('pending')}>
          <Text style={[styles.tab, activeTab === 'pending' && styles.activeTab]}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('completed')}>
          <Text style={[styles.tab, activeTab === 'completed' && styles.activeTab]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Order List */}
      <ScrollView style={styles.orderList}>
        {activeTab === 'pending'
          ? pendingOrders.map((id) => (
              <TouchableOpacity key={id} style={styles.orderCard} onPress={() => router.push(`/order-details?id=${id}`)}>
                <Text style={styles.orderText}>Order id - {id}</Text>
              </TouchableOpacity>
            ))
          : completedOrders.map((id) => (
              <TouchableOpacity key={id} style={styles.orderCard} onPress={() => router.push(`/completed-order-details?id=${id}`)}>
                <Text style={styles.orderText}>Order id - {id}</Text>
              </TouchableOpacity>
            ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  tab: { fontSize: 18, fontWeight: 'bold', color: '#999' },
  activeTab: { color: '#FFC107', borderBottomWidth: 2, borderBottomColor: '#FFC107' },
  orderList: { flex: 1 }, // Ensure list scrolls and doesn't overlap BottomNav
  orderCard: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginVertical: 5 },
  orderText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});
