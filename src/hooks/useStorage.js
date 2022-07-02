import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSlug = async (value) => {
  try {
    await AsyncStorage.setItem('@slug', value)
  } catch (e) {
    console.error(e)
  }
}

export const getSlug = async () => {
  try {
    const value = await AsyncStorage.getItem('@slug')
    return !value ? '' : value;
  } catch(e) {
    console.error(e)
  }
}

export const removeSlug = async () => {
  try {
    const value = await AsyncStorage.removeItem('@slug')
    return value;
  } catch(e) {
    console.error(e)
  }
}


export const setToken = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value)
  } catch (e) {
    console.error(e)
  }
}

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    return value;
  } catch(e) {
    console.error(e)
  }
}

export const removeToken = async () => {
  try {
    const value = await AsyncStorage.removeItem('@token')
    return value;
  } catch(e) {
    console.error(e)
  }
}
