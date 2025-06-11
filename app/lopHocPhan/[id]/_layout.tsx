import CustomHeader from "@/components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { LopHocPhanProvider } from "./_context";

export default function Layout() {
  return (
    <LopHocPhanProvider>
      <Tabs
        screenOptions={{
          header: () => <CustomHeader />,
          tabBarStyle: {
            backgroundColor: "#000",
            height: 58,
            paddingBottom: 4,
            paddingTop: 2,
            borderTopColor: "#333",
            borderTopWidth: 0.5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="(tabs)/dashboard"
          options={{
            title: "Bảng tin",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/notifications"
          options={{
            title: "Bài tập",
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/peopleScreen"
          options={{
            title: "Người dùng",
            tabBarIcon: ({ color }) => (
              <Ionicons name="people" size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </LopHocPhanProvider>
  );
}
