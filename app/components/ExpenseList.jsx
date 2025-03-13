import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ExpenseList({ expenses }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense List</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.date}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.purpose}>{item.purpose}</Text> {/* Display purpose */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F8F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#064E3B',
    marginBottom: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D9488',
  },
  purpose: {
    fontSize: 16,
    color: '#666',
  },
});

