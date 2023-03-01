import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {Props} from '../../navigation/AppNavigator';
import styles from './ReviewInProgress.style';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useEffect, useState} from 'react';
import {WordState} from '../../store/reducers/WordReducer';

const ReviewInProgress = ({route}: Props) => {
  const {reviewToUse} = route.params;
  const {word} = useSelector((state: RootState) => state);
  const [tabTenWords, setTabTenWords] = useState<WordState[]>([]);
  const [tabTwentyWords, setTabTwentyWords] = useState<WordState[]>([]);
  const [tabThirtyWords, setTabThirtyWords] = useState<WordState[]>([]);

  const pickRandomWords = (number: string) => {
    switch (number) {
      case '10':
        while (tabTenWords.length < 10) {
          var randomItem = word[Math.floor(Math.random() * word.length)];
          setTabTenWords([...tabTenWords, randomItem]);
        }
        break;
      case '20':
        while (tabTwentyWords.length < 20) {
          var randomItem = word[Math.floor(Math.random() * word.length)];
          setTabTwentyWords([...tabTwentyWords, randomItem]);
        }
        break;
      case '30':
        while (tabThirtyWords.length < 20) {
          var randomItem = word[Math.floor(Math.random() * word.length)];
          setTabThirtyWords([...tabThirtyWords, randomItem]);
        }
        break;
      default:
        console.log(`Sorry`);
    }
  };

  useEffect(() => {
    pickRandomWords(reviewToUse);
  }, []);

  console.log(tabTenWords);
  console.log(tabTwentyWords);
  console.log(tabThirtyWords);

  return (
    <SafeAreaView>
      <Text> {reviewToUse} </Text>
    </SafeAreaView>
  );
};

export default ReviewInProgress;
