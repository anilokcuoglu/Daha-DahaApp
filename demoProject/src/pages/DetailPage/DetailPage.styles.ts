import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  imageBackground: {
    height: 400,
    alignItems: 'center',
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
  image: {
    height: 60,
    width: 60,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    height: 50,
    width: 50,
    left: 15,
    zIndex: 1,
  },
  titleView: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#1D1E1C',
    fontFamily: 'Helvetica',
    fontSize: 26,
    fontWeight: '700',
  },
  descriptionView: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  description: {
    color: '#1D1E1C',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
});
export default styles;
