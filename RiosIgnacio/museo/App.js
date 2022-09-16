import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableNativeFeedback, Alert } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResonse] = useState();

  useEffect(() => {
    const options = { method: 'GET' };


    fetch('http://olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerRecorridos', options)
      .then(response => response.json())
      .then(
        response => {
          setIsLoading(false);
          setResonse(response);
        },
        error => {
          setIsLoading(false);
          setError(error)
        }
      )
  },[])

  const contenido = () => {
    if(isLoading){
      return <ActivityIndicator color="#0979B0" size="large"/>
    }

    if(error){
      return <Text>Algo salio mal {error}</Text>
    }

    
    return (
      <View>
        <Text>{JSON.stringify(response)}</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      {contenido()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
