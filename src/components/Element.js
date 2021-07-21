import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Element = ({element, onChangeValue, temp}) => {
  return (
    <TouchableOpacity
      style={{...styles.blockSize, ...element.style}}
      onPress={() => onChangeValue(temp)}>
      <Text style={styles.boxTitle}>{element.title}</Text>
      <Text style={styles.boxText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blockSize: {
    flexBasis: '33.3%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    padding: 5,
  },
  boxText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    padding: 2,
    textAlign: 'center',
  },
});
