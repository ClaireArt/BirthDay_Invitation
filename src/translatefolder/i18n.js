import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        am: {
            translation: {
                headertitle: [
                    'ԾՆՆԴՅԱՆ',
                    'ԽՆՋՈՒՅՔ',
                ],
                timer: [
                    'Ծննդյան օրվան մնացել է',
                    'օր',
                    'ժամ',
                    'րոպե',
                    'վայրկյան',
                ],
                main_invitation: [
                    'Հրավեր',
                    'Հրավիրում ենք նշելու Կարեն Պետրոսյանի ծննդյան 50-ամյակը։',
                    'Արարողությունը տեղի կունենա «ԼԱՆՋ» ռեստորանային համալիրում։',
                    'Սիրով սպասում ենք։',
                    'Հանդիպման օր',
                    'Ժամ',
                    'Վայր',
                    '«ԼԱՆՋ» ռեստորան',
                    'Այգեստան թաղամաս, Գևորգ Ջահուկյան փող., 213/9 շինություն',
                    'Հարգանքով` Պետրոսյաններ',
                ],
                main_restaurant: [
                    '"ԼԱՆՋ" ռեստորան',
                    'Ինչպես հասնել',
                ],
                footertitle: 'Խնդրում ենք հաստատել ձեր ներկայությունը',
                form: [
                    'Մուտքագրեք Ձեր անունը և ազգանունը',
                    'Անուն  Ազգանուն',
                    'Ազգանուն',
                    'հաղորդագրություն',
                    'Խնդրում ենք հաստատել ձեր ներկայությունը',
                    'կարող ենք գալ ',
                    'չենք կարող գալ',
                    'ՈՒՂԱՐԿԵԼ',
                    'Պարտադիր դաշտ',
                    'Պարտադիր թիվ',
                    'Հյուրերի քանակ',
                    'Ձեր նամակը հաջողությամբ ուղարկվել է։',
                ],

                mini_footer: [
                    'Օնլայն հրավիրատոմսը ստեղծվել է',
                    'կողմից։'
                ],

                header: [
                    'ՄՆԱՑԵԼ Է',
                    'օր',
                    'ժամ',
                    'րոպե',
                    'վայրկյան'
                ]
            },
        },

        ru: {
            translation: {
                headertitle: [
                    'В Честь Дня Рождения',
                    'Вечеринка',
                ],
                timer: [
                    'До дня рождения осталось',
                    'день',
                    'час',
                    'минута',
                    'секунда',
                ],
                main_invitation: [
                    'Приглашение',
                    'Приглашаем Вас отметить 50-летие Карена Петросяна.',
                    'Церемония пройдет в ресторанном комплексе «ЛАНЖ».',
                    'Мы ждем с любовью.',
                    'День встречи',
                    'Время',
                    'Место',
                    '«ЛАНЖ» ресторан',
                    'Айгестанский квартал, ул. Геворга Джаукяна, дом 213/9',
                    'С уважением` Петросяны.',
                ],
                main_restaurant: [
                    '"ЛАНЖ" ресторан',
                    'Как добраться',
                ],
                footertitle: 'Просим Вас подтвердить свое присутствие',
                form: [
                    'Введите свое имя и фамилию',
                    'Имя Фамилия',
                    'Фамилия',
                    'Сообщение',
                    'Просим вас подтвердить свое присутствие',
                    'Мы придем',
                    'Не сможем прийти',
                    'Отправить',
                    'Обязательное поле',
                    'Обязательная цифра',
                    'Количество гостей',
                    'Ваше письмо было успешно отправлено.'
                ],
                mini_footer: [
                    'Онлайн-приглашение создал',
                    ''
                ],

                header:[
                    'Остаётся',
                    'день',
                    'час',
                    'минута',
                    'секунда'
                ]
            },
        },

        en: {
            translation: {
                headertitle: [
                    'Birthday',
                    'Party',
                ],
                timer: [
                    'left for the birthday',
                    'day',
                    'time',
                    'minute',
                    'second',
                ],
                main_invitation: [
                    'Invitation',
                    'We invite you to celebrate Karen Petrosyan’s 50th anniversary!',
                    'The ceremony will take place in «LANJ» restaurant complex.',
                    'We are waiting with love.',
                    'Meeting day',
                    'Hour',
                    'Place',
                    '«LANJ» restaurant',
                    'Aygestan district, Gevorg Jahukyan str., building 213/9',
                    'With respect` Petrosyan\'s',
                ],
                main_restaurant: [
                    '"LANJ" restaurant',
                    'How to get there',
                ],
                footertitle: 'Please confirm your presence.',
                form: [
                    'Enter your Name and Surname',
                    'Name Surname',
                    'Surname',
                    'Message',
                    'Please confirm your presence',
                    'We will come',
                    'We can\'t come',
                    'SEND',
                    'Required field',
                    'Required number',
                    'Number of guests',
                    'Your email has been sent successfully.'
                ],
                mini_footer: [
                    'Online invitation created by',
                    ''
                ],

                header: [
                    "Remains",
                    'day',
                    'hour',
                    'minute',
                    'second'
                ]
            },
        },
    },
    lng: 'am',
    fallbackLng: 'am', // Fallback language
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;