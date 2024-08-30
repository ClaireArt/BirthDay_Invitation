import { Formik } from 'formik';
import React, { memo, useState } from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import './Form.css';
import axios from 'axios';
function Form() {
    const { t, i18n } = useTranslation();
    const [respMessage, setRespMessage] = useState('');

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('form.8')),
        guest: yup.string().required(t('form.8'))
        .matches(/[0-9]/, t('form.9')),
        message: yup.string(),
        radio_group: yup.string().required(t('form.8')),
    });

    const handleRegister = async (e, handleSubmit, isValid, values) => {
        e.preventDefault();
        handleSubmit();

        const obj = {
            fullname: values.name,
            number_guest: values.guest,
            message: values.message,
            coming_rezult: values.radio_group,
        };

        console.log(obj, 'ff');

      

        if (values.name && values.guest  && values.radio_group && isValid) {
            const { data } = await axios.post('https://backend.karenpetrosyan.webex.am/api/send-message', obj)
            // const { data } = await axios.post('https://goreyans.webex.am/api/send-message', obj)

            setRespMessage(data);
        }
    };

    return (
        <div className='form'>
            <Formik
                initialValues={{
                    name: '',
                    guest: '',
                    message: '',
                    radio_group: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                }}
                validateOnBlur
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form className="register" onSubmit={(e) => handleRegister(e, handleSubmit, isValid, values)}>
                        <div className='full_name_div'>
                            {/* <span>{t('form.0')}</span> */}
                            <div className="name_inp">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t('form.1')}
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                    autoComplete='off'
                                />
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>
                            <div className="guest_inp">
                                <input
                                    type="text"
                                    name="guest"
                                    placeholder={t('form.10')}
                                    onChange={handleChange}
                                    value={values.guest}
                                    onBlur={handleBlur}
                                    autoComplete='off'
                                />
                                {touched.guest && errors.guest && <p className="error">{errors.guest}</p>}
                            </div>
                            <textarea
                                name="message"
                                placeholder={t('form.3')}
                                onChange={handleChange}
                                value={values.message}
                                onBlur={handleBlur}
                            ></textarea>
                            {touched.message && errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <div className='radio_inp'>
                            <span>{t('form.4')}</span>
                            <div>
                                <input
                                    type='radio'
                                    id="rdo1"
                                    className="radio-input"
                                    name="radio_group"
                                    value="yes"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.radio_group === "yes"}
                                />
                                <label htmlFor="rdo1" className="radio-label">
                                    <span className="radio-border"></span>
                                    {t('form.5')}
                                </label>
                            </div>
                            <div>
                                <input
                                    type='radio'
                                    id="rdo2"
                                    className="radio-input"
                                    name="radio_group"
                                    value="no"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.radio_group === "no"}
                                />
                                <label htmlFor="rdo2" className="radio-label">
                                    <span className="radio-border"></span>
                                    {t('form.6')}
                                </label>
                            </div>
                            {touched.radio_group && errors.radio_group && <p className="error">{errors.radio_group}</p>}
                        </div>
                        <button type='submit' className='register_btn'>{t('form.7')}</button>
                        {respMessage.success && <span className="success">{t('form.11')}</span>}
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default memo(Form);
