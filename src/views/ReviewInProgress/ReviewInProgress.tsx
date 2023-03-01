import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {MyNavigationProp, Props} from '../../navigation/AppNavigator';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {WordState} from '../../store/reducers/WordReducer';
import {modifyLevel} from '../../store/reducers/WordReducer';
import {TextInput} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../hooks';
import React from 'react';
import styles from './ReviewInProgress.style';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'react-native-feather';

const ReviewInProgress = ({route}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MyNavigationProp>();
  const {reviewToUse} = route.params;
  const {word} = useSelector((state: RootState) => state);
  const [tabRandomWords, setTabRandomWords] = useState<WordState[]>([]);
  const [current, setCurrent] = useState(0);
  const [isGoodResponse, setIsGoodResponse] = useState(true);
  const [response, setResponse] = useState('');

  const selectRandomWords = word.map((_n, _) => {
    if (tabRandomWords.length < reviewToUse) {
      var randomItem = word[Math.floor(Math.random() * word.length)];
      if (!tabRandomWords.includes(randomItem)) {
        setTabRandomWords([...tabRandomWords, randomItem]);
      }
    }
  });

  useEffect(() => {
    selectRandomWords;
  }, [selectRandomWords]);

  const verifyResponse = (word: WordState) => {
    if (response === word.french) {
      setIsGoodResponse(true);
      dispatch(modifyLevel(word));
      setResponse('');
      setCurrent(current + 1);
    } else {
      setIsGoodResponse(false);
    }
  };

  const oneWordContainer = tabRandomWords.map((w, key) => {
    if (key === current) {
      return (
        <View
          key={key}
          style={{
            backgroundColor: 'darkslategrey',
            padding: 30,
            borderRadius: 20,
          }}>
          <View style={styles.note}>
            <Text style={styles.modalText}> {w.english} </Text>
            <TextInput
              style={styles.input}
              value={response}
              onChangeText={value => setResponse(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => verifyResponse(w)}>
            <Text style={{color: 'darkslategrey', alignSelf: 'center'}}>
              {' '}
              Valider
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={{width: 25}} onPress={() => navigation.goBack()}>
          <ArrowLeft color={'darkslategrey'} />
        </Pressable>
        <Text style={{fontSize: 18, marginLeft: 10, color: 'darkslategrey'}}>
          {' '}
          Réviser{' '}
        </Text>
      </View>
      <View style={{paddingTop: 30}}>
        {isGoodResponse && current !== tabRandomWords.length && current > 0 ? (
          <Text style={{color: 'darkslategrey', fontSize: 18}}>
            {' '}
            Bravo, tu progresses{' '}
          </Text>
        ) : null}
        {!isGoodResponse ? (
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Text style={{color: 'darkslategrey', fontSize: 18}}>
              {' '}
              Mauvaise réponse
            </Text>
            {current !== tabRandomWords.length ? (
              <Pressable
                style={styles.badAnswer}
                onPress={() => {
                  setCurrent(current + 1);
                  setResponse('');
                }}>
                <Text style={{color: 'white'}}> Passer au mot suivant </Text>
              </Pressable>
            ) : null}
          </View>
        ) : null}
      </View>
      <View
        style={{
          height: '80%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 70,
        }}>
        {oneWordContainer}
        {current === tabRandomWords.length ? (
          <Text style={{color: 'darkslategrey', fontSize: 20}}>
            {' '}
            Bravo tu as révisé {reviewToUse} mots !{' '}
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ReviewInProgress;
