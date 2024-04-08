export const enum AuthStatus {
    Auth ='AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN'
}

export const enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';