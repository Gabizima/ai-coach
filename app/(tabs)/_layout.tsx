import { Tabs } from 'expo-router';
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#111827' : '#ffffff',
          borderTopColor: colorScheme === 'dark' ? '#1f2937' : '#e5e7eb',
        },
        tabBarActiveTintColor: '#3AB0FF',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home"
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarLabel: "Programs"
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          tabBarLabel: "Progress"
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: "Community"
        }}
      />
    </Tabs>
  );
}