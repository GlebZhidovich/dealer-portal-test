import { palette } from "./palette"

export const defaultTheme = {
  colors: {
    primary: '#ad5389',
    secondary: '#3c1053',
    success: '#11998e',
    error: '#ff4161',
    dark: '#272C34',
    stone: '#577F95',
    navy: '#254A5D',
    navySecond: palette.navySecond,
    white: palette.white,
    lightGrey: palette.lightGrey,
  },
  avatar: {
    background: "#C1C7D0",
    color: "#FFFFFF",
  },
  button: {
    default: {
      background: {
        default: '#F5F6F7',
        hover: '#D2D5D8',
        active: '#E9EAEB',
        disabled: '#F5F6F7',
      },
      color: {
        default: '#254A5D',
        hover: '#254A5D',
        active: '#254A5D',
        disabled: palette.navyThird,
      },
    },
    primary: {
      background: {
        default: palette.skyBlue,
        hover: '#0198D4',
        active: '#028BC2',
        disabled: palette.navyThird,
      },
      color: {
        default: palette.white,
        hover: palette.white,
        active: palette.white,
        disabled: palette.navyThird,
      },
    },
    link: {
      background: {
        default: palette.transparent,
        hover: palette.transparent,
        active: palette.transparent,
        disabled: palette.transparent,
      },
      color: {
        default: palette.navySecond,
        hover: palette.navy,
        active: palette.navy,
        disabled: palette.navyThird,
      },
    },
    delete: {
      background: {
        default: palette.transparent,
        hover: palette.transparent,
        active: palette.transparent,
        disabled: palette.transparent,
      },
      color: {
        default: palette.red,
        hover: palette.red,
        active: palette.red,
        disabled: palette.navyThird,
      },
    },
    cancel: {
      background: {
        default: palette.transparent,
        hover: palette.transparent,
        active: palette.transparent,
        disabled: palette.transparent,
      },
      color: {
        default: palette.navySecond,
        hover: palette.navySecond,
        active: palette.navySecond,
        disabled: palette.navyThird,
      },
    },
  },
  input: {
    background: {
      default: '#FAFBFC',
      focused: palette.white,
      invalid: palette.white,
      disabled: '#F4F5F7'
    },
    borderColor: {
      default: palette.navySecond,
      focused: palette.navy,
      invalid: palette.red,
      disable: palette.navyThird,
    },
    color: {
      default: palette.navy,
      disabled: palette.navySecond,
    },
    placeholderColor: palette.navySecond,
  },
  label: {
    color: {
      default: palette.navy,
      disabled: palette.navySecond,
    },
    requiredIndicator: palette.red,
  },
  form: {
    errorColor: palette.red,
  },
};
