import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Logo = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}>CLINIC</Text>
      <Text style={styles.text}>ALPHA</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Simplo-Thin',
    textAlign: 'center',
  },
});
