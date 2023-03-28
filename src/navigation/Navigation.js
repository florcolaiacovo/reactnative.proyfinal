import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import DetallesScreen from '../screens/cursos/DetallesScreen'
import ProductosScreen from '../screens/cursos/ProductosScreen.jsx'
import CategoriesScreen from '../screens/cursos/CategoriesScreen';

//constantes
import COLORS from '../constants/colors'
import Inicio from "../screens/Inicio";

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false,
                headerStyle: {backgroundColor: COLORS.primario1},
                hearderTintColor: COLORS.primario2,
                headreTitleStyle: {
                    fontWeight: "bold"
                }
            }}
            >   
            <Stack.Screen 
                name="Inicio" 
                component={Inicio}
                />    
            <Stack.Screen 
                name="Carrito" 
                component={CategoriesScreen}
                />
            <Stack.Screen 
                name="Productos" 
                component={ProductosScreen} 
                options={ ({ route }) => ({
                    title: route.params.title,
                    })}
                    /> 
            <Stack.Screen 
                name="Detalles" 
                component={DetallesScreen}
                options={ ({ route }) => ({
                    title: route.params.name,
                })}
                />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
            <MyTabs />
    )
}