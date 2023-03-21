import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listOfWordContainer: {
    flex: 18,
    marginBottom: 90,
  },
  flatlist: {
    paddingBottom: 30,
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
    gap: 2,
  },
  wordInFrench: {
    color: '#243D3D',
    fontSize: 16,
    width: '40%',
  },
  wordInEnglish: {
    color: '#243D3D',
    fontSize: 16,
    width: '40%',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 50,
    width: 50,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredViewIos: {
    flex: 1,
    alignItems: 'center',
    marginTop: 220,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: Dimensions.get('window').height / 3,
    width: '80%',
    justifyContent: 'center',
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
    alignSelf: 'center',
    color: 'dimgray',
  },
  input: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: '80%',
    padding: 0,
    marginBottom: 30,
    marginTop: 10,
    alignSelf: 'center',
  },
  addWordButton: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    backgroundColor: 'coral',
    borderRadius: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default styles;
