import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '#constants/colors';
import { generalStyles } from '#utils/generalStyles';

export const DefaultBackgroundLinear = () => (
  <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={generalStyles.absoluteContainer} />
);
