import {Text, TouchableOpacity, View} from 'react-native';
import styles from './MainButton.styles';

const MainButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MainButton;
