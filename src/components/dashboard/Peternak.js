import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Checkbox,
  Text,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Center
} from '@chakra-ui/react';

export default function Peternak() {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      css={{
        backgroundAttachment: 'fixed',
      }}
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
                minW='90vw'>
                <Flex>
                    <Box p='2'>
                        <Heading fontSize={{
                                base: '2xl',
                                md: '3xl',
                            }}>Data Peternak</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link 
                        px={2}
                        py={1}
                        rounded={'md'} 
                        _hover={{ textDecoration: 'none', }} 
                        href={'/peternak/add'}>
                            <Button
                                colorScheme="blue"
                                bg="blue.400"
                                color="white"
                                _hover={{
                                bg: 'blue.500',
                                }}
                                isFullWidth>
                                Input Data
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                <Flex mt='5'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Nama</Th>
                                <Th>Provinsi</Th>
                                <Th>Kecamatan</Th>
                                <Th>Kelurahan</Th>
                                <Th>Logitude</Th>
                                <Th>Latitude</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </Flex>
                <Flex mt='8' align="center" justify="center">
                    <Heading fontSize={{
                base: '2xl',
                md: '3xl',
              }}>No Data</Heading>
                </Flex>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}