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

const Review = () => {
  const navigation: any = useNavigation();
  const {word} = useSelector((state: RootState) => state);
  const [isPress, setIsPress] = useState('');
  const beginner = word.filter(w => w.level < 5);
  const junior = word.filter(w => w.level > 4 && w.level < 9);
  const senior = word.filter(w => w.level >= 12);
  const [beginnerTab, setBeginnerTab] = useState<WordState[]>([]);
  const [juniorTab, setJuniorTab] = useState<WordState[]>([]);
  const [seniorTab, setSeniorTab] = useState<WordState[]>([]);

  useEffect(() => {
    setBeginnerTab(beginner);
    setJuniorTab(junior);
    setSeniorTab(senior);
  }, [beginner, junior, senior]);

  return (
    <SafeAreaView style={Globalstyles.container}>
      <View style={Globalstyles.header}>
        <BookOpen color={'darkslategrey'} width={20} height={20} />
        <Text style={Globalstyles.headerTitle}> Réviser </Text>
      </View>
      <View style={styles.boxes}>
        <Text style={styles.text}> Ma progression </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View>
            <View style={styles.containerLevel}>
              <Text style={styles.numberOfNoteInLevel}>
                {beginnerTab.length}
              </Text>
            </View>
            <Text style={{marginLeft: 20}}> A travailler </Text>
          </View>
          <View>
            <View style={[styles.containerLevel, {backgroundColor: 'gold'}]}>
              <Text style={styles.numberOfNoteInLevel}>{juniorTab.length}</Text>
            </View>
            <Text style={{marginLeft: 20}}> A revoir </Text>
          </View>
          <View>
            <View
              style={[styles.containerLevel, {backgroundColor: 'forestgreen'}]}>
              <Text style={styles.numberOfNoteInLevel}>{seniorTab.length}</Text>
            </View>
            <Text style={{marginLeft: 20}}> Acquis </Text>
          </View>
        </View>
        <View style={Globalstyles.line} />
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPressIn={() => setIsPress('hasard')}
          onPressOut={() => setIsPress('')}
          onPress={() => {
            navigation.navigate('');
          }}
          style={
            isPress === 'hasard'
              ? [styles.reviewButton, {transform: [{scale: 1.1}]}]
              : styles.reviewButton
          }>
          <Text style={styles.reviewTextButton}>Réviser 10 mots</Text>
        </Pressable>
        <Pressable
          onPressIn={() => setIsPress('hasard')}
          onPressOut={() => setIsPress('')}
          onPress={() => {
            navigation.navigate('');
          }}
          style={
            isPress === 'hasard'
              ? [styles.reviewButton, {transform: [{scale: 1.1}]}]
              : styles.reviewButton
          }>
          <Text style={styles.reviewTextButton}>Réviser tous mes mots</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Review;
