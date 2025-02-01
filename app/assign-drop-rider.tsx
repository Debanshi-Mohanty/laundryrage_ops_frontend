import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AssignDropRiderScreen() {
  const router = useRouter();
  const riders = [{ id: 'R1' }, { id: 'R2' }];

  const handleAssignRider = (riderId: string) => {
    Alert.alert("Rider Assigned", `Rider ${riderId} has been assigned.`, [
      {
        text: "OK",
        onPress: () => router.push('/home'), // Redirect to Home Page
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Rider</Text>
      </View>

      {/* Rider Selection List */}
      {riders.map((rider, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.riderCard} 
          onPress={() => handleAssignRider(rider.id)}
        >
          <Text style={styles.riderText}>{rider.id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { backgroundColor: '#FFC107', height: 50, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  riderCard: { backgroundColor: '#EEE', padding: 15, borderRadius: 5, marginBottom: 10, alignItems: 'center' },
  riderText: { fontSize: 16, fontWeight: 'bold' },
});
