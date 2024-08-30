import React, { memo, useEffect, useState } from 'react';
import './Timer.css';
import { useTranslation } from 'react-i18next';

function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    const targetDate = new Date(2024, 10, 3, 17, 0, 0).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        // If time is up, clear the timer
        clearInterval(timer);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSec(seconds);
    };

    // Call updateTimer once to avoid delay
    updateTimer();

    // Set up the interval to call updateTimer every second
    const timer = setInterval(updateTimer, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <h1>{t('header.0')}</h1>
      <div className='timer_content'>
        <div>
          <span>{day}</span>
          <span>{t('header.1')}</span>
        </div>
        <div>
          <span>{hour}</span>
          <span>{t('header.2')}</span>
        </div>
        <div>
          <span>{min}</span>
          <span>{t('header.3')}</span>
        </div>
        <div>
          <span>{sec}</span>
          <span>{t('header.4')}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Timer);
