import AsyncStorage from '@react-native-async-storage/async-storage';

// slug
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

// Token
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

// lang
export const STORE_LANGUAGE_KEY = "@lang";

export const setLan = async (value) => {
  try {
    await AsyncStorage.setItem('@lang', value)
  } catch (e) {
    console.error(e)
  }
}

export const getLang = async () => {
  try {
    const value = await AsyncStorage.getItem('@lang')
    return value;
  } catch(e) {
    console.error(e)
  }
}

export const removeLang = async () => {
  try {
    const value = await AsyncStorage.removeItem('@lang')
    return value;
  } catch(e) {
    console.error(e)
  }
}
