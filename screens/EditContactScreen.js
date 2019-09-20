import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EditContactScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>EditContact Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 10
    },
    inputItem: {
      margin: 10
    },
    button: {
      backgroundColor: "#B83227",
      marginTop: 40
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold"
    }
  });