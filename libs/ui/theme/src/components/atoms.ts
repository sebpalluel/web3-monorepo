import type { DeepPartial, Theme, StyleFunctionProps } from '@chakra-ui/react';

const activeFormLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

// https://chakra-ui.com/community/recipes/floating-labels

export const Form: DeepPartial<Theme['components']['Form']> = {
  variants: {
    floating: (props: StyleFunctionProps) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeFormLabelStyles,
          },
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeFormLabelStyles,
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
        },
      },
    }),
  },
};

export const FormLabel: DeepPartial<Theme['components']['FormLabel']> = {
  sizes: {
    small: { fontSize: '12px' },
    medium: { fontSize: '14px' },
    large: { fontSize: '16px' },
  },
};

export const Button: DeepPartial<Theme['components']['Button']> = {
  // baseStyle: {
  //   borderRadius: 'full',
  // },
};

export const Input: DeepPartial<Theme['components']['Input']> = {};
