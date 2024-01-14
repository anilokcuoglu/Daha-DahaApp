import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tagList: {
    flexDirection: 'row',
    marginTop: 20,
  },

  item: {
    width: 123,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#ECEEEF',
    backgroundColor: '#FFF',
    marginHorizontal: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    color: '#1D1E1C',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '400',
    marginRight: 5,
  },
  tinyIcon: {
    width: 24,
    height: 24,
    borderRadius: 8,
  },
  input: {
    height: 36,
    flex: 1,
    marginLeft: 5,
  },
});

export default styles;
