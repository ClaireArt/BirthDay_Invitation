import React, { memo } from 'react';
import './Language.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../translatefolder/i18n';


function Language() {

  const { t, i18n } = useTranslation()

  const changelanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='menu_language'>
      <input className='toggle' id='menu' type='checkbox' placeholder='Language' />
      <label className='style' htmlFor='menu'>
        <i className="fa fa-bars" >Language</i>
      </label>
      <div className='tab'>
        <p id='am' onClick={(e) => changelanguage(e.target.id)}>Arm</p>
      </div>
      <div className='tab'>
        <p id='ru' onClick={(e) => changelanguage(e.target.id)}>Ru</p>
      </div>
      <div className='tab'>
        <p id='en' onClick={(e) => changelanguage(e.target.id)}>Eng</p>
      </div>
    </div>
  )
}

export default memo(Language)