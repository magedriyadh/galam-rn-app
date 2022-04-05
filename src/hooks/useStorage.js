import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = (keyStore, defaultValue) => {
  const [key, setKey] = React.useState(defaultValue);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(keyStore, value)
    } catch (e) {
      console.error(e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(keyStore)
      if(value !== null) {
        setKey(value);
      }
    } catch(e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    getData()
  }, []);

  return [
    key,
    storeData,
  ]
}

export default useStorage;
