import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },

  topBar: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  rightTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    gap: 10,
  },
  loginButton: {
    width: 91,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFF',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: -0.17,
  },
  userProfile: {
    width: 40,
    height: 40,
    backgroundColor: '#1D1E1C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tagList: {
    borderWidth: 1,
    flexDirection: 'row',
  },
});

export default styles;
