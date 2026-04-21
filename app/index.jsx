import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require("../assets/images/pomodoro.png"),
    displayText: "Foco",
  },
  {
    id: 'short',
    initialValue: 5,
    image: require("../assets/images/short.png"),
    displayText: "Pausa Curta",
  },
  {
    id: 'long',
    initialValue: 15,
    image: require("../assets/images/long.png"),
    displayText: "Pausa Longa",
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image}></Image>

      <View style={styles.actions}>
        <View style={styles.categories}>

          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              active={timerType.id === item.id}
              onPress={() => setTimerType(item)}
              displayText={item.displayText}
            />
          ))}

        </View>

        <Timer totalSeconds={timerType.initialValue} />

        <FokusButton />

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura
        </Text>
      </View>
    </View>
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
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
    paddingBottom: 64,
  },
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5,
  },
});