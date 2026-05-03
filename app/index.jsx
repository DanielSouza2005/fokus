import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";

export default function Index() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/Logo.png")}
      />

      <View style={styles.innerContainer}>
        <Text style={styles.textPrimary}>Otimize sua {"\n"} produtividade, {"\n"}
          <Text style={styles.textSecondary}>mergulhe no que {"\n"} realmente importa</Text>
        </Text>

        <Image
          source={require("../assets/images/home.png")}
        />

        <FokusButton
          onPress={() => { router.navigate("/pomodoro") }}
          title="Quero Iniciar!"
        />
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  innerContainer: {
    gap: 16,
  },
  textPrimary: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },
  textSecondary: {
    fontWeight: "bold",
  },
});