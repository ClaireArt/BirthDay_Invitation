import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './Mini_Footer.css';
import { webex } from '../../Images/Images';

function Mini_Footer() {
    const { t, i18n } = useTranslation()

    return (
        <div className='mini_footer'>
            <div className='container'>
                <div className='mini_footer_content'>
                    <span>{t('mini_footer.0')}</span>
                    <a href="https://webex.am/am/" target="_blank">
                        <div className='created'>
                            <img src={webex} alt="not found" />
                            <span>Webex Technologies LLC</span>
                        </div>
                    </a>
                    <span>{t('mini_footer.1')}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Mini_Footer)