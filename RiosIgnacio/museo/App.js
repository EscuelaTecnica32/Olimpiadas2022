import { StyleSheet, View} from 'react-native';
import Json from './src/components/Json';
import Login from './src/components/Login';
export default function App() {
  
  return (
    <Login/>
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
