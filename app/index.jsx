import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
  const timerDate = new Date(timerType.initialValue * 1000);
  const timerOptions = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <View style={styles.container}>
      <Image source={timerType.image}></Image>

      <View style={styles.actions}>
        <View style={styles.categories}>

          {pomodoro.map((item) => (
            <Pressable
              key={item.id}
              style={timerType.id === item.id ? styles.categoriesTextActive : null}
              onPress={() => setTimerType(item)}
            >
              <Text style={styles.categoriesText}>
                {item.displayText}
              </Text>
            </Pressable>
          ))}

        </View>

        <Text style={styles.timer}>
          {timerDate.toLocaleTimeString("pt-BR", timerOptions)}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
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
  imagem: {
    width: "80%",
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
  categoriesTextActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  categoriesText: {
    color: "#FFF",
    fontSize: 12.5,
    padding: 8,
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#BB72FF",
    padding: 8,
    borderRadius: 32,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
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