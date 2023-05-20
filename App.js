import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import { Switch } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [dia, setDia] = useState(false);
  const [tamanho, setTamanho] = useState(false);

  const toggleSwitchDia = () => {
    setDia(!dia);
  };

  const toggleSwitchTamanho = () => {
    setTamanho(!tamanho);
    alert(tamanho)
  };

  useEffect(() => {
    const recuperarEstado = async () => {
      const diaEstado = await AsyncStorage.getItem("dia");
      const tamanhoEstado = await AsyncStorage.getItem("tamanho");
      setDia(diaEstado);
      setTamanho(tamanhoEstado);
    };

    recuperarEstado();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>
      <View style={styles.switch}>
        <Text style={styles.textSwitch}>Dia</Text>
        <Switch value={dia} onValueChange={toggleSwitchDia} />
        <Text style={styles.textSwitch}>Pequeno</Text>
        <Switch value={tamanho} onValueChange={toggleSwitchTamanho} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>
          "A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 40,
    marginBottom: 10,
  },

  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },

  textSwitch: {
    fontSize: 20,
  },

  viewText: {
    flex: 0.9,
    width: "90%",
    marginTop: 40,
    borderWidth: 5,
  },

  text: {
    fontSize: 10,
  },
});
