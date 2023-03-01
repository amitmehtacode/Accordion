import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Pressable,
  FlatList,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
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

const AccordingTwo = () => {
    const [isHide, setHide] = useState(false);


const onPressHandle = (index) => {
    setHide(index);
  };
  const onDownPress = () => {
    setHide(false);
  };

  const renderItem = ({ item, index }) => {
    const {
      question,
      answer
    } = item;
    
    if (index === isHide) {
      return (
        <Pressable
          key={index}
          style={styles.boxContainer}
          onPress={() => onPressHandle(index, item.id)}
        >
          <View style={styles.boxSection}>
            <View style={styles.boxSubSection}>
              <View>
                <Text style={styles.title}>{query}</Text>
                <Text style={styles.dateTimeStyle}>formattedDate</Text>
              </View>
              <View>
                <DownIcon
                  onPress={() => onDownPress()}
                  style={styles.iconRight}
                />
              </View>
            </View>
            <Text style={styles.queryMsg}>{subject}</Text>

            {reply ? (
              <>
                <View style={styles.row}>
                  <View style={styles.rowContainer}>
                    <ReplyIcon />
                    <Text style={styles.replyByStyle}>
                      Replied by {repliedByName}
                    </Text>
                  </View>
                  <Text style={[styles.replyDateTimeStyle]}>{repliedDate}</Text>
                </View>
                <Text style={styles.replyMessageStyle}>{reply}</Text>
              </>
            ) : null}
          </View>
        </Pressable>
      );
    } else {
      return (
        <Pressable
          key={index}
          style={styles.boxContainer}
          onPress={() => onPressHandle(index, item.id)}
        >
          <View
            style={[
              styles.boxSection,
              styles.boxSectionInitial,
              reply && styles.boxSectionInitialAlt,
            ]}
          >
            <Text style={styles.title}>{query}</Text>

            <Text style={styles.dateTimeStyleInitial}>{formattedDate}</Text>
            <RightIcon
              style={[styles.iconRightAlt, reply && styles.iconRight]}
            />
            {reply ? (
              <>
                <View style={styles.sectionInitial}>
                  <View style={styles.replyIcon}>
                    <ReplyIcon />
                  </View>
                  <Text style={styles.replyByStyle}>
                    {translate('repliedBy')}{' '}
                    <Text style={styles.replyByBold}>{repliedByName}</Text>
                  </Text>
                </View>
                <Text style={styles.replyDateTimeInitialStyle}>
                  {repliedDate}
                </Text>
              </>
            ) : null}
          </View>
        </Pressable>
      );
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
      
    </View>
  )
}

export default AccordingTwo

const styles = StyleSheet.create({})