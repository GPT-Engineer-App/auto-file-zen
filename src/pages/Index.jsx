import { Container, Text, VStack, Heading, Box, Button, IconButton } from "@chakra-ui/react";
import { FaFolderOpen, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Auto File Organizer & Case Management</Heading>
        <Text fontSize="lg" textAlign="center">Effortlessly organize your files and manage cases with our intuitive app.</Text>
        <Box>
          <Button leftIcon={<FaFolderOpen />} colorScheme="teal" size="lg" m={2}>
            Organize Files
          </Button>
          <Button leftIcon={<FaFileAlt />} colorScheme="blue" size="lg" m={2}>
            Manage Cases
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;