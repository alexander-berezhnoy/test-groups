import i18n from 'i18next';
import { cloneDeep, get, set } from 'lodash';
import { useMemo } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

export type TLanguage = 'ua' | 'ru' | 'en';

export const LANG_KEY = 'language';
export const DEFAULT_LANG = 'ua';

// let currentLang = localStorage.getItem(LANG_KEY);
let currentLang = 'ua';

if (!currentLang) {
  localStorage.setItem(LANG_KEY, DEFAULT_LANG);
  currentLang = DEFAULT_LANG;
}

i18n.use(initReactI18next).init({
  resources: {},
  lng: currentLang,
  fallbackLng: DEFAULT_LANG,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lang: TLanguage) => {
  i18n.changeLanguage(lang);
  localStorage.setItem(LANG_KEY, lang);
};

export default i18n;

export const useDictionary = (dictionary: Record<string, any>) => {
  const namespace = useMemo(() => {
    const uuid = uuidv4();
    Object.keys(dictionary).forEach((lang: string) => {
      i18n.addResourceBundle(lang, uuid, dictionary[lang]);
    });
    return uuid;
  }, [dictionary]);

  return useTranslation(namespace);
};

export const useArrayTranslation = (
  arr: unknown[],
  dictionary: Record<string, any>,
  paths?: string[] | string,
): any => {
  const { t } = useDictionary(dictionary);

  const translatedArr = useMemo(
    () =>
      arr.map((value) => {
        if (typeof value === 'string') {
          return t(value);
        }
        if (paths && typeof value === 'object' && value !== null) {
          const clonedObj = cloneDeep(value);

          const translateDeep = (p: string) => {
            const translationKey = get(clonedObj, p, null);
            if (translationKey) {
              set(clonedObj as Object, p, t(translationKey));
            }
          };

          if (Array.isArray(paths)) {
            paths.forEach(translateDeep);
          } else if (typeof paths === 'string') {
            translateDeep(paths);
          }
          return clonedObj;
        }
        return value;
      }),
    [arr, paths, t],
  );
  return translatedArr;
};
