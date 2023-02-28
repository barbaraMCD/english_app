import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listOfWordContainer: {
    flex: 18,
  },
  flatlist: {
    padding: 20,
  },
  wordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    paddingTop: 10,
  },
  wordInFrench: {
    color: '#243D3D',
    fontSize: 16,
  },
  wordInEnglish: {
    color: '#243D3D',
    fontSize: 16,
  },
  index: {
    color: '#243D3D',
    fontSize: 18,
  },
  floatingButton: {
    position: 'absolute',
    right: 30,
    zIndex: 1,
    bottom: 30,
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 170,
  },
  closedButtonModal: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: '90%',
    padding: 0,
    marginBottom: 30,
    marginTop: 10,
  },
  addWordButton: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
  },
});

export default styles;
