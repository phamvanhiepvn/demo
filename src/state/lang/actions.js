export const CHANGE_LOCALE = 'LANGUAGE_CHANGE_LOCALE';

export function changeLocale(locale) {
  return {
    type : CHANGE_LOCALE,
    locale
  }
}