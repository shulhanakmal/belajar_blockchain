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
import StupDataCard from "./StupDataCard";
import Pagination from "../pagination/Pagination";

export default function Stup({ session }) {
  const [stup, setStup] = useState([]);
  const [peternak, setPeternak] = useState([]);
  const [peternakan, setPeternakan] = useState([]);
  const [selectedStup, setSelectedStup] = useState([]);

  const [currentStup, setCurrentStup] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);

  const [pilihPeternak, setPilihPeternak] = useState(null);
  const [pilihPeternakan, setPilihPeternakan] = useState(null);
  const [pilihStup, setPilihStup] = useState(null);
  const [jumlahStup, setJumlahStup] = useState(null);

  const [totalStup, setTotalStup] = useState(null);
  const [totalSelectedStup, setTotalSelectedStup] = useState(null);

  useEffect(() => {
    getStupSupabase();
    getPeternakSupabase();
  }, [session]);

  const handleSubmit = async (event) => {
    event.currentTarget.disabled = true;
    if (pilihPeternak && pilihPeternakan && jumlahStup) {
      var temp = "0";
      var currentKodeStup = "0";

      var totalStupRecurring = totalSelectedStup;

      for (var i = 0; i < jumlahStup; i++) {
        let query = await supabase
          .from("data_peternak")
          .select("kode_peternak")
          .eq("id", pilihPeternak);

        var kodePeternak = query.data[0].kode_peternak;

        query = await supabase
          .from("data_peternakan")
          .select("kode_peternakan")
          .eq("id", pilihPeternakan);

        var kodePeternakan = query.data[0].kode_peternakan;

        if (totalStupRecurring < 9) {
          currentKodeStup =
            kodePeternak + kodePeternakan + "ST000" + (totalStupRecurring + 1);
        } else if (totalStupRecurring < 99) {
          currentKodeStup =
            kodePeternak + kodePeternakan + "ST00" + (totalStupRecurring + 1);
        } else if (totalStupRecurring < 999) {
          currentKodeStup =
            kodePeternak + kodePeternakan + "ST0" + (totalStupRecurring + 1);
        } else {
          currentKodeStup =
            kodePeternak + kodePeternakan + "ST" + (totalStupRecurring + 1);
        }

        try {
          const { data, error } = await supabase
            .from("data_stup_peternak")
            .insert({
              status: "aktif",
              no_stup: currentKodeStup,
            });

          temp = data[0].id;
        } catch (e) {
          alert(e.message);
        }

        try {
          const { data, error } = await supabase
            .from("rel_peternakan_stup")
            .insert({
              fk_peternakan: pilihPeternakan,
              fk_stup: temp,
            });
        } catch (e) {
          alert(e.message);
        }
        totalStupRecurring = totalStupRecurring + 1;
      }
      window.open("/stup", "_self");
    } else {
      alert("Harap isi dengan lengkap");
    }
  };

  async function getStupSupabase() {
    try {
      let { data, error, status } = await supabase
        .from("rel_peternakan_stup")
        .select("*, fk_peternakan(*), fk_stup(*)")
        .order("id", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setStup(data);
        setTotalStup(data.length);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function getPeternakSupabase() {
    try {
      let { data, error, status } = await supabase
        .from("data_peternak")
        .select();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPeternak(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function getSelectedStup(id) {
    if (id) {
      try {
        const { data, error } = await supabase
          .from("rel_peternakan_stup")
          .select("*, fk_peternakan(*), fk_stup(*)")
          .eq("fk_peternakan", id);

        if (data) {
          setSelectedStup(data);
          setTotalSelectedStup(data.length);
        }
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Data tidak ditemukan");
    }
  }

  async function getSinglePeternak(id) {
    if (id) {
      try {
        const { data, error } = await supabase
          .from("rel_peternak_peternakan")
          .select("*, fk_peternakan(*), fk_peternak(*)")
          .eq("fk_peternak", id);

        if (data) {
          setPeternakan(data);
        }
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Data tidak ditemukan");
    }
  }

  const onPageChanged = async (data) => {
    setStup(stup);
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentStupTemp = stup.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentStup(currentStupTemp);
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
              Data Stup Peternakan
            </Heading>
            <Tabs variant="soft-rounded" colorScheme="orange" mt="5">
              <TabList>
                <Tab>Data Stup</Tab>
                <Tab>Input Data Stup</Tab>
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
                                    <Th>Kode Stup</Th>
                                    <Th>Kode Peternakan</Th>
                                    <Th>Status</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {currentStup &&
                                    currentStup.map(function (p, i) {
                                      return <StupDataCard stup={p} />;
                                    })}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </Flex>
                          {currentStup === null || currentStup.length === 0 ? (
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
                              if (totalStup != null) {
                                return (
                                  <>
                                    <Pagination
                                      totalRecords={totalStup}
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
                              <FormLabel>Pilih Peternak</FormLabel>
                              <InputGroup>
                                <Select
                                  placeholder="Pilih Peternak"
                                  onChange={(e) => {
                                    setPilihPeternak(e.target.value);
                                    getSinglePeternak(e.target.value);
                                  }}
                                >
                                  {peternak &&
                                    peternak.map(function (p, i) {
                                      return (
                                        <option value={p.id}>{p.nama}</option>
                                      );
                                    })}
                                </Select>
                              </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                              <FormLabel>Pilih Peternakan</FormLabel>
                              <InputGroup>
                                <Select
                                  placeholder="Pilih Peternakan"
                                  onChange={(e) => {
                                    setPilihPeternakan(e.target.value);
                                    getSelectedStup(e.target.value);
                                  }}
                                >
                                  {peternakan &&
                                    peternakan.map(function (p, i) {
                                      return (
                                        <option value={p.id}>
                                          {p.fk_peternakan.kode_peternakan}
                                        </option>
                                      );
                                    })}
                                </Select>
                              </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                              <FormLabel>Masukkan Jumlah Stup</FormLabel>
                              <InputGroup>
                                <Input
                                  value={jumlahStup || ""}
                                  onChange={(e) =>
                                    setJumlahStup(e.target.value)
                                  }
                                  type="number"
                                  min="0"
                                  name="jumlahStup"
                                  placeholder="Set Jumlah Stup"
                                />
                              </InputGroup>
                            </FormControl>
                            {/* <FormControl>
                              <FormLabel>Set Parent Stup (Opsional)</FormLabel>
                              <InputGroup>
                                <Select
                                  placeholder="Pilih Parent Stup"
                                  onChange={(e) => {
                                    setPilihStup(e.target.value);
                                  }}
                                >
                                  {selectedStup &&
                                    selectedStup.map(function (p, i) {
                                      return (
                                        <option value={p.id}>
                                          {p.fk_stup.no_stup}
                                        </option>
                                      );
                                    })}
                                </Select>
                              </InputGroup>
                            </FormControl> */}
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
