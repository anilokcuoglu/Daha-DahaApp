import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  button: {
    width: '100%',
    height: 56,
    position: 'absolute',
    backgroundColor: '#F40000',
    borderRadius: 28,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
