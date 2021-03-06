import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  profileHeaderText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  badgeStyle: {
    position: 'absolute',
    top: 16,
    right: 14,
  },

  buttonMenuContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    flexDirection: 'column',
    width: '90%',
  },
  modelContainer: { backgroundColor: 'white', padding: 10 },
  modelHeaderText: { fontSize: 24, textAlign: 'center' },
  modelTextAndError: { marginTop: 10, flexDirection: 'row', width: '100%' },
  modelHelperText: { alignItems: 'flex-end' },
  modelYesNo: { flexDirection: 'row', justifyContent: 'flex-end' },
  modelButtonNoColor: { color: 'black' },
  modelButtonYesColor: { color: 'blue' },
});

export default styles;
