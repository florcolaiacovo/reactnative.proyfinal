import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList } 
    from "react-native";
import React from "react";

//componente
import CategoriesItem from "../../components/CategoriesItem";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIAS } from "../../data/categories";




const CategoriesScreen = ( {navigation}) => {

 // const categories = useSelector(state => state.categories.categories)
  //const dispatch = useDispatch()

  //funcion para navegar a los cursos y productos
  // luego lo asignamos a nuestra funcion renderCategoriesItem
  const seleccionarCategoria = item => {
    //dispatch(selectedCategory(item.id))
    navigation.navigate("Productos", 
    { categoryId: item.id,
      title: item.title,
    })
  }

  //funcion que define lo que va a rendear el FlatList en la pantalla principal
  const renderCategoriesItem = ({item}) => (
    <View>
      <CategoriesItem 
        item={item} 
        onSelected={seleccionarCategoria}/>
    </View>
  )

  return (
    <View>
  
      <FlatList 
        data={CATEGORIAS}
        renderItem={renderCategoriesItem}
        keyExtractor= {item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
