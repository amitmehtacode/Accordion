import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    question: 'hello',
    answer: 'world',
  },
  {
    question: 'hello2',
    answer: 'world2',
  },
  {
    question: 'hello3',
    answer: 'world3',
  },
];

const AccordingOne = () => {
  return (
    <View style={styles.PopularQueriesContainer}>
      <Text style={styles.popularQueriesStyle}>popularQueries</Text>
      <View>
        {DATA.map((item, index) => {
          const {question, answer} = item;
          return (
            <View key={index} style={styles.seprationStyle}>
              <Accordion question={question} answer={removeSpace(answer)} />
              <View style={styles.seprationLine} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AccordingOne;

export const Accordion = ({question, answer}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsActive(!isActive)}>
        <View style={styles.accordionSubContainer}>
          <Text style={[styles.questionTitle, isActive && {color: 'red'}]}>
            {question}
          </Text>
          <View>{isActive ? <Text>UP</Text> : <Text>DOWN</Text>}</View>
        </View>
      </TouchableOpacity>
      {isActive && <Text style={styles.answerTitle}>{answer}</Text>}
    </>
  );
};

export const removeSpace = s => s?.trim()?.split(/ +/)?.join(' ');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  accordionSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionTitle: {
    color: '#333333',

    fontSize: 13,

    width: '75%',
  },
  answerTitle: {
    color: '#333333',

    fontSize: 13,

    marginTop: 12,
  },
  seprationStyle: {
    marginBottom: 25,
  },
  seprationLine: {
    borderWidth: 0.5,
    borderColor: '#EFEFEF',
    marginTop: 18,
  },
  PopularQueriesContainer: {
    marginHorizontal: 24,
    marginBottom: 18,
  },
  popularQueriesStyle: {
    color: '#333333',
    fontSize: 17,

    marginBottom: 28,
  },
});
