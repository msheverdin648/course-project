import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import {useTranslation} from 'react-i18next'


interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className } = props;

    const {t, i18n}  =  useTranslation()

    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }

    return (
        <Button 
            className={classNames(cls.langSwitcher, {}, [className])} 
            theme={ThemeButton.BORDER} 
            onClick={toggleLanguage}
        >
            {t('language')}
        </Button>
 );
}