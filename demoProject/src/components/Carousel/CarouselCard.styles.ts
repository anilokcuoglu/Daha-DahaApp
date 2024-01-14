import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBackground: {
    height: 400,
    alignItems: 'center',
    borderRadius: 20,
    borderBottomLeftRadius: 70,
  },
  cardView: {
    height: 500,
    backgroundColor: '#FFF',
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: {width: 5, height: 5},
    borderWidth: 1.5,
    borderColor: '#ECEFED',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tagText: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: '700',
  },
  image: {
    height: 60,
    width: 60,
  },
  bottomCardView: {
    marginTop: 10,
    alignItems: 'center',
  },
  imageView: {
    position: 'absolute',
    backgroundColor: '#FFF',
    height: 70,
    width: 70,
    left: -10,
    bottom: 75,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
