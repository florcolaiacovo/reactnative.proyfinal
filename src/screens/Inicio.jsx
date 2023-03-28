import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Inicio = () => {
  return (
    <SafeAreaView style={styles.scroll}>
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Bienvenidx a mi app para padres :)</Text>
      <Text>Mi nombre es Florencia Colaiacovo creadora de este pequeño espacio informativo, y Noa es mi hija (la inspiración detrás de este proyecto). </Text>
      <Text>En primer lugar te felicito por haber tomado la iniciativa de comenzar el camino de la crianza actualizada, consciente y positiva. Te diré que no es tan sencillo como aparenta, pero que sin dudas te va a permitir conectar con tu peque como nunca antes, y que además criarás niñxs autosufucientes, con confianza en si mismos, capaces de tener relaciones sanas. 
      Es el camino para cortar con los patrones limitantes heredados que han utilizado nuestros ancentros como medio de supervivencia pero que en la actualidad no cumplen con la función que necesitamos.
      Esta es la invitación a sanar a tu niñx interior, y a perdonar y reconocer a tus padres que actuaron desde el nivel de consciencia y herramientas que tenían en su momento.
      </Text>
      <Text>Como padres buscamos lo mejor para nuestros hijos, y sabemos que hay que empezar por nuestro propio cambio de consciencia. Te invitamos a explorar esta app creada con amor para ayudar a las familias a acceder a información que beneficiará a la salud física y mental de las nuevas generaciones (y las que vendrán). Este es mi regalo para ustedes. También podrán acceder a cursos dictados por profesionales y encontrar diferentes artículos gratuitos relacionados a la crianza.</Text>
      <Text style={styles.texto}>Si te interesa este contenido también podés encontrarme en facebook, instagram y tiktok como @florcarolinaok_</Text>
 
    </ScrollView>
    </SafeAreaView>
  )
}

export default Inicio

const styles = StyleSheet.create({
    scroll: {
        flex:0.80
    },
    container: {
        flex: 1.5,
        height:500,
        backgroundColor: COLORS.primario1,
        marginVertical: 15,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 5, 
      },
      titulo: {
        fontSize: 30,
        paddingVertical:30
      }, 
      texto: {
        paddingBottom: 40
      }
})