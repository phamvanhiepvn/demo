// @ts-nocheck
import React from 'react';
import { IntlProvider } from 'react-intl';

function LanguageProvider(props) {
  const { language: { locale } } = props;
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={props.messages[locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}

export default LanguageProvider