import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  login: {
    padding: 8,
  },
  loginHeaderText: { color: 'black', fontWeight: 'bold', fontSize: 28 },
  text: {
    padding: 1,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  textExecutor: {
    padding: 1,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  signInText: { color: '#768192' },
  textInput: { width: '95%', marginBottom: 10 },
  rowDirection: { flexDirection: 'row' },
  rowButton: { marginLeft: 10 },
  buttonText: { color: 'white' },
  forgot: {
    marginRight: 0,
    flex: 1,
    color: '#321fdb',
    textAlign: 'right',
    fontSize: 12,
  },
  forgotStyle: {
    flex: 1,
    textAlign: 'right',
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
});

export default styles;
