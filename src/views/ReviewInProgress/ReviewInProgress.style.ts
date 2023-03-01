import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    display: 'flex',
    height: '7%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 10,
    marginBottom: 4,
  },
  note: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    width: 90,
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 50,
    borderRadius: 20,
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  input: {
    width: 200,
    height: 40,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    marginTop: 30,
  },
  badAnswer: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'darkslategrey',
    marginTop: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default styles;
