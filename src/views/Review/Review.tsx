import {Pressable, SafeAreaView, Text, View} from 'react-native';
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
import {MyNavigationProp} from '../../navigation/AppNavigator';
import {ios} from '../../helpers/constant';

const Review = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const {word} = useSelector((state: RootState) => state);
  const [reviewPicked, setReviewPicked] = useState(0);
  const [disabledButtonStart, setDisabledButtonStart] = useState(true);
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
            <Text style={[Globalstyles.text, {marginLeft: 20}]}>
              A travailler
            </Text>
          </View>
          <View>
            <View style={[styles.containerLevel, {backgroundColor: 'gold'}]}>
              <Text style={styles.numberOfNoteInLevel}>{juniorTab.length}</Text>
            </View>
            <Text style={[Globalstyles.text, {marginLeft: 20}]}>A revoir</Text>
          </View>
          <View>
            <View
              style={[styles.containerLevel, {backgroundColor: 'forestgreen'}]}>
              <Text style={styles.numberOfNoteInLevel}>{seniorTab.length}</Text>
            </View>
            <Text style={[Globalstyles.text, {marginLeft: 20}]}> Acquis </Text>
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
            setReviewPicked(1);
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === 1 ? <View style={styles.dot} /> : null}
          </View>
          <Text style={Globalstyles.text}> Jusqu'à 10 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked(2);
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === 2 ? <View style={styles.dot} /> : null}
          </View>
          <Text style={Globalstyles.text}> 20 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked(3);
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === 3 ? <View style={styles.dot} /> : null}
          </View>
          <Text style={Globalstyles.text}> 30 mots </Text>
        </Pressable>
        <Pressable
          style={
            ios ? [styles.checkboxes, {marginLeft: 30}] : styles.checkboxes
          }
          onPress={() => {
            setReviewPicked(word.length);
            setDisabledButtonStart(false);
          }}>
          <View style={styles.round}>
            {reviewPicked === word.length ? <View style={styles.dot} /> : null}
          </View>
          <Text style={Globalstyles.text}> Tous mes mots </Text>
        </Pressable>
        {ios ? (
          <Pressable
            disabled={disabledButtonStart}
            onPress={() => {
              navigation.navigate('ReviewInProgress', {
                reviewToUse: reviewPicked,
              });
            }}
            style={
              disabledButtonStart
                ? [styles.StartTheReviewButtonIos, {opacity: 0.5}]
                : styles.StartTheReviewButtonIos
            }>
            <Text style={Globalstyles.text}> Commencer </Text>
          </Pressable>
        ) : (
          <Pressable
            disabled={disabledButtonStart}
            onPress={() => {
              navigation.navigate('ReviewInProgress', {
                reviewToUse: reviewPicked,
              });
            }}
            style={
              disabledButtonStart
                ? [styles.StartTheReviewButtonIos, {opacity: 0.5}]
                : styles.StartTheReviewButtonIos
            }>
            <Text style={Globalstyles.text}> Commencer </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Review;
