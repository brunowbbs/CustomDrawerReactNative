import React from 'react';
import { Image, Text, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default (props: any) => {

  const { navigate } = useNavigation();

  const menus = [
    { title: 'Página inicial', icon: 'inbox', screen: 'Home' },
    { title: 'Documentos', icon: 'file-text', screen: 'Home' },
    { title: 'Agenda', icon: 'calenda', screen: 'Home' },
    { title: 'Ocorrências', icon: 'bug', screen: 'Home' }
  ]


  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={{ uri: 'https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png' }} />
      </View>

      <ScrollView style={styles.scroller}>
        {menus.map((item, index) => (
          <TouchableHighlight style={styles.menuButton} key={index} onPress={() => navigate('Home')}>
            <>
              <View style={styles.menuSquare}></View>
              <Icon name={item.icon} size={23} color="#DEDEDE" />
              <Text style={styles.buttonText}>{item.title}</Text>
            </>
          </TouchableHighlight>
        ))}
        <TouchableHighlight style={styles.menuButton} onPress={() => navigate('Home')}>
          <>
            <View style={styles.menuSquare}></View>
            <Icon name="toggle-left" size={23} color="#DEDEDE" />
            <Text style={styles.buttonText}>Sair</Text>
          </>
        </TouchableHighlight>

      </ScrollView>

      <View style={styles.unitArea}>
        <TouchableHighlight style={styles.unitButton}>
          <Text style={styles.unitTextButton}>Alterar conta</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.footerArea}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerProfile}>Olá, Wesley Bruno!</Text>
          <Text style={styles.footerUnitText}>engwesleybruno@gmail.com</Text>
        </View>

        <View style={styles.footerUnitButton}>
          <Icon name="settings" color="#fff" size={16} />
        </View>

      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#410323"
  },
  containerLogo: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  scroller: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 0,
  },
  unitArea: {
    margin: 10,
  },
  unitButton: {
    backgroundColor: '#462698',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  unitTextButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footerArea: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerInfo: {

  },
  footerProfile: {
    fontSize: 15,
    color: '#dedede',
    fontWeight: '700'
  },
  footerUnitText: {
    fontSize: 15,
    color: '#dedede',
  },
  footerUnitButton: {

  },
  menuButton: {
    flexDirection: "row",
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  menuSquare: {
    // width: 5,
    height: 35,
    marginRight: 20,
    backgroundColor: 'transparent',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  buttonText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#DEDEDE'
  }
})