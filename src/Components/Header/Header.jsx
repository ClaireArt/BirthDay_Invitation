import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Timer from '../Timer/Timer';
import { background, balloons, five, zero } from '../../Images/Images';
import Language from '../Language/Language';
import './Header.css';
import Hing from '../Hing/Hing';
import CustomCanvas from '../Custom/CustomCanvas';

function Header() {
   const { t, i18n } = useTranslation();
   const [headerDisplay, setHeaderDisplay] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setHeaderDisplay(true);
      }, 500);
   }, []);

   return (
      <div className="header" style={{ backgroundImage: `url(${background})` }}>
         <div className="container">
            <Language />
            <div className="header_content">
               {headerDisplay && (
                  <div className="birthday_box">
                     <h1>{t('headertitle.0')}</h1>
                     <h2>{t('headertitle.1')}</h2>
                     <div className="age">
                        <div className="test1">
                           <CustomCanvas imgUrl={'3d_number_-_5_five (1).glb'} />
                        </div>
                        <div className="test1">
                           <CustomCanvas imgUrl={'3d_number_-_0_zero.glb'} />
                        </div>

                        {/* <img src={zero} alt="not found" /> */}
                     </div>
                     <span>03 . 08 . 2024</span>
                     <Timer />
                     {headerDisplay && (
                        <div className="balloons">
                           <img src={balloons} alt="not found" />
                        </div>
                     )}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default memo(Header);
