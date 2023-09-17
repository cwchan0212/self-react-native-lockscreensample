import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

const Favorites = ({ params }) => {
    return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24, color: '#ffffff' }}>Favorites Screen</Text>
        </View>
      )    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
});


export default Favorites;