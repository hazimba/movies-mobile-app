import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const _Layout = () => {
  const tabItem = [
    { name: "index", icon: "home", title: "Home" },
    { name: "profile", icon: "person", title: "Profile" },
    { name: "saved", icon: "bookmark", title: "Saved" },
    { name: "search", icon: "search", title: "Search" },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 20,
          margin: 5,
          position: "absolute",
          backgroundColor: "#2E294E",
        },
      }}
    >
      <Tabs.Screen
        name="(tabs)"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      {tabItem.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name={item.icon as any}
                  size={focused ? 28 : 20}
                  color={focused ? "#00BBF9" : "#C4CBCA"}
                  className="color-[#00BBF9] h-10 w-10 rounded-full flex items-center justify-center"
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
