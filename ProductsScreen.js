import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ProductsScreen = () => {
  const [cart, setCart] = useState([]);

  const buyProduct = (productName, price) => {
    
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
     
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      
      setCart([...cart, { name: productName, price, quantity: 1 }]);
    }

    
    console.log(`Compraste ${productName} por ${price}$`);
  };

  const products = [
    {
      name: 'Gloss Fenty Beauty',
      price: 849,
      image: 'https://media.vogue.mx/photos/5c07320deccb76a35c7a2c60/master/w_1600%2Cc_limit/productos_de_belleza_favoritos_de_editoras_make_up_piel_maquillaje_17975421.jpg',
    },
    {
      name: 'Base Fenty Beauty',
      price: 477,
      image: 'https://m.media-amazon.com/images/I/41wyEBwi5uL.jpg',
    },
    {
      name: 'Lip Gloss Rem Beauty',
      price: 398,
      image: 'https://www.neo2.com/wp-content/uploads/2023/04/ariana-grande-rem-beauty-Essential-Drip.jpg',
    },
    {
      name: 'Paleta MIDNIGHT Rem Beauty',
      price: 975,
      image: 'https://beautyloversmexico.com/cdn/shop/products/4151C850-EE66-447B-9020-34AE2CFA88FF.jpg?v=1647969547',
    },
    {
      name: 'Kylie Cosmetics Velvet Lip Kit',
      price: 790,
      image: 'https://media.glamour.mx/photos/6463de21a368f717234963e3/master/w_1600%2Cc_limit/Kylie-Cosmetics-Velvet-Lip-Kit%2520(3).jpg',
    },
    {
      name: 'Kylie Skin Mini set de 4 piezas',
      price: 1450,
      image: 'https://www.ozcosmetics.com.mx/syimages/202211/278828.jpg',
    },
    {
      name: 'Matte Everyday Essentials Bundle | Kylie Cosmetics',
      price: 290,
      image: 'https://kyliejennercosmetics.eu/cdn/shop/files/matte-everyday-essentials-bundle_800x.jpg?v=1682520992',
    },
    ];
    

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          <Text style={styles.glowText}>GLOW</Text> COSMETICS
        </Text>
        <Text style={styles.cartIcon}>&#128722;</Text>
      </View>
      <Text style={styles.subTitle}>Tus productos de belleza favoritos</Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.productContainer, { marginRight: 10 }]}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => buyProduct(item.name, item.price)}
            >
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* Carrito de compras */}
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrito de Compras</Text>
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text>{item.name} - Cantidad: {item.quantity}</Text>
            <Text>Total: ${item.price * item.quantity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DAA520',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cartIcon: {
    fontSize: 30,
    fontStyle: 'italic',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
  },
  glowText: {
    fontStyle: 'italic',
    color: 'black',
  },
  subTitle: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default ProductsScreen;








