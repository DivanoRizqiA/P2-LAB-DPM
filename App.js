import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const showAlert = (boxNumber) => {
    Alert.alert(`Kotak ${boxNumber} ditekan!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tugas 2 Praktikum DPM</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box1} onPress={() => showAlert(1)} />
        <TouchableOpacity style={styles.box2} onPress={() => showAlert(2)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna abu muda
    justifyContent: 'center', // Mengatur konten di tengah secara vertikal
    alignItems: 'center', // Mengatur konten di tengah secara horizontal
  },
  title: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Menjadikan teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Mengatur arah flex menjadi horizontal
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#FF5733', // Warna kotak 1
    marginRight: 20, // Jarak antara kotak
    justifyContent: 'center', // Mengatur konten di tengah secara vertikal
    alignItems: 'center', // Mengatur konten di tengah secara horizontal
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#33FF57', // Warna kotak 2
  },
});

export default App;