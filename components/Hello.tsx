// components/Hello.tsx
import React, { PureComponent } from "react"
import { StyleSheet, Text, View } from "react-native"

export class Hello extends PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello
        </Text>
      </View>
    )
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
})