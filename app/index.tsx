import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="flex-1 flex flex-wrap text-center items-center justify-center h-screen text-2xl font-bold">
        Welcome To My Movies App! test12
      </Text>
    </View>
  );
}
