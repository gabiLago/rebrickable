import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 43,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: 90,
  },
  disclaimerTitle: {
    color: '#FFFFFF',
    paddingTop: 70,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '400',
  },
  disclaimer: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  picker: {
    paddingVertical: 5,
  },
  button: {
    margin: 30,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});
