import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('hello')}</h1>
      {/* <button onClick={() => changeLanguage('en')}>English</button> */}
      <button onClick={() => changeLanguage('te')}>తెలుగు</button>
    </div>
  );
}

export default App;