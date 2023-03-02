import {SafeAreaView} from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import Globalstyles from '../../../App.style';
import {ios} from '../../helpers/constant';
import {Check, X} from 'react-native-feather';

const ReviewInProgress = ({route}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MyNavigationProp>();
  const {reviewToUse} = route.params;
  const {word} = useSelector((state: RootState) => state);
  const [tabRandomWords, setTabRandomWords] = useState<WordState[]>([]);
  const [current, setCurrent] = useState(0);
  const [isGoodResponse, setIsGoodResponse] = useState<boolean>(false);
  const [isBadResponse, setIsBadResponse] = useState<boolean>(false);
  const [tabGoodResponse, setTabGoodResponse] = useState<WordState[]>([]);
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

  const verifyResponse = (oneWord: WordState) => {
    if (response === oneWord.english) {
      setIsGoodResponse(true);
      dispatch(modifyLevel(oneWord));
      setTabGoodResponse([...tabGoodResponse, oneWord]);
    } else {
      setIsBadResponse(true);
    }
  };

  const followingWord = () => {
    setCurrent(current + 1);
    setResponse('');
    setIsBadResponse(false);
    setIsGoodResponse(false);
  };

  const wordContainer = tabRandomWords.map((w, key) => {
    if (key === current) {
      return (
        <View
          key={key}
          style={
            ios
              ? [styles.wordToGuessContainer, {gap: 30}]
              : styles.wordToGuessContainer
          }>
          <View style={styles.increase}>
            {ios ? (
              <View style={styles.increaseTextIos}>
                <Text> {key + 1}</Text>
              </View>
            ) : (
              <Text style={styles.increaseText}>{key + 1}</Text>
            )}
            <View style={styles.progressBar} />
            {ios ? (
              <View style={styles.increaseTextIos}>
                <Text> {tabRandomWords.length}</Text>
              </View>
            ) : (
              <Text style={styles.increaseText}>{tabRandomWords.length}</Text>
            )}
          </View>
          <Text style={styles.englishWord}> {w.french} </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.input}
              value={response}
              placeholder="Votre réponse..."
              placeholderTextColor={'#A7A7A7'}
              onChangeText={value => setResponse(value)}
            />
            <View style={{position: 'absolute', right: 25}}>
              {isGoodResponse ? <Check height={16} color={'coral'} /> : null}
              {isBadResponse ? <X height={16} color={'coral'} /> : null}
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#f5b031'}]}
              onPress={() => navigation.goBack()}>
              <Text style={[Globalstyles.text, {color: 'white'}]}>
                {' '}
                Annuler
              </Text>
            </TouchableOpacity>
            {response === '' ? (
              <TouchableOpacity
                style={[styles.button, {opacity: 0.7}]}
                disabled>
                <Text style={[Globalstyles.text, {color: 'white'}]}>
                  {' '}
                  Valider
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={
                  (!isGoodResponse && isBadResponse) ||
                  (isGoodResponse && !isBadResponse)
                    ? followingWord
                    : () => verifyResponse(w)
                }>
                <Text style={[Globalstyles.text, {color: 'white'}]}>
                  {(!isGoodResponse && isBadResponse) ||
                  (isGoodResponse && !isBadResponse)
                    ? 'Suivant'
                    : 'Valider'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    }
  });

  return (
    <SafeAreaView style={Globalstyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {wordContainer}
        {current === tabRandomWords.length ? (
          <View style={styles.wordToGuessContainer}>
            <Text>bravo vous avez obtenu le score :</Text>
            <Text>
              {tabGoodResponse.length + ' / ' + tabRandomWords.length}
            </Text>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#f5b031'}]}
              onPress={() => navigation.goBack()}>
              <Text style={[Globalstyles.text, {color: 'white'}]}>
                Continuer
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ReviewInProgress;
