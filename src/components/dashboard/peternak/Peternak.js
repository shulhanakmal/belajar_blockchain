import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
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
  Select,
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
  ModalCloseButton,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  TableContainer,
} from "@chakra-ui/react";
import PeternakDataCard from "./PeternakDataCard";
import Pagination from "../pagination/Pagination";

const Overlay = (props) => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

export default function Peternak({ session }) {
  const [peternak, setPeternak] = useState(null);

  const [currentPeternak, setCurrentPeternak] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);

  const [nama, setNama] = useState(null);
  const [noHp, setNoHp] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [totalPeternak, setTotalPeternak] = useState(null);

  useEffect(() => {
    getPeternakSupabase();
  }, [session]);

  const handleSubmit = async () => {
    if (nama && noHp && email && username && password) {
      var temp = "0";
      var currentKodePeternak = "0";
      try {
        const { data, error } = await supabase.from("data_peternak").insert({
          nama: nama,
          no_hp: noHp,
          email: email,
          username: username,
          password: password,
        });

        temp = data[0].id;
        if (totalPeternak < 10) {
          currentKodePeternak = "PT00" + (totalPeternak + 1);
        } else if (totalPeternak < 100) {
          currentKodePeternak = "PT0" + (totalPeternak + 1);
        } else {
          currentKodePeternak = "PT" + (totalPeternak + 1);
        }
      } catch (e) {
        alert(e.message);
      }
      try {
        const { data, error } = await supabase
          .from("data_peternak")
          .update({ kode_peternak: currentKodePeternak })
          .match({ id: temp });
      } catch (e) {
        alert(e.message);
      }
      window.open("/peternak", "_self");
    } else {
      alert("Harap isi dengan lengkap");
    }
  };

  async function getPeternakSupabase() {
    try {
      let { data, error, status, count } = await supabase
        .from("data_peternak")
        .select()
        .order("id", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPeternak(data);
        setTotalPeternak(data.length);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const onPageChanged = async (data) => {
    setPeternak(peternak);
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPeternakTemp = peternak.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentPeternak(currentPeternakTemp);
    setTotalPage(totalPages);
  };

  return (
    <>
      <Box ml={{ base: 0, md: 60 }}>
        <Flex
          bg={useColorModeValue("gray.100", "gray.900")}
          align="center"
          justify="center"
          css={{
            backgroundAttachment: "fixed",
          }}
          id="contact"
        >
          <Box
            borderRadius="lg"
            m={{ base: 5, md: 5, lg: 5 }}
            p={{ base: 5, lg: 5 }}
          >
            <Heading
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              color="#333"
            >
              Data Peternak
            </Heading>
            <Tabs variant="soft-rounded" colorScheme="orange" mt="5">
              <TabList>
                <Tab>Data Peternak</Tab>
                <Tab>Input Data Peternak</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                      <Stack
                        spacing={{ base: 4, md: 8, lg: 20 }}
                        direction={{ base: "column", md: "row" }}
                      >
                        <Box
                          bg={useColorModeValue("white", "gray.700")}
                          borderRadius="lg"
                          p="2"
                          color={useColorModeValue(
                            "gray.700",
                            "whiteAlpha.900"
                          )}
                          shadow="base"
                          w="75vw"
                        >
                          <Flex>
                            <TableContainer>
                              <Table variant="simple">
                                <Thead>
                                  <Tr>
                                    <Th>No Peternak</Th>
                                    <Th>Nama</Th>
                                    <Th>Handphone</Th>
                                    <Th>Email</Th>
                                    <Th>Username</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {currentPeternak &&
                                    currentPeternak.map(function (p, i) {
                                      return <PeternakDataCard peternak={p} />;
                                    })}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </Flex>
                          {currentPeternak === null ||
                          currentPeternak.length === 0 ? (
                            <Flex mt="8" mb="8" align="center" justify="center">
                              <Heading
                                fontSize={{
                                  base: "2xl",
                                  md: "3xl",
                                }}
                              >
                                No Data
                              </Heading>
                            </Flex>
                          ) : (
                            <Flex mt="8" align="center" justify="center"></Flex>
                          )}
                          <Flex align="center" justify="center">
                            {(() => {
                              if (totalPeternak != null) {
                                return (
                                  <>
                                    <Pagination
                                      totalRecords={totalPeternak}
                                      pageLimit={15}
                                      pageNeighbours={1}
                                      onPageChanged={onPageChanged}
                                    />
                                  </>
                                );
                              }
                            })()}
                          </Flex>
                        </Box>
                      </Stack>
                    </VStack>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                      <Stack
                        spacing={{ base: 4, md: 8, lg: 20 }}
                        direction={{ base: "column", md: "row" }}
                      >
                        <Box
                          bg={useColorModeValue("white", "gray.700")}
                          borderRadius="lg"
                          p="4"
                          color={useColorModeValue(
                            "gray.700",
                            "whiteAlpha.900"
                          )}
                          shadow="base"
                          w="75vw"
                        >
                          <VStack spacing="5">
                            <FormControl isRequired>
                              <FormLabel>Nama Peternak</FormLabel>
                              <InputGroup>
                                <Input
                                  value={nama || ""}
                                  onChange={(e) => setNama(e.target.value)}
                                  type="text"
                                  name="nama"
                                  placeholder="Nama Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Handphone</FormLabel>

                              <InputGroup>
                                <Input
                                  value={noHp || ""}
                                  onChange={(e) => setNoHp(e.target.value)}
                                  type="text"
                                  name="no_hp"
                                  placeholder="No. Handphone Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Email</FormLabel>

                              <InputGroup>
                                <Input
                                  value={email || ""}
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="email"
                                  name="email"
                                  placeholder="Email Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Username</FormLabel>

                              <InputGroup>
                                <Input
                                  value={username || ""}
                                  onChange={(e) => setUsername(e.target.value)}
                                  type="text"
                                  name="username"
                                  placeholder="Username Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Password</FormLabel>

                              <InputGroup>
                                <Input
                                  value={password || ""}
                                  onChange={(e) => setPassword(e.target.value)}
                                  type="password"
                                  name="password"
                                  placeholder="Password Peternak"
                                />
                              </InputGroup>
                            </FormControl>
                          </VStack>
                          <Flex mt="5">
                            <Button
                              colorScheme="blue"
                              bg="blue.400"
                              mr="2"
                              color="white"
                              _hover={{
                                bg: "blue.500",
                              }}
                              onClick={handleSubmit}
                            >
                              Submit
                            </Button>
                            <Button
                              colorScheme="red"
                              bg="red.400"
                              color="white"
                              _hover={{
                                bg: "blue.500",
                              }}
                            >
                              Reset
                            </Button>
                          </Flex>
                        </Box>
                      </Stack>
                    </VStack>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
