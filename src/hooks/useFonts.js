import React from 'react';
import * as Font from 'expo-font';
import { NotoSansArabic } from '../../assets/NotoSansArabic/font'

const useFonts = () => {
  const [loaded, setLoaded] = React.useState(false);
  
  const loadFont = async () => {
    await Font.loadAsync(NotoSansArabic);

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
