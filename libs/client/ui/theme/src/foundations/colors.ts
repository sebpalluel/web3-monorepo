import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
};

/** override chakra colors here */
//https://themera.vercel.app/
const overridenChakraColors: DeepPartial<Theme['colors']> = {
  blue: {
    '50': '#E7EEFD',
    '100': '#BCCFFA',
    '200': '#91B0F7',
    '300': '#6691F4',
    '400': '#3B72F2',
    '500': '#1053EF',
    '600': '#0D43BF',
    '700': '#0A328F',
    '800': '#07215F',
    '900': '#031130',
  },
};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
