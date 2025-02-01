import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function IronDetailsScreen() {
  const { id } = useLocalSearchParams(); // Get Order ID from URL
  const router = useRouter(); // Navigation

  const handlePassForPacking = () => {
    Alert.alert("Alert", "Order moved to Packing Stage", [
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
        <Text style={styles.infoText}>📍 Address: A/17, Siddhi Vihar, Bhubaneswar</Text>
        <Text style={styles.infoText}>📞 Phone: +91-8861050025</Text>
        <Text style={styles.infoText}>⚖ Order Weight: 7.5kg</Text>
        <Text style={styles.infoText}>🕒 Pickup Slot: 19/01/2025, 10:00 - 11:00 AM</Text>
      </View>

      {/* Button to move to Packing */}
      <TouchableOpacity style={styles.button} onPress={handlePassForPacking}>
        <Text style={styles.buttonText}>Pass for Packing</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  infoContainer: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginBottom: 10 },
  infoText: { fontSize: 16, marginBottom: 5 },
  button: { backgroundColor: '#FFC107', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});
