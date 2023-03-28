import { 
  StyleSheet, 
  Text, 
  View,
  FlatList } 
    from "react-native";
import React from "react";

//data 
import { PRODUCTOS } from "../../data/products";
import ProductosItem from "../../components/ProductosItem";
import { useDispatch, useSelector } from "react-redux";



const ProductosScreen = ({navigation, route}) => {

  //const categoryProducts = useSelector (state => state.products.filteredProducts)

  //const category = useSelector (state => state.categories.selected)

  //const dispatch = useDispatch()

   //filtro para acceder a los productos por categoría
   const newProducto = PRODUCTOS.filter (
    producto => producto.category === route.params.categoryId
  )

  const handleSelectedProducts  = item => {
    navigation.navigate('Detalles',
    { name: item.title, 
      descripcion : item.description,
      img: item.img,
      price: item.price,
    })
  }
  
  //funcion que define lo que va a renderear el Flatlist
  const renderProductsItem = ({item}) => (
    <View style= { styles.contenedorProducto}>
      <ProductosItem 
        item={item}
        onSelected={handleSelectedProducts}
      />
    </View>
  )

  return (
    <View
      style={styles.productosScreenCaja}>
      <Text>Productos</Text>
      <FlatList 
        data={newProducto}
        renderItem={renderProductsItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductosScreen;

const styles = StyleSheet.create({
  productosScreenCaja: {
    flex: 1,
    margin: 15

  },
  contenedorProducto: {
    width: '50%',
    flex:1

  }
});
