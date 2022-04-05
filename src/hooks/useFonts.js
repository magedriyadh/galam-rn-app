import React from 'react';
import * as Font from 'expo-font';
import { Cairo_300Light } from '@expo-google-fonts/cairo';
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

const useFonts = () => {
  const [loaded, setLoaded] = React.useState(false);
  
  const loadFont = async () => {
    await Font.loadAsync({
      Roboto_300Light,
      Roboto_400Regular,
      Roboto_500Medium,
      Cairo_300Light,
    });

    setLoaded(true)
  }

  React.useEffect(() => {
    loadFont();
  }, []);
  
  return {
    loaded,
  }
};

export default useFonts;