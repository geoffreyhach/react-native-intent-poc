import React from 'react';
import {ActivityIndicatorProps, DimensionValue, StyleSheet} from 'react-native';
import {Button, ButtonGroup, withTheme, Text} from '@rneui/themed';
import {colors} from '../style/colors';

type Props = {
  onPress: () => void;
  title: string;
  loading?: boolean;
  type?: 'outline' | 'clear';
  width?: DimensionValue;
};

const AppButton = ({
  onPress,
  title,
  loading = false,
  type,
  width = 100,
}: Props) => {
  const styles = StyleSheet.create({});

  return (
    <Button
      style={{width: width}}
      color={colors.primary.main}
      onPress={onPress}
      title={title}
      loading={loading}
      type={type}
    />
  );
};

export default AppButton;
