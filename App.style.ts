import {StyleSheet} from 'react-native';

const Globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    padding: 10,
  },
  headerTitle: {
    color: '#243D3D',
    fontSize: 18,
    marginLeft: 10,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'lightgray',
    marginTop: 40,
  },
  text: {
    color: '#4A4A4A',
    fontSize: 14,
  },
  textIos: {
    color: '#4A4A4A',
    fontSize: 16,
  },
});

export default Globalstyles;
