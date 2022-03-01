import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
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
  Center,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton
} from '@chakra-ui/react';

const Overlay = (props) => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
  />
)

export default function Peternak({ session }) {
  const { hasCopied, onCopy } = useClipboard('example@example.com');
  const [peternaks, setPeternaks] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState('');

  useEffect(() => {
    getPeternak()
  }, [session])

  async function handleClick(id) {

    if(id) {

      try {
        const { data, error } = await supabase
        .from('peternak')
        .select()
        .eq('id', id)
        .single()

        console.log('cek data', data);

        // navigate("/peternak")
      } catch (e) {
        alert(e.message);
      }

    } else {
      alert('Data tidak ditemukan');
    }

  }

  async function getPeternak() {
    try {
      let { data, error, status } = await supabase
        .from('peternak')
        .select()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setPeternaks(data)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
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
                                  <Th>Aksi</Th>
                              </Tr>
                          </Thead>
                          <Tbody>
                            {peternaks && peternaks.map(function(p, i) {
                              return (
                                <Tr key={i}>
                                  <Td>
                                    { p.nama }
                                  </Td>
                                  <Td>
                                    { p.provinsi }
                                  </Td>
                                  <Td>
                                    { p.kecamatan }
                                  </Td>
                                  <Td>
                                    { p.kelurahan }
                                  </Td>
                                  <Td>
                                    { p.longitude }
                                  </Td>
                                  <Td>
                                    { p.latitude }
                                  </Td>
                                  <Td>
                                    <Button
                                      colorScheme="green"
                                      size="sm"
                                      bg="green.400"
                                      color="white"
                                      onClick={(event) => {
                                        event.target.value = null;
                                        setOverlay(<Overlay id={p.id}/>)
                                        onOpen()
                                      }}
                                      _hover={{
                                        bg: 'green.500',
                                      }}
                                      isFullWidth
                                    >
                                      Tulis Ke Blockchain
                                    </Button>
                                  </Td>
                                </Tr>
                              );
                            })}
                          </Tbody>
                      </Table>
                  </Flex>
                  { 
                    peternaks === null || peternaks.length === 0 ?
                    <Flex mt='8' align="center" justify="center">
                      <Heading fontSize={{
                        base: '2xl',
                        md: '3xl',
                      }}>No Data</Heading>
                    </Flex> : 
                    <Flex mt='8' align="center" justify="center"></Flex>
                  }
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Pemberitahuan</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text>Transaksi akan ditulis ke blockchain, data yang ditulis ke blockchain tidak bisa diubah dan dihapus.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} size="sm">Close</Button> &nbsp;
            {
              overlay && overlay.props.id ? (
                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={() => {
                    handleClick(overlay.props.id)
                  }}
                >
                Submit
              </Button>
              ) : (
                <Button colorScheme='blue' size="sm" >Submit</Button>
              )
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}