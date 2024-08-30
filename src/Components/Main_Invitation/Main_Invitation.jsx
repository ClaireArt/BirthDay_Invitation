import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Main_Invitation.css';
import { invitation_1, invitation_2, invitation_3 } from '../../Images/Images';

function Main_Invitation() {
    const { t, i18n } = useTranslation();
    const [invitationDisplay, setInvitationDisplay] = useState(false);
    const invitationRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (invitationRef.current && offset > invitationRef.current.offsetTop - 500) {
                setInvitationDisplay(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div className='main_invitation' ref={invitationRef}>
            <div className='container'>
                <div className='main_invitation_content'>
                    <div className='invintation_text'>
                        <h1>{t('main_invitation.0')}</h1>
                        <p>{t('main_invitation.1')}</p>
                        <p>{t('main_invitation.2')}</p>
                    </div>
                    <div className='invitation_box'>
                        <div className='invitation_image'>
                            {
                                invitationDisplay &&
                                <div className='invitation_image_1'><img src={invitation_1} alt="not found" /></div>
                            }
                            {
                                invitationDisplay &&
                                <div className='invitation_image_2'><img src={invitation_2} alt="not found" /></div>
                            }
                            {
                                invitationDisplay &&
                                <div className='invitation_image_3'><img src={invitation_3} alt="not found" /></div>
                            }
                        </div>
                        {
                            invitationDisplay &&
                            <div className='invitation_blank'>
                                <h1>{t('main_invitation.3')}</h1>
                                <div>
                                    <span>{t('main_invitation.4')}</span>
                                    <span>03.08.2024</span>
                                </div>
                                <div>
                                    <span>{t('main_invitation.5')}</span>
                                    <span>17.00</span>
                                </div>
                                <div>
                                    <span>{t('main_invitation.6')}</span>
                                    <span>{t('main_invitation.7')}</span>
                                </div>
                                <div>
                                    <span className='adress_text'>{t('main_invitation.8')}</span>
                                    <span className='autor_text'>{t('main_invitation.9')}</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main_Invitation
