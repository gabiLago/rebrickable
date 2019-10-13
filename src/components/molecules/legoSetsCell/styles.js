import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  images: {
    width: '95%',
    height: 250,
    marginLeft: '2.5%',
    marginTop: '5%',
    resizeMode: 'cover',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    right: '2.5%',
    left: '2.5%',
  },
  name: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
  },
});
