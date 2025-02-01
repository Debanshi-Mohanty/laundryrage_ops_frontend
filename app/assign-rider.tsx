import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function AssignRiderScreen() {
  const router = useRouter();

  const riders = [
    { id: 'R1', assigned: true },
    { id: 'R2', assigned: false },
  ];

  const handleAssignRider = (riderId: string) => {
    Alert.alert("Rider Assigned", `Rider ${riderId} has been assigned successfully.`, [
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

      {/* Tabs for Pickup Assignment */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Pickup Assignment</Text>
      </View>

      {/* Rider Selection List */}
      {riders.map((rider, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.riderButton, rider.assigned ? styles.assigned : styles.unassigned]}
          onPress={() => handleAssignRider(rider.id)} // Show popup and redirect on selection
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
  header: { backgroundColor: '#FFC107', paddingVertical: 15, alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  tabs: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
  tab: { fontSize: 16, marginHorizontal: 10, color: 'gray' },
  activeTab: { fontWeight: 'bold', color: 'black', textDecorationLine: 'underline' },
  riderButton: { padding: 15, marginVertical: 5, alignItems: 'center', borderRadius: 5 },
  assigned: { backgroundColor: 'gray' },
  unassigned: { backgroundColor: '#EAEAEA' },
  riderText: { fontSize: 18, fontWeight: 'bold' },
});
