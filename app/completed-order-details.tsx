import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CompletedOrderDetailsScreen() {
  const { id } = useLocalSearchParams(); // Get Order ID from URL
  const router = useRouter(); // Navigation

  const handlePassToWash = () => {
    Alert.alert("Order Moved", "Order moved to Washing Stage", [
      {
        text: "OK",
        onPress: () => router.push('/home'), // Redirect to Home Page
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order ID - {id}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Status: Completed</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePassToWash}>
        <Text style={styles.buttonText}>Pass to Wash</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  infoContainer: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' },
  infoText: { fontSize: 16, fontWeight: 'bold' },
  button: { backgroundColor: '#FFC107', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});
