import { StyleSheet, Text, View, Button, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import COLORS from '../../constants/colors'

const DetallesScreen = ({ route, navigation}) => {


  return (
    <SafeAreaView style={styles.scroll}>
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{route.params.name}</Text>
      <Image 
            style={styles.img}
            source={{uri:  route.params.img
            }}/>
      <Text>{route.params.descripcion}</Text>
      <Text>El valor de la inversión es de: ${route.params.price}</Text>
     <View style={styles.boton}>
        <Button 
          title="Ir atrás" 
          onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default DetallesScreen;

const styles = StyleSheet.create({
  scroll: {
    flex:0.85
  },
  container: {
    flex: 1,
    height:500,
    backgroundColor: COLORS.primario1,
    marginVertical: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  titulo: {
    fontSize: 30,
  }, 
  img: {
    width: 300, 
    height: 220,
    marginVertical: 30
  },
  boton:{
    paddingVertical: 30,
    marginHorizontal: 80,
  }
});
