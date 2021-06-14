import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Preload = () => {
  const navigation = useNavigation();


  React.useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [{ name: 'MainDrawer' }]
      });
    }, 2000)
  })

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#fff" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#410323',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})

export default Preload
