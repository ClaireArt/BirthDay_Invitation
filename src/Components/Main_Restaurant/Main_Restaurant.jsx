import React, { memo, useEffect, useRef, useState } from 'react';
import { restaurant_1, restaurant_2, restaurant_3 } from '../../Images/Images';
import { useTranslation } from 'react-i18next';
import './Main_Restaurant.css';

function Main_Restaurant() {
    const { t, i18n } = useTranslation();
    const [restaurantDisplay, setRestaurantDisplay] = useState(false);
    const restaurantRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (restaurantRef.current && offset > restaurantRef.current.offsetTop - 500) {
                setRestaurantDisplay(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className='main_restaurant' ref={restaurantRef}>
            <div className='container'>
                <div className='main_restaurant_content'>
                    <h1>{t('main_restaurant.0')}</h1>
                    <div className='restaurant_navigate'>
                        <div className='restaurant'>
                            {
                                restaurantDisplay &&
                                <div className='restaurant_1'>
                                    <div><img src={restaurant_1} alt="not found" /></div>
                                </div>
                            }
                            {
                                restaurantDisplay &&
                                <div className='restaurant_2_3'>
                                    <div>
                                        <img src={restaurant_2} alt="not found" />
                                    </div>
                                    <div>
                                        <img src={restaurant_3} alt="not found" />
                                    </div>
                                </div>
                            }
                        </div>
                        <a href="https://yandex.by/maps/10262/yerevan/?ll=44.552196%2C40.187364&mode=routes&rtext=40.195515%2C44.494510~40.177638%2C44.529983&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D175194505852&z=13" target="_blank">
                            <button className='get'>{t('main_restaurant.1')}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Main_Restaurant)