import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('ro');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  ro: { name: 'Română' },
  en: { name: 'English' },
  ru: { name: 'Русский' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'ro')));
};
