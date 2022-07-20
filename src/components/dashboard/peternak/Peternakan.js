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
  UnorderedList,
  ListItem,
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
import PeternakanDataCard from "./PeternakanDataCard";
import Pagination from "../pagination/Pagination";

const Overlay = (props) => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

export default function Peternakan({ session }) {
  const [peternak, setPeternak] = useState(null);
  const [peternakan, setPeternakan] = useState(null);
  const [detailPeternakan, setDetailPeternakan] = useState(null);
  const [detailStup, setDetailStup] = useState(null);

  const [currentPeternakan, setCurrentPeternakan] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [overlay, setOverlay] = useState("");

  const [data, setData] = useState(null);

  const [nama, setNama] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [kota, setKota] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [kelurahan, setKelurahan] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const [totalPeternakan, setTotalPeternakan] = useState(null);

  useEffect(() => {
    getPeternakSupabase();
    getPeternakanSupabase();
  }, [session]);

  const handleSubmit = async () => {
    if (
      nama &&
      provinsi &&
      kota &&
      kecamatan &&
      kelurahan &&
      longitude &&
      latitude
    ) {
      var temp = "0";
      var currentKodePeternakan = "0";
      try {
        const { data, error } = await supabase.from("data_peternakan").insert({
          provinsi: provinsi,
          kota: kota,
          kecamatan: kecamatan,
          kelurahan: kelurahan,
          longitude: longitude,
          latitude: latitude,
        });

        temp = data[0].id;
        if (totalPeternakan < 9) {
          currentKodePeternakan = "PN00" + (totalPeternakan + 1);
        } else if (totalPeternakan < 99) {
          currentKodePeternakan = "PN0" + (totalPeternakan + 1);
        } else {
          currentKodePeternakan = "PN" + (totalPeternakan + 1);
        }
      } catch (e) {
        alert(e.message);
      }
      try {
        const { data, error } = await supabase
          .from("data_peternakan")
          .update({ kode_peternakan: currentKodePeternakan })
          .match({ id: temp });
      } catch (e) {
        alert(e.message);
      }
      try {
        const { data, error } = await supabase
          .from("rel_peternak_peternakan")
          .insert({
            fk_peternak: nama,
            fk_peternakan: temp,
          });
      } catch (e) {
        alert(e.message);
      }
      window.open("/peternakan", "_self");
    } else {
      alert("Harap isi dengan lengkap");
    }
  };

  async function getSinglePeternakan(id) {
    if (id) {
      var temp = "0";
      try {
        const { data, error } = await supabase
          .from("rel_peternak_peternakan")
          .select("*, fk_peternakan(*), fk_peternak(*)")
          .eq("id", id)
          .single();

        if (data) {
          temp = data.fk_peternakan.id;
          setDetailPeternakan(data);
        }
      } catch (e) {
        alert(e.message);
      }

      try {
        const { data, error } = await supabase
          .from("rel_peternakan_stup")
          .select("*, fk_peternakan(*), fk_stup(*)")
          .eq("fk_peternakan", temp);

        if (data) {
          setDetailStup(data);
        }
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Data tidak ditemukan");
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

  async function getPeternakanSupabase() {
    try {
      let { data, error, status } = await supabase
        .from("rel_peternak_peternakan")
        .select("*, fk_peternakan(*), fk_peternak(*)")
        .order("id", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPeternakan(data);
        setTotalPeternakan(data.length);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const closeModal = async () => {
    setDetailPeternakan(null);
    setDetailStup(null);
    onClose();
  };

  const onPageChanged = async (data) => {
    setPeternakan(peternakan);
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPeternakanTemp = peternakan.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentPeternakan(currentPeternakanTemp);
    setTotalPage(totalPages);
  };

  const lihatData = (event, id) => {
    getSinglePeternakan(id);
    event.target.value = null;
    setOverlay(<Overlay id={id} />);
    onOpen();
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
              Data Peternakan
            </Heading>
            <Tabs variant="soft-rounded" colorScheme="orange" mt="5">
              <TabList>
                <Tab>Data Peternakan</Tab>
                <Tab>Input Data Peternakan</Tab>
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
                                    <Th>No. Peternakan</Th>
                                    <Th>Nama</Th>
                                    <Th>Provinsi</Th>
                                    <Th>Kota</Th>
                                    <Th>Aksi</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {currentPeternakan &&
                                    currentPeternakan.map(function (p, i) {
                                      return (
                                        <PeternakanDataCard
                                          peternakan={p}
                                          lihatData={lihatData}
                                        />
                                      );
                                    })}
                                  {/* {peternakan &&
                                    peternakan.map(function (p, i) {
                                      return (
                                        <Tr key={p.id}>
                                          <Td>
                                            {p.fk_peternakan.kode_peternakan}
                                          </Td>
                                          <Td>{p.fk_peternak.nama}</Td>
                                          <Td>{p.fk_peternakan.provinsi}</Td>
                                          <Td>{p.fk_peternakan.kota}</Td>
                                          <Td>
                                            <Button
                                              colorScheme="orange"
                                              size="sm"
                                              bg="orange.400"
                                              color="white"
                                              onClick={(event) => {
                                                getSinglePeternakan(p.id);
                                                event.target.value = null;
                                                setOverlay(
                                                  <Overlay id={p.id} />
                                                );
                                                onOpen();
                                              }}
                                              _hover={{
                                                bg: "orange.500",
                                              }}
                                              isFullWidth
                                            >
                                              Lihat Data
                                            </Button>
                                          </Td>
                                        </Tr>
                                      );
                                    })} */}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </Flex>
                          {peternakan === null || peternakan.length === 0 ? (
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
                              if (totalPeternakan != null) {
                                return (
                                  <>
                                    <Pagination
                                      totalRecords={totalPeternakan}
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
                  <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={closeModal}
                    size="4xl"
                    scrollBehavior={scrollBehavior}
                  >
                    {overlay}
                    <ModalContent p="4">
                      {(() => {
                        if (
                          isOpen &&
                          detailPeternakan != null &&
                          detailStup != null
                        ) {
                          return (
                            <>
                              <ModalHeader>
                                <Heading size="lg">
                                  Data Peternakan{" "}
                                  {
                                    detailPeternakan.fk_peternakan
                                      .kode_peternakan
                                  }
                                </Heading>
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody mb="2">
                                <TableContainer>
                                  <Table variant="simple">
                                    <Thead>
                                      <Tr>
                                        <Th>
                                          <Heading size="sm" mb="4">
                                            Data Peternak:
                                          </Heading>
                                        </Th>
                                        <Th>
                                          <Heading size="sm" mb="4">
                                            Data Peternakan:
                                          </Heading>
                                        </Th>
                                        <Th>
                                          <Heading size="sm" mb="4">
                                            Data Stup:
                                          </Heading>
                                        </Th>
                                      </Tr>
                                    </Thead>
                                    <Tbody>
                                      <Tr>
                                        <Td verticalAlign="top">
                                          <Text>
                                            <strong>Kode Peternak:</strong>{" "}
                                            {
                                              detailPeternakan.fk_peternak
                                                .kode_peternak
                                            }
                                          </Text>
                                          <Text>
                                            Nama:{" "}
                                            {detailPeternakan.fk_peternak.nama}
                                          </Text>
                                        </Td>
                                        <Td verticalAlign="top">
                                          <Text>
                                            <strong>Kode Peternakan:</strong>{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .kode_peternakan
                                            }
                                          </Text>
                                          <Text>
                                            Provinsi:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .provinsi
                                            }
                                          </Text>
                                          <Text>
                                            Kota:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .kota
                                            }
                                          </Text>
                                          <Text>
                                            Kecamatan:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .kecamatan
                                            }
                                          </Text>
                                          <Text>
                                            Kelurahan:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .kelurahan
                                            }
                                          </Text>
                                          <Text>
                                            Longitude:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .longitude
                                            }
                                          </Text>
                                          <Text>
                                            Latitude:{" "}
                                            {
                                              detailPeternakan.fk_peternakan
                                                .latitude
                                            }
                                          </Text>
                                        </Td>
                                        <Td verticalAlign="top">
                                          <Text>
                                            <strong>List Stup:</strong>
                                          </Text>
                                          <UnorderedList>
                                            {detailStup &&
                                              detailStup.map(function (p, i) {
                                                return (
                                                  <ListItem>
                                                    {p.fk_stup.no_stup}
                                                  </ListItem>
                                                );
                                              })}
                                          </UnorderedList>
                                        </Td>
                                      </Tr>
                                    </Tbody>
                                  </Table>
                                </TableContainer>
                              </ModalBody>
                            </>
                          );
                        } else {
                          return (
                            <Heading>
                              <center>Loading</center>
                            </Heading>
                          );
                        }
                      })()}
                    </ModalContent>
                  </Modal>
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
                              <FormLabel>Peternak</FormLabel>
                              <InputGroup>
                                <Select
                                  placeholder="Pilih Peternak"
                                  onChange={(e) => setNama(e.target.value)}
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
                              <FormLabel>Provinsi</FormLabel>

                              <InputGroup>
                                <Input
                                  value={provinsi || ""}
                                  onChange={(e) => setProvinsi(e.target.value)}
                                  type="text"
                                  name="provinsi"
                                  placeholder="Provinsi Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Kota</FormLabel>

                              <InputGroup>
                                <Input
                                  value={kota || ""}
                                  onChange={(e) => setKota(e.target.value)}
                                  type="text"
                                  name="kota"
                                  placeholder="Kota Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel>Kecamatan</FormLabel>

                              <InputGroup>
                                <Input
                                  value={kecamatan || ""}
                                  onChange={(e) => setKecamatan(e.target.value)}
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
                                  value={kelurahan || ""}
                                  onChange={(e) => setKelurahan(e.target.value)}
                                  type="text"
                                  name="kelurahan"
                                  placeholder="Kelurahan Peternak"
                                />
                              </InputGroup>
                            </FormControl>

                            <Flex mt="5" w="100%">
                              <Box flex="1" pr="5">
                                <FormControl isRequired>
                                  <FormLabel>Longitude</FormLabel>
                                  <InputGroup>
                                    <Input
                                      value={longitude || ""}
                                      onChange={(e) =>
                                        setLongitude(e.target.value)
                                      }
                                      type="text"
                                      name="longitute"
                                      placeholder="Longitude"
                                    />
                                  </InputGroup>
                                </FormControl>
                              </Box>

                              <Box flex="1" pl="5">
                                <FormControl isRequired>
                                  <FormLabel>Latitude</FormLabel>

                                  <InputGroup>
                                    <Input
                                      value={latitude || ""}
                                      onChange={(e) =>
                                        setLatitude(e.target.value)
                                      }
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
