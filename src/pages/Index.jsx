import { Container, Text, VStack, Box, HStack } from "@chakra-ui/react";

const data = [
  { label: "Jan", value: 30 },
  { label: "Feb", value: 20 },
  { label: "Mar", value: 50 },
  { label: "Apr", value: 40 },
  { label: "May", value: 60 },
  { label: "Jun", value: 70 },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Simple Bar Chart</Text>
        <Box width="100%" height="300px" border="1px solid #ccc" padding="4">
          <HStack height="100%" alignItems="flex-end" spacing={4}>
            {data.map((item, index) => (
              <Box key={index} width="50px" height={`${item.value * 3}px`} backgroundColor="teal.500" display="flex" alignItems="flex-end" justifyContent="center">
                <Text color="white" paddingBottom="2">
                  {item.value}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
        <HStack spacing={4}>
          {data.map((item, index) => (
            <Text key={index} width="50px" textAlign="center">
              {item.label}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
