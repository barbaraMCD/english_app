import {Platform, Pressable, SafeAreaView, Text, View} from 'react-native';
import styles from './Review.style';
import React from 'react';
import {BookOpen} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {RootState} from '../../store/store';
import Globalstyles from '../../../App.style';
import {WordState} from '../../store/reducers/WordReducer';
import {ReviserProp} from '../../navigation/AppNavigator';

const Review = () => {
  const navigation: any = useNavigation();
  const {word} = useSelector((state: RootState) => state);
  const [reviewPicked, setReviewPicked] = useState('');
  const [disabledButtonStart, setDisabledButtonStart] = useState(true);
  const ios = Platform.OS === 'ios';
  const beginner = word.filter(w => w.level < 5);
  const junior = word.filter(w => w.level > 4 && w.level < 9);
  const senior = word.filter(w => w.level >= 12);
  const [beginnerTab, setBeginnerTab] = useState<WordState[]>([]);
  const [juniorTab, setJuniorTab] = useState<WordState[]>([]);
  const [seniorTab, setSeniorTab] = useState<WordState[]>([]);

  const sortWOrdPerLevel = () => {
    setBeginnerTab(beginner);
    setJuniorTab(junior);
    setSeniorTab(senior);
  };

  useEffect(() => {
    sortWOrdPerLevel();
  }, []);

  return (
    <SafeAreaView style={Globalstyles.container}>
      <View style={Globalstyles.header}>
        <BookOpen color={'darkslategrey'} width={20} height={20} />
        <Text style={Globalstyles.headerTitle}> Réviser </Text>
      </View>
      <View style={ios ? styles.boxesIos : styles.boxes}>
        <Text style={ios ? styles.titleIos : styles.title}>Ma progression</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View>
            <View style={styles.containerLevel}>
              <Text style={styles.numberOfNoteInLevel}>
                {beginnerTab.length}
              </Text>
            </View>
            <Text style={[styles.text, {marginLeft: 20}]}> A travailler </Text>
          </View>
          <View>
            <View style={[styles.containerLevel, {backgroundColor: 'gold'}]}>
              <Text style={styles.numberOfNoteInLevel}>{juniorTab.length}</Text>
            </View>
            <Text style={[styles.text, {marginLeft: 20}]}> A revoir </Text>
          </View>
          <View>
            <View
              style={[styles.containerLevel, {backgroundColor: 'forestgreen'}]}>
              <Text style={styles.numberOfNoteInLevel}>{seniorTab.length}</Text>
            </View>
            <Text style={[styles.text, {marginLeft: 20}]}> Acquis </Text>
          </View>
        </View>
        <View style={Globalstyles.line} />
      </View>
      <View style={styles.choiceWhichReviewContainer}>
        <Text
          style={
            ios
              ? [styles.titleIos, {marginBottom: 10}]
              : [styles.title, {marginBottom: 10}]
          }>
          J'aimerais réviser :
        </Text>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked('10');
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === '10' ? <View style={styles.dot} /> : null}
          </View>
          <Text style={styles.text}> 10 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked('20');
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === '20' ? <View style={styles.dot} /> : null}
          </View>
          <Text style={styles.text}> 20 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked('30');
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === '30' ? <View style={styles.dot} /> : null}
          </View>
          <Text style={styles.text}> 30 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked('all');
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === 'all' ? <View style={styles.dot} /> : null}
          </View>
          <Text style={styles.text}> Tous mes mots </Text>
        </Pressable>
        {ios ? (
          <Pressable
            disabled={disabledButtonStart}
            onPress={() =>
              navigation.navigate('ReviewInProgress', {
                reviewToUse: reviewPicked,
              })
            }
            style={
              disabledButtonStart
                ? [styles.StartTheReviewButtonIos, {opacity: 0.5}]
                : styles.StartTheReviewButtonIos
            }>
            <Text style={styles.text}> Commencer </Text>
          </Pressable>
        ) : (
          <Pressable
            disabled={disabledButtonStart}
            onPress={() =>
              navigation.navigate('ReviewInProgress', {
                reviewToUse: reviewPicked,
              })
            }
            style={
              disabledButtonStart
                ? [styles.StartTheReviewButtonIos, {opacity: 0.5}]
                : styles.StartTheReviewButtonIos
            }>
            <Text style={styles.text}> Commencer </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Review;
