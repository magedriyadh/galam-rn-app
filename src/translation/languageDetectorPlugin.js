import { getLang, setLan } from "../hooks/useStorage";


export const languageDetectorPlugin = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async function (callback) {
    try {
      //get stored language from Async storage
      const language = await getLang();
      if (language) {
        //if language was stored before, use this language in the app
        return callback(language);
      } else {
        //if language was not stored yet, use device's locale
        await setLan('ar')
        return callback('ar');
      }
    } catch (error) {
      console.log("Error reading language", error);
    }
  },
  cacheUserLanguage: async function (language) {
    try {
      //save a user's language choice in Async storage
      await setLan(language);
    } catch (error) {}
  },
};
