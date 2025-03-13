import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import OnboardingScreen from '../onboarding/OnboardingScreen';
import HomeScreen from '../home/index';
import ExpenseList from '../components/ExpenseList'; // Import ExpenseList

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now().toString() }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ title: 'Onboarding' }}
        />
        <Stack.Screen
          name="Home"
          options={{ title: 'Home' }}
        >
          {props => <HomeScreen {...props} addExpense={addExpense} />}
        </Stack.Screen>
        <Stack.Screen
          name="ExpenseList"
          options={{ title: 'Expense List' }}
        >
          {props => <ExpenseList {...props} expenses={expenses} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}