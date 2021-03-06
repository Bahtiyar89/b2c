import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeaderText: { color: 'black', fontWeight: 'bold', fontSize: 28 },
  signInText: {
    width: '95%',
    paddingTop: '2%',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  textparagraph: {},
  textInput: { width: '95%' },
  buttonText: { color: 'white' },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  rowDirection: { marginTop: 10, width: '95%', flexDirection: 'row' },
});

export default styles;
