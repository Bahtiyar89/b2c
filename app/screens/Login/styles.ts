import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    padding: 8,
  },
  loginHeaderText: { color: 'black', fontWeight: 'bold', fontSize: 28 },
  signInText: { color: '#768192' },
  textInput: { flex: 1 },
  rowDirection: { marginTop:10, width:'90%', flexDirection: 'row' },
  rowButton: {   marginLeft: 0 },
  buttonText: { color: 'white', flex:1   },
  forgot: {
    marginRight: 0,
    flex: 1,
     
    textAlign: 'right',
    fontSize: 12,
  },
  forgotStyle: {
   
    flex: 1,
    backgroundColor: '#321fdb',
    textAlign: 'right',
    fontSize: 16,
  },
  forgot22: {
        
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
    width:'90%',
    marginTop:10, 
  },
  SectionStyle2: {
    marginTop:40, 
  },
});

export default styles;
