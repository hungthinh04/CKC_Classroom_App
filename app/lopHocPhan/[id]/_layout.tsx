import CustomHeader from "@/components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { LopHocPhanProvider } from "./_context"; // 👈 wrap context ở đây

export default function Layout() {
  return (
    <LopHocPhanProvider>
      <Tabs
        screenOptions={{
          header: () => <CustomHeader />,
          tabBarStyle: {
            backgroundColor: "#000",
            paddingBottom: 6,
            paddingTop: 6,
          },
        }}
      >
        <Tabs.Screen
          name="(tabs)/dashboard"
          options={{
            title: "Bảng tin",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/notifications"
          options={{
            title: "Bài tập",
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/peopleScreen"
          options={{
            title: "Người dùng",
            tabBarIcon: ({ color }) => (
              <Ionicons name="people" size={24} color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
        name="(tabs)/material"
        options={{
          title: "Tài liệu",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text" size={24} color={color} />
          ),
        }}
      /> */}
      </Tabs>
      
    </LopHocPhanProvider>
  );
}
