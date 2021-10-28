import I18n from 'react-native-i18n';
import utility from './app/utils/Utility';

utility.getDeviceLanguageFromStorage().then(lang => {
  I18n.locale = lang;
});

I18n.fallbacks = true;
I18n.translations = {
  en: require('./app/utils/en.json'),
  ru: require('./app/utils/ru.json'),
};

export default I18n;
