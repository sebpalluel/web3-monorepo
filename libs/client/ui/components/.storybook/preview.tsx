import theme from '@client/ui/theme';
import { Container } from '@chakra-ui/react';

export const parameters = {
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story: any) => (
    <Container mt="40px" display="flex" flexWrap="wrap" centerContent gap="4">
      <Story />
    </Container>
  ),
];
