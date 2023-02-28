import React, {useCallback, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {List, Plus, Trash2, XCircle} from 'react-native-feather';
import styles from './Home.style';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addWord, deleteWord, WordState} from '../../store/reducers/WordReducer';
import Globalstyles from '../../../App.style';
import {TextInput} from 'react-native-gesture-handler';

const Home = () => {
  const {word} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);

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
        <View style={styles.listOfWordContainer}>
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
                  <Trash2 color={'crimson'} onPress={() => removeList(item)} />
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
        <Plus height={20} color={'white'} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closedButtonModal}
              onPress={() => setModalVisible(!modalVisible)}>
              <XCircle height={20} color="black" />
            </Pressable>
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
            <TouchableOpacity onPress={addList} style={styles.addWordButton}>
              <Text style={{color: 'white'}}> Ajouter </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
