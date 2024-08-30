import React, { memo } from 'react';
import './Footer.css';
import Form from '../Form/Form';
import { useTranslation } from 'react-i18next';
import Firework from '../Custom/firework/Firework';

function Footer() {
   const { t, i18n } = useTranslation();

   return (
      <div className="footer">
         <div className="container">
            <div className="footer_content">
               <h1>{t('footertitle')}</h1>
               <Form />
            </div>
            <div className="Firework-bigPar">
               <div className="Firework-bigPar-child">
                  <div className="firework-par1">
                     <Firework />
                  </div>
                  <div className="firework-par2">
                     <Firework />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default memo(Footer);
