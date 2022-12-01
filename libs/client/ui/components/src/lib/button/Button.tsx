import { useState } from 'react';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useStyleConfig,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  action?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
  const { variant, action, isLoading, ...rest } = props;

  const styles = useStyleConfig('Button', { variant });
  const [loading, setLoading] = useState(false);

  // a function that await for the action to be completed
  const handleClick = async (action: (() => void) | undefined) => {
    if (action) {
      setLoading(true);
      await action();
      setLoading(false);
    }
  };

  /// Pass the computed styles into the `__css` prop
  return (
    <ChakraButton
      __css={styles}
      onClick={() => handleClick(action)}
      isLoading={loading || isLoading}
      {...rest}
    />
  );
}
