import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { FONTS } from '#constants/fonts';

SplashScreen.preventAutoHideAsync();

export const useFontInit = () => {
  const [loaded, error] = useFonts({
    // FiraSans
    [FONTS.FIRASANS_BLACK]: require('../../assets/fonts/FiraSans/FiraSans-Black.ttf'),
    [FONTS.FIRASANS_BOLD]: require('../../assets/fonts/FiraSans/FiraSans-Bold.ttf'),
    [FONTS.FIRASANS_ITALIC]: require('../../assets/fonts/FiraSans/FiraSans-Italic.ttf'),
    [FONTS.FIRASANS_MEDIUM]: require('../../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
    [FONTS.FIRASANS_REGULAR]: require('../../assets/fonts/FiraSans/FiraSans-Regular.ttf'),

    // Manrope
    [FONTS.MANROPE_BOLD]: require('../../assets/fonts/Manrope/Manrope-Bold.ttf'),
    [FONTS.MANROPE_EXTRABOLD]: require('../../assets/fonts/Manrope/Manrope-ExtraBold.ttf'),
    [FONTS.MANROPE_EXTRALIGHT]: require('../../assets/fonts/Manrope/Manrope-ExtraLight.ttf'),
    [FONTS.MANROPE_LIGHT]: require('../../assets/fonts/Manrope/Manrope-Light.ttf'),
    [FONTS.MANROPE_MEDIUM]: require('../../assets/fonts/Manrope/Manrope-Medium.ttf'),
    [FONTS.MANROPE_REGULAR]: require('../../assets/fonts/Manrope/Manrope-Regular.ttf'),
    [FONTS.MANROPE_SEMIBOLD]: require('../../assets/fonts/Manrope/Manrope-SemiBold.ttf'),

    // Oswald
    [FONTS.OSWALD_BOLD]: require('../../assets/fonts/Oswald/Oswald-Bold.ttf'),
    [FONTS.OSWALD_MEDIUM]: require('../../assets/fonts/Oswald/Oswald-Medium.ttf'),
    [FONTS.OSWALD_REGULAR]: require('../../assets/fonts/Oswald/Oswald-Regular.ttf'),

    // Roboto
    [FONTS.ROBOTO_BLACK]: require('../../assets/fonts/Roboto/Roboto-Black.ttf'),
    [FONTS.ROBOTO_BOLD]: require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    [FONTS.ROBOTO_ITALIC]: require('../../assets/fonts/Roboto/Roboto-Italic.ttf'),
    [FONTS.ROBOTO_MEDIUM]: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    [FONTS.ROBOTO_REGULAR]: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),

    // RobotoSlab
    [FONTS.ROBOTO_SLAB_BLACK]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Black.ttf'),
    [FONTS.ROBOTO_SLAB_BOLD]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
    [FONTS.ROBOTO_SLAB_MEDIUM]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Medium.ttf'),
    [FONTS.ROBOTO_SLAB_REGULAR]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return loaded || error;
};
