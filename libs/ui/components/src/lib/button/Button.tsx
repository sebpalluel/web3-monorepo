import { Button as ChakraButton, ButtonProps, useStyleConfig } from '@chakra-ui/react';

export function Button(props: ButtonProps) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Button', { variant });

  // Pass the computed styles into the `__css` prop
  return <ChakraButton __css={styles} {...rest} />;
}
