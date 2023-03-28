import { StyleSheet, View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"

import Navigation from "./Navigation"
import CartNavigator from "./CartNavigator"
import OrdersNavigator from "./OrdersNavigator"
import CategoriesScreen from "../screens/cursos/CategoriesScreen"

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={Navigation}
        options={{
          title: 'Crianza actualizada',
          tabBarIcon: () => (
              <Ionicons name="home" size={20} color="black" />
          ),
        }}
     /> 
      <BottomTabs.Screen
        name="Carrito"
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => (
              <Ionicons name="cart" size={20} color="black" />
           
          )
        }}
      /> 
      <BottomTabs.Screen
        name="Ordenes"
        component={OrdersNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
              <Ionicons name="list" size={20} color="black" />
           
          )
        }}
      /> 
   {/*   <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="list" size={20} color="black" />
              <Text>Ordenes</Text>
            </View>
          ),
        }}
      />*/}
    </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})