import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  content: string;
  btnType?: 'gray' | 'orange' | 'blackOut';
  expand?: boolean;
  action: (numText: string) => void;
}

const ButtonCalc = ({content, btnType = 'gray',expand = false,action}: Props) => {
  return (
    <TouchableOpacity onPress={ () => action(content)}>
      <View style={[styles.button, styles[btnType], expand && styles.expandButton ]}>
        <Text
          style={[styles.buttonText, (btnType === 'orange') ? styles.textOrange : styles.textDefault ]}
          >
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  gray: {
    backgroundColor: '#9b9b9b',
  },
  orange: {
    backgroundColor: '#ffc400',
  },
  textOrange: {
    color: 'white',
  },
  textDefault: {
    color: 'white',
  },
  blackOut: {
    backgroundColor: '#2a2a2a',
  },
  expandButton: {
    width: 180,
  },
});

export default ButtonCalc;
