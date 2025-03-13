import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function AddExpenseForm({ onSubmit, expenses }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [purpose, setPurpose] = useState(""); // New state variable for purpose
  const [showPicker, setShowPicker] = useState(false);
  const navigation = useNavigation();

  // Handles date selection
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    if (Platform.OS !== "ios") {
      setShowPicker(false); // Hide picker on Android
    }
  };

  // Submitting the form
  const handleSubmit = () => {
    if (amount && purpose) {
      onSubmit({ amount, date: date.toISOString().split("T")[0], purpose }); // Include purpose in submitted data
      setAmount("");
      setDate(new Date());
      setPurpose(""); // Reset purpose field
    }
  };

  return (
    <View style={styles.form}>
      {/* Amount Input */}
      <Text style={styles.label}>AMOUNT</Text>
      <View style={styles.amountInput}>
        <Text style={styles.currency}>$</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
        />
      </View>

      {/* Purpose Input */}
      <Text style={styles.label}>PURPOSE</Text>
      <TextInput
        style={styles.input}
        value={purpose}
        onChangeText={setPurpose}
        placeholder="e.g., Food, Clothes"
      />

      {/* Date Picker */}
      <Text style={styles.label}>DATE</Text>
      <TouchableOpacity
        style={styles.datePickerContainer}
        onPress={() => setShowPicker(true)}
      >
        <Text>{date.toLocaleDateString()}</Text> 
        <FontAwesome name="calendar" size={20} color="gray" />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Save Expense</Text>
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  amountInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  submitBtn: {
    backgroundColor: "#0D9488",
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});