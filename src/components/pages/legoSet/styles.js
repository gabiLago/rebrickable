import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  images: {
    width: '100%',
    height: '40%',
    borderWidth: 3,
    borderColor: '#FFF',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    padding: 10,
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textsInfo: {
    fontWeight: '600',
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
});
