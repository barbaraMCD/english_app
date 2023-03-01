import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxes: {
    flex: 9,
  },
  boxesIos: {
    flex: 8,
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
  title: {
    color: '#243D3D',
    fontSize: 20,
    marginTop: 10,
    padding: 10,
  },
  titleIos: {
    color: '#243D3D',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    padding: 10,
  },
  text: {
    color: '#4A4A4A',
  },
  choiceWhichReviewContainer: {
    flex: 12,
    gap: 22,
  },
  round: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 7,
    width: 7,
    borderRadius: 100,
    backgroundColor: 'forestgreen',
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginLeft: 20,
  },
  StartTheReviewButton: {
    position: 'absolute',
    bottom: 30,
    paddingRight: 30,
    paddingLeft: 30,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  StartTheReviewButtonIos: {
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 40,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default styles;
