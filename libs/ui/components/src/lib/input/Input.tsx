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

import { toCssId } from '@boilerplate/ui-shared';

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

export default Input;
