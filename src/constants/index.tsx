import { createContext } from 'react';

export const AppContext = createContext<any>({});

/*
 * CONSTANTS
 */

interface LANGUAGE_LABELS_INTERFACE {
    [key: string]: string;
}

export const LANGUAGE_LABELS: LANGUAGE_LABELS_INTERFACE = {
  ru: 'Rus',
  en: 'Eng',
}


/*
 * ENUMERATIONS
 * Enums allow us to organize a collection of related values. Think of them as
 * a class for values, wherein the value can only be a string , or number.
 *
 */

export enum ROUTES {
    home = '/',
    dashboard = '/dashboard',
    map = '/map',
    customers = '/customers',
    dealers = '/dealers',
    dictionaries = '/dictionaries',
    profile = '/profile',
    siteCreate = '/site/new',
    site = '/sites/:id',
    siteInfo = '/sites/:id/info',
    page403 = '/403',
    page404 = '/404',
    page500 = '/500',
    //main
    tasks = '/tasks',
    sites = '/sites',
    reports = '/reports',
    //auth
    login = '/login',
    rememberPasswordStep1 = '/remember-password/step1',
    rememberPasswordStep2 = '/remember-password/step2',
    rememberPasswordStep3 = '/remember-password/step3',
    //admins
    users = '/users',
    communications = '/communications',
    training = '/training',
    siteProposals = '/siteProposals',
  }
  
export enum LOCAL_STORAGE_TEMPLATE {
  accessToken = 'access-token',
  refreshToken = 'refresh-token',
}

/*
enum DEVICE_SIZE {
  mobileS = '320px',
  mobileM = '375px',
  mobileL = '425px',
  tablet = '768px',
  laptop = '1024px',
  laptopL = '1440px',
  desktop = '2560px'
}

export enum DEVICE {
  mobileS = `(min-width: ${DEVICE_SIZE.mobileS})`,
  mobileM = `(min-width: ${DEVICE_SIZE.mobileM})`,
  mobileL = `(min-width: ${DEVICE_SIZE.mobileL})`,
  tablet = `(min-width: ${DEVICE_SIZE.tablet})`,
  laptop = `(min-width: ${DEVICE_SIZE.laptop})`,
  laptopL = `(min-width: ${DEVICE_SIZE.laptopL})`,
  desktop = `(min-width: ${DEVICE_SIZE.desktop})`,
  desktopL = `(min-width: ${DEVICE_SIZE.desktop})`
};
*/