import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  monumentButton: {
    width: '70%',
    marginTop: 5,
    backgroundColor: '#333333',
  },
  imageWH100: {
    width: 100,
    height: 100,
  },

  rowSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  paddingTop2: { paddingTop: '2%' },
  dropdBorderWidth63: { borderColor: '#dfdfdf', width: '63%' },
  width70: { width: '70%' },
  modelContainer: { backgroundColor: 'white', padding: 10 },
  modelHeaderText: { color: 'black', fontWeight: '500', fontSize: 20 },
  modelTextAndError: { marginTop: 10, flexDirection: 'row', width: '100%' },
  modelHelperText: { alignItems: 'flex-end' },
  modelYesNo: { flexDirection: 'row', justifyContent: 'flex-end' },
  modelButtonNoColor: { color: 'black' },
  modelButtonYesColor: { color: 'blue' },
});

export default styles;
