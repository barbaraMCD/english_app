import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Trash2} from 'react-native-feather';
import styles from './Home.style';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addWord, deleteWord, WordState} from '../../store/reducers/WordReducer';
import Globalstyles from '../../../App.style';
import {TextInput} from 'react-native-gesture-handler';
import {ios} from '../../helpers/constant';
import add from '../../assets/images/add.png';
import OpenURLButton from '../../components/OpenURLButton/OpenURLButton';

const Home = () => {
  const {word} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const supportedURL = 'https://www.flaticon.com/free-icons/add';

  const [oneWord, setOneWord] = useState({
    id: Math.random(),
    french: '',
    english: '',
    level: 0,
  });

  const addList = useCallback(() => {
    setModalVisible(!modalVisible);
    dispatch(addWord(oneWord));
    setOneWord({
      id: Math.random(),
      french: '',
      english: '',
      level: 0,
    });
  }, [oneWord, dispatch, modalVisible]);

  const removeList = (deleteOne: WordState) => {
    dispatch(deleteWord(deleteOne));
    setOneWord({
      id: Math.random(),
      french: '',
      english: '',
      level: 0,
    });
  };

  return (
    <SafeAreaView style={Globalstyles.container}>
      <View style={Globalstyles.header}>
        <Text style={Globalstyles.headerTitle}> Ma liste de mots </Text>
      </View>
      {word ? (
        <View
          style={
            ios
              ? [styles.listOfWordContainer, {marginBottom: 50}]
              : styles.listOfWordContainer
          }>
          <FlatList
            data={word}
            style={styles.flatlist}
            numColumns={1}
            renderItem={({item, index}) => {
              return (
                <View style={styles.wordContainer}>
                  <Text style={styles.index}> {index + 1} </Text>
                  <Text style={styles.wordInEnglish}> {item.english}</Text>
                  <Text style={styles.wordInFrench}> {item.french}</Text>
                  <Trash2 color={'coral'} onPress={() => removeList(item)} />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <Text>
          {' '}
          Votre liste de mots est vide, appuyer sur le bouton en bas à droite
          pour en ajouter{' '}
        </Text>
      )}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}>
        <Image style={styles.picture} source={add} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={ios ? styles.centeredViewIos : styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Français </Text>
            <TextInput
              value={oneWord.french}
              style={styles.input}
              onChangeText={value => setOneWord({...oneWord, french: value})}
            />
            <Text style={styles.modalText}> Anglais </Text>
            <TextInput
              value={oneWord.english}
              style={styles.input}
              onChangeText={value => setOneWord({...oneWord, english: value})}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={
                  ios
                    ? [
                        styles.addWordButton,
                        {backgroundColor: '#f5b031', marginTop: 10},
                      ]
                    : [styles.addWordButton, {backgroundColor: '#f5b031'}]
                }>
                <Text style={{color: 'white'}}> Annuler </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addList}
                style={
                  ios
                    ? [styles.addWordButton, {marginTop: 10}]
                    : styles.addWordButton
                }>
                <Text style={{color: 'white'}}> Ajouter </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{position: 'absolute', bottom: 5, left: 5}}>
        <OpenURLButton url={supportedURL}>
          Add icons created by itim2101 - Flaticon
        </OpenURLButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
