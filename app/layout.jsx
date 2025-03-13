import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expense Tracker</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 20, backgroundColor: "#0D9488", alignItems: "center" },
  headerTitle: { color: "white", fontSize: 20, fontWeight: "bold" },
});
