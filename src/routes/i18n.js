// @ts-nocheck
/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const enLocaleData = require('react-intl/locale-data/en');
const viLocaleData = require('react-intl/locale-data/vi');
const enAuth = require('translations/auth/en.json');
const enCommon = require('translations/common/en.json');

const viAuth = require('translations/auth/vi.json');
const viCommon = require('translations/common/vi.json');

const enTranslationMessages = {...enAuth, ...enCommon}
const viTranslationMessages = {...viAuth, ...viCommon}

addLocaleData(enLocaleData);
addLocaleData(viLocaleData);

const DEFAULT_LOCALE = 'vi';
// prettier-ignore
const appLocales = [
    'en',
    'vi',
];
const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  vi: formatTranslationMessages('vi', viTranslationMessages),
};

export { translationMessages, appLocales, formatTranslationMessages, DEFAULT_LOCALE };
