import React, {useCallback, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Trash2} from 'react-native-feather';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addWord, deleteWord, WordState} from '../../store/reducers/WordReducer';

const Home = () => {
  const {word} = useAppSelector(state => state);
  console.log(word);
  const dispatch = useAppDispatch();

  const [oneWord, setOneWord] = useState({
    id: Math.random(),
    french: '',
    english: '',
    level: 0,
  });

  const addList = useCallback(() => {
    dispatch(addWord(oneWord));
    setOneWord({
      id: Math.random(),
      french: '',
      english: '',
      level: 0,
    });
  }, [oneWord, dispatch]);

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
    <SafeAreaView>
      <View>
        <Text> Ajoutes un mot 😉</Text>
        <Text> Français </Text>
        <TextInput
          value={oneWord.french}
          onChangeText={value => setOneWord({...oneWord, french: value})}
        />
        <Text> Anglais </Text>
        <TextInput
          value={oneWord.english}
          onChangeText={value => setOneWord({...oneWord, english: value})}
        />
        <TouchableOpacity onPress={addList}>
          <Text> Ajouter </Text>
        </TouchableOpacity>
      </View>
      <Text> Liste de vos mots </Text>
      <FlatList
        data={word}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <View>
              <Text> {item.french}</Text>
              <Text> {item.english}</Text>
              <Trash2 color={'white'} onPress={() => removeList(item)} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
