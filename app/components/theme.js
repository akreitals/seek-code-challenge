const maxContainerWidth = '940px';

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
const font = `Averta, -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif, ${emoji}`;
const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace';

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72, 96];
const space = [0, 4, 8, 16, 32, 64, 128];
const regular = 400;
const bold = 600;

const greys = {
    black: '#1c1c1c',
    charcoal: '#404040',
    midGrayDark: '#747474',
    midGrayMedium: '#898989',
    midGray: '#a8a8a8',
    midGrayLight: '#d6d6d6',
    grayMedium: '#e1e1e1',
    grayLight: '#eeeeee',
    grayLightest: '#f7f7f7',
    offWhite: '#fbfbfb',
    white: '#ffffff'
};

const brand = {
    blueDarker: '#071d40',
    blueDark: '#042763',
    blue: '#0d3880',
    blueLight: '#184da8',
    blueLighter: '#2765cf',
    pink: '#e60278',
    green: '#157e00',
    greenLight: '#5bc252',
    purple: '#9556b7',
    teal: '#00a5ad',
    orange: '#f57c00',
    yellow: '#ffc600',
    yellowLight: '#fffce3',

    primary: '#e60278',
    accent: '#9556b7',
    success: '#157e00',
    info: '#2765cf',
    warning: '#f57c00',
    error: '#e60278'
};

export const colors = {
    ...greys,
    ...brand
};

export const radius = '2px';

// boxShadows
export const boxShadows = [
    `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

const theme = {
    colors,
    font,
    mono,
    fontSizes,
    space,
    regular,
    bold,
    maxContainerWidth,
    radius,
    boxShadows
};

export default theme;
