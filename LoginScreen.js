import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'edithalvarado@gmail.com' && password === '123456') {
      navigation.navigate('Products');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/0f/e3/1c/0fe31cde0a66256024953d30940d6dcf.png' }}
        style={[styles.logo, { width: 200, height: 200 }]}
      />

      <View style={styles.inputView}>
        <Image
          source={{ uri: 'https://img.icons8.com/material-rounded/50/000000/user-male-circle.png' }}
          style={[styles.icon, { tintColor: '#777' }]}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Correo electrónico"
          placeholderTextColor="#444"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <Image
          source={{ uri: 'https://img.icons8.com/material-rounded/50/000000/password.png' }}
          style={[styles.icon, { tintColor: '#777' }]}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Contraseña"
          placeholderTextColor="#444"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={[styles.loginBtn, { backgroundColor: '#DAA520' }]} onPress={handleLogin}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.socialBtnContainer}>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#C0C0C0', marginBottom: 10, marginRight: 5, width: '48%' }]}>
          <Image
            source={{ uri: 'https://img.icons8.com/material-rounded/24/000000/google-logo.png' }}
            style={[styles.icon, { tintColor: 'white' }]}
          />
          <Text style={[styles.socialText, { color: 'white' }]}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#C0C0C0', marginBottom: 10, marginLeft: 5, width: '48%' }]}>
          <Image
            source={{ uri: 'https://img.icons8.com/material-rounded/24/000000/facebook.png' }}
            style={[styles.icon, { tintColor: 'white' }]}
          />
          <Text style={[styles.socialText, { color: 'white' }]}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={[styles.signupText, { color: 'black' }]}>¿No tienes una cuenta? Regístrate aquí.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#ddd',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputText: {
    height: 50,
    color: '#333',
    flex: 1,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#DAA520',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  socialBtnContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    marginLeft: 10,
  },
  signupText: {
    color: '#3498db',
  },
});

export default LoginScreen;


