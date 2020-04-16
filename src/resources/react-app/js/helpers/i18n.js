import messages_ru from '../translations/ru/messages.json'
import form_ru from '../translations/ru/form.json'
import static_ru from '../translations/ru/static.json'

const russian = Object.assign({}, messages_ru, form_ru, static_ru);

export function localization(value) {
    const locale = 'ru'
    let translation = '';

    switch (locale) {
        case "ru":
            translation = russian[value];
            break;
    }

    return translation ? translation : value;
}
