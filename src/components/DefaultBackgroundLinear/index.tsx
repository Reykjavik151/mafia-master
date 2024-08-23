import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '#constants/colors';
import { generalStyles } from '#utils/generalStyles';

export const DefaultBackgroundLinear = () => (
  <LinearGradient colors={[COLORS.grey1000, COLORS.grey800]} style={generalStyles.absoluteContainer} />
);
