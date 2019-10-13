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
  filterTitle: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  yearsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  pickerContainer: {
    width: '30%',
    paddingVertical: 5,
  },
  pickerLabel: {
    fontWeight: '400',
    paddingBottom: 5,
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
    borderRadius: 12,
    backgroundColor: 'white',
    color: 'black',
  },
});
