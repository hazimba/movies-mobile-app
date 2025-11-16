import { Link } from "expo-router";
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
      <Text className="flex flex-wrap text-center text-primary items-center justify-center text-2xl font-bold">
        Welcome To My Movies App!
      </Text>
      <Link href="/onboarding" className="text-blue-500 underline">
        Go to Onboarding
      </Link>
      <Link href="/(tabs)" className="text-blue-500 underline">
        Go to Tabs
      </Link>
    </View>
  );
}
