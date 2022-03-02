import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import PeternakAbi from '../../abi/PeternakAbi';

export default function DataBlockchain({ session }) {
  const { hasCopied, onCopy } = useClipboard('example@example.com');
  const [ data, setData] = useState(null);
  const contractAddress = process.env.REACT_APP_CONTRACTADDRESS;

  useEffect(() => {
    getPeternak()
  }, [session])

  async function getPeternak() {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner()

        let contract = new ethers.Contract(contractAddress, PeternakAbi, signer);
        let transaction = await contract.getAllfarmer();

        setData(transaction);

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
                              }}>Data Blockchain</Heading>
                      </Box>
                      <Spacer />
                  </Flex>
                  <Flex mt='5'>
                      <Table variant='simple'>
                          <Thead>
                              <Tr>
                                  <Th>Wallet</Th>
                                  <Th>Nama</Th>
                                  <Th>Kelurahan</Th>
                              </Tr>
                          </Thead>
                          <Tbody>
                            {data && data.map(function(p, i) {
                              return (
                                <Tr key={i}>
                                  <Td>
                                    { p[0] }
                                  </Td>
                                  <Td>
                                    { p[2] }
                                  </Td>
                                  <Td>
                                    { p[3] }
                                  </Td>
                                </Tr>
                              );
                            })}
                          </Tbody>
                      </Table>
                  </Flex>
                  { 
                    data === null || data.length === 0 ?
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

    </>
  );
}