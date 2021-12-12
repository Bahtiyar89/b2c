import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonMenuContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    flexDirection: 'column',
    width: '90%',
  },
  mainHeader: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: '5%',
  },
  subHeader: {
    marginBottom: '5%',
  },
  buttonWidth: {
    width: '90%',
  },

  modelContainer: { backgroundColor: 'white', padding: 10 },
  modelHeaderText: { color: 'black', fontWeight: '500', fontSize: 20 },
  modelTextAndError: { marginTop: 10, flexDirection: 'row', width: '100%' },
  modelHelperText: { alignItems: 'flex-end' },
  modelYesNo: { flexDirection: 'row', justifyContent: 'flex-end' },
  modelButtonNoColor: { color: 'black' },
  modelButtonYesColor: { color: 'blue' },
});

export default styles;
