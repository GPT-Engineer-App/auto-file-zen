import { Container, Text, VStack, Heading, Box, IconButton } from "@chakra-ui/react";
import { FaFolderOpen, FaTasks } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Auto File Organizer & Case Management</Heading>
        <Text fontSize="lg" textAlign="center">Effortlessly organize your files and manage your cases with our intuitive app.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <IconButton
            aria-label="Organize Files"
            icon={<FaFolderOpen />}
            size="lg"
            isRound
            onClick={() => alert('Organize Files feature coming soon!')}
          />
          <IconButton
            aria-label="Manage Cases"
            icon={<FaTasks />}
            size="lg"
            isRound
            onClick={() => alert('Manage Cases feature coming soon!')}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;