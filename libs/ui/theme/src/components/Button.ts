import { SystemStyleFunction, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle: SystemStyleFunction = (props: StyleFunctionProps) => ({
  // color: mode(props.theme.colors.neutral['100'], props.theme.colors.neutral['0'])(props),

  padding: '2px',
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },

  _hover: {
    //disabled button on hover, should have initial background.
    _disabled: {
      bg: 'initial',
    },
  },
});

const Button: ComponentStyleConfig = {
  baseStyle,
};

export default Button;
