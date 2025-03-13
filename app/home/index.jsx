import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AddExpenseForm from "../components/AddExpenseForm";

export default function HomeScreen() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    // Add the new expense to the expenses array
    setExpenses([...expenses, { ...expense, id: Date.now().toString() }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <AddExpenseForm onSubmit={handleAddExpense} />
      
      <Text style={styles.subtitle}>Expense List</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.date}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.purpose}>{item.purpose}</Text>
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#064E3B',
    marginBottom: 10,
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