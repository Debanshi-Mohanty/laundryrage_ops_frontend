import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ComplainScreen() {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = () => {
    if (complaint.trim() === '') {
      Alert.alert('Error', 'Please enter a complaint before submitting.');
      return;
    }
    Alert.alert('Success', 'Your complaint has been submitted.');
    setComplaint('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Raise a Complaint</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your complaint..."
        multiline
        value={complaint}
        onChangeText={setComplaint}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '100%', borderWidth: 1, borderColor: '#CCC', padding: 10, borderRadius: 5, marginBottom: 10, textAlignVertical: 'top', height: 100 },
  button: { backgroundColor: '#FFC107', padding: 15, borderRadius: 5, alignItems: 'center', width: '100%' },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});
