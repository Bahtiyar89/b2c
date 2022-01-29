import I18n from 'react-native-i18n';
import { getLanguages } from 'react-native-i18n';
import utility from './app/utils/Utility';

utility.getDeviceLanguageFromStorage().then(lang => {
  console.log('lang: ', lang);
  I18n.locale = 'ru';
});

I18n.fallbacks = true;
I18n.defaultLocale = 'ru';
I18n.translations = {
  ru: require('./app/utils/ru.json'),
  en: require('./app/utils/en.json'),
};

export default I18n;
