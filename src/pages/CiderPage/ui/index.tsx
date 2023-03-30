import { useTranslation } from 'react-i18next';

const CiderPage = () => {
  const { t } = useTranslation('cider');
  return <h1>{t('Cider page')}</h1>;
};

export default CiderPage;
