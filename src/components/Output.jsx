
import { Box, Button, Text } from '@chakra-ui/react';

const Output = () => {

  const onCode = async () => {

  }
  return (
    <Box w = "100%">
      <Text mb = {2} fontSize="lg">Output</Text>
      <Button
        variant = "outline"
        colorScheme="green" mb={4}
      >
        Run Code
      </Button>

    <Box
      height = "25vh"
      p={2}
      border = "1px solid"
      borderRadius = {4}
      borderColor = "#333"
    >
      Test
    </Box>
    </Box>
  )
}

export default Output
