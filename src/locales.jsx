export const locales = {
    checkTechnicalBreakTimout: 30000,
    clientTimeoutIdle: 3 * 10 * 1000,
    qrTimeoutIdle: 6 * 10 * 1000,
    terminalTimeoutIdle: 6 * 10 * 1000,
    serviceTimeoutIdle: 4 * 60 * 1000,
    // languages: ['pl', 'en'],
    languages: ["pl", "en", "de", "fr", "ua"],
    pl: {
        START_PAGE: {
            TITLE: 'PROSZĘ,',
            SUBTITLE: 'WŁÓŻ SWÓJ KLUCZ, ABY OTWORZYĆ SKRZYNKĘ',
        },
        HOME_PAGE: {
            HI: 'Cześć',
            UNKNOWN: 'NIEZNANY UŻYTKOWNIK',
            TITLE: 'Proszę, czekaj.',
            SUBTITLE: 'Trwa proces otwierania...',
            TITLE_ERROR: 'Proszę, czekaj.',
            SUBTITLE_ERROR: 'ODRZUCONO UPRAWNIENIA',
        },
        ERROR_PAGE: {
            TITLE: 'BŁĄD',
            SUBTITLE: 'Skrzynka nie została otwarta',
            SUBTITLE_2: 'Daj nam znać o tym problemie',
            NOTE: 'Zostaniesz automatycznie przekierowany na start',
        },
        SUCCESS_PAGE: {
            TITLE: 'SUKCES',
            SUBTITLE: 'Skrzynka została otwarta',
            SUBTITLE_2: 'Proszę, nie zapomnij zamknąć drzwi.',
            NOTE: 'Zostaniesz automatycznie przekierowany na start',
        },
        BUTTONS: {
            BACK: 'WRÓĆ',
            FINISH: 'ZAKOŃCZ',
        }
    },
    de: {
        START_PAGE: {
            TITLE: 'BITTE,',
            SUBTITLE: 'STECKEN SIE IHREN EIGENEN SCHLÜSSEL EIN, UM DIE BOX ZU ÖFFNEN',
        },
        HOME_PAGE: {
            HI: 'Hallo',
            UNKNOWN: 'UNBEKANNTER BENUTZER',
            TITLE: 'Bitte, warten.',
            SUBTITLE: 'Es läuft der Öffnungsvorgang...',
            TITLE_ERROR: 'Bitte, warten.',
            SUBTITLE_ERROR: 'BERECHTIGUNG VERWEIGERT',
        },
        ERROR_PAGE: {
            TITLE: 'FEHLER',
            SUBTITLE: 'Die Box wurde nicht geöffnet',
            SUBTITLE_2: 'Lassen Sie uns über dieses Problem wissen',
            NOTE: 'Sie werden automatisch zum Start weitergeleitet',
        },
        SUCCESS_PAGE: {
            TITLE: 'ERFOLG',
            SUBTITLE: 'Die Box wurde geöffnet',
            SUBTITLE_2: 'Bitte vergessen Sie nicht, die Tür zu schließen.',
            NOTE: 'Sie werden automatisch zum Start weitergeleitet',
        },
        BUTTONS: {
            BACK: 'ZURÜCK',
            FINISH: 'BEENDEN',
        }
    },
    ua: {
        START_PAGE: {
            TITLE: 'БУДЬ ЛАСКА,',
            SUBTITLE: 'ВСТАВТЕ ВАШ КЛЮЧ, ЩОБ ВІДКРИТИ ЯЩИК',
        },
        HOME_PAGE: {
            HI: 'Привіт',
            UNKNOWN: 'НЕВІДОМИЙ КОРИСТУВАЧ',
            TITLE: 'Будь ласка, зачекайте.',
            SUBTITLE: 'Йде процес відкриття...',
            TITLE_ERROR: 'Будь ласка, зачекайте.',
            SUBTITLE_ERROR: 'ДОСТУП ЗАБОРОНЕНИЙ',
        },
        ERROR_PAGE: {
            TITLE: 'ПОМИЛКА',
            SUBTITLE: 'Ящик не відкрився',
            SUBTITLE_2: 'Повідомте нас про цю проблему',
            NOTE: 'Ви будете автоматично перенаправлені на початок',
        },
        SUCCESS_PAGE: {
            TITLE: 'УСПІХ',
            SUBTITLE: 'Ящик був відкритий',
            SUBTITLE_2: 'Будь ласка, не забудьте зачинити дверцята.',
            NOTE: 'Ви будете автоматично перенаправлені на початок',
        },
        BUTTONS: {
            BACK: 'НАЗАД',
            FINISH: 'ЗАВЕРШИТИ',
        }
    },
    fr: {
        START_PAGE: {
            TITLE: 'S’IL VOUS PLAÎT,',
            SUBTITLE: 'INSÉREZ VOTRE CLÉ POUR OUVRIR LA BOÎTE',
        },
        HOME_PAGE: {
            HI: 'Salut',
            UNKNOWN: 'UTILISATEUR INCONNU',
            TITLE: 'Veuillez patienter.',
            SUBTITLE: 'Le processus d’ouverture est en cours...',
            TITLE_ERROR: 'Veuillez patienter.',
            SUBTITLE_ERROR: 'AUTORISATION REFUSÉE',
        },
        ERROR_PAGE: {
            TITLE: 'ERREUR',
            SUBTITLE: 'La boîte n’a pas été ouverte',
            SUBTITLE_2: 'Faites-nous part de ce problème',
            NOTE: 'Vous serez redirigé automatiquement vers le début',
        },
        SUCCESS_PAGE: {
            TITLE: 'SUCCÈS',
            SUBTITLE: 'La boîte a été ouverte',
            SUBTITLE_2: 'Veuillez ne pas oublier de fermer la porte.',
            NOTE: 'Vous serez redirigé automatiquement vers le début',
        },
        BUTTONS: {
            BACK: 'RETOUR',
            FINISH: 'TERMINER',
        }
    },
    en: {
        START_PAGE: {
            TITLE: 'PLEASE,',
            SUBTITLE: 'PUT YOUR OWN KEY TO OPEN THE BOX',
        },
        HOME_PAGE: {
            HI: 'Hi',
            UNKNOWN: 'UNKNOWN USER',
            TITLE: 'Please, wait.',
            SUBTITLE: `It's going opening process...`,
            TITLE_ERROR: 'Please, wait.',
            SUBTITLE_ERROR: `PERMISSION DENIED`,
        },
        ERROR_PAGE: {
            TITLE: 'ERROR',
            SUBTITLE: `The box wasn’t opened`,
            SUBTITLE_2: `Let us know about this problem`,
            NOTE: 'You’ll redirect to start automatically',
        },
        SUCCESS_PAGE: {
            TITLE: 'SUCCESS',
            SUBTITLE: 'The box was opened',
            SUBTITLE_2: `Please, don’t forget to close the door.`,
            NOTE: 'You’ll redirect to start automatically',
        },
        BUTTONS: {
            BACK: 'BACK',
            FINISH: 'FINISH',
        }
    },
}

