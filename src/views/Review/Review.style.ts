import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxes: {
    flex: 10,
  },
  containerLevel: {
    margin: 20,
    height: 100,
    backgroundColor: 'crimson',
    width: Dimensions.get('window').width / 5,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  numberOfNoteInLevel: {
    color: 'white',
    fontSize: 24,
    padding: 6,
    paddingLeft: 10,
    fontWeight: '600',
  },
  text: {
    color: '#243D3D',
    fontSize: 20,
    marginTop: 20,
    padding: 10,
  },
  buttons: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  reviewButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  reviewTextButton: {
    color: '#243D3D',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
