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

    // Inter
    [FONTS.INTER_BLACK]: require('../../assets/fonts/Inter/Inter-Black.ttf'),
    [FONTS.INTER_BOLD]: require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    [FONTS.INTER_MEDIUM]: require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    [FONTS.INTER_REGULAR]: require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    [FONTS.INTER_SEMIBOLD]: require('../../assets/fonts/Inter/Inter-SemiBold.ttf'),
    [FONTS.INTER_THIN]: require('../../assets/fonts/Inter/Inter-Thin.ttf'),

    // Jost
    [FONTS.JOST_BLACK]: require('../../assets/fonts/Jost/Jost-Black.ttf'),
    [FONTS.JOST_BOLD]: require('../../assets/fonts/Jost/Jost-Bold.ttf'),
    [FONTS.JOST_LIGHT]: require('../../assets/fonts/Jost/Jost-Light.ttf'),
    [FONTS.JOST_MEDIUM]: require('../../assets/fonts/Jost/Jost-Medium.ttf'),
    [FONTS.JOST_REGULAR]: require('../../assets/fonts/Jost/Jost-Regular.ttf'),
    [FONTS.JOST_THIN]: require('../../assets/fonts/Jost/Jost-Thin.ttf'),

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
