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
  Spacer
} from '@chakra-ui/react';

export default function InputPeternak() {
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
                            }}>Input Data Peternak</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link 
                        px={2}
                        py={1}
                        rounded={'md'} 
                        _hover={{ textDecoration: 'none', }} 
                        href={'/peternak/'}>
                            <Button
                                colorScheme="blue"
                                bg="blue.400"
                                color="white"
                                _hover={{
                                bg: 'blue.500',
                                }}
                                isFullWidth>
                                X
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                <VStack spacing={5} mt="10">
                  <FormControl isRequired>
                    <FormLabel>Nama</FormLabel>

                    <InputGroup>
                      <Input type="text" name="nama" placeholder="Nama Peternak" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Provinsi</FormLabel>

                    <InputGroup>
                      <Input
                        type="text"
                        name="provinsi"
                        placeholder="Provinsi Peternak"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Kecamatan</FormLabel>

                    <InputGroup>
                      <Input
                        type="text"
                        name="kecamatan"
                        placeholder="Kecamatan Peternak"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Kelurahan</FormLabel>

                    <InputGroup>
                      <Input
                        type="text"
                        name="kelurahan"
                        placeholder="Kelurahan Peternak"
                      />
                    </InputGroup>
                  </FormControl>

                  <Flex mt="5" w="100%">
                    <Box flex='1' pr="5">
                        <FormControl isRequired>
                            <FormLabel>Longitude</FormLabel>
                            <InputGroup>
                            <Input
                                type="text"
                                name="longitute"
                                placeholder="Longitude"
                            />
                            </InputGroup>
                        </FormControl>
                    </Box>

                    <Box flex='1' pl="5">
                        <FormControl isRequired>
                            <FormLabel>Latitude</FormLabel>

                            <InputGroup>
                            <Input
                                type="text"
                                name="latitude"
                                placeholder="Latitude"
                            />
                            </InputGroup>
                        </FormControl>
                    </Box>
                  </Flex>
                </VStack>
                <Flex mt="5">
                    <Button
                        colorScheme="blue"
                        bg="blue.400"
                         mr='2'
                        color="white"
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                    <Button
                        colorScheme="red"
                        bg="red.400"
                        color="white"
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Reset
                    </Button>
                  </Flex>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}