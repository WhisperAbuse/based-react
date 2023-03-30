import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('home');

  return <h1>{t('Home page')}</h1>;
};

export default MainPage;
