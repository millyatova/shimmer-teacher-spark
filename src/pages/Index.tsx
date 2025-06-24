
import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Hero title={t('hero_title')} subtitle={t('hero_subtitle')} />
      <WaitlistForm 
        title={t('waitlist_title')} 
        subtitle={t('waitlist_subtitle')} 
        placeholder={t('waitlist_placeholder')} 
        buttonText={t('waitlist_button')} 
      />
    </div>
  );
};

export default Index;
