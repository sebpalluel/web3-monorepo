import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  FormControlProps,
  FormLabelProps,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = FormControlProps &
  FormLabelProps & {
    label: React.ReactNode;
    helper?: React.ReactNode;
    error?: React.ReactNode;
    input?: ChakraInputProps & UseFormRegisterReturn;
  };

export const Input = ({ label, helper, error, input, variant, ...props }: InputProps) => {
  const styles = useStyleConfig('Button', { variant });
  const labelId = `${toCssId(label as string)}_label`;
  return (
    <FormControl
      __css={styles}
      {...props}
      {...input}
      isInvalid={!!error}
      variant="floating"
    >
      <ChakraInput
        __css={styles}
        {...input}
        {...props}
        placeholder=" "
        aria-labelledby={`${toCssId(label as string)}_label`}
        onChange={(change) => {
          if (input) input.onChange(change);
        }}
      />
      {/* It is important that the Label comes after the Control due to css selectors */}
      <FormLabel __css={styles} {...props} id={labelId}>
        {label}
      </FormLabel>
      <FormHelperText __css={styles}>{helper}</FormHelperText>
      <FormErrorMessage __css={styles}>{error}</FormErrorMessage>
    </FormControl>
  );
};

// ts function to convert a string with any character to a css id and remove any non-alphanumeric characters
export const toCssId = (str: string) => {
  return str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

export default Input;
