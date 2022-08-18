// file ini disalin dari file peternak yang masih menggunakan aksi: tulis blockchain.
// sementara bagian blockchainnya ditutup, karena masih perlu penyesuaian.
// sebaiknya lihat penjualan2, yang disalin dari file peternak tanpa blockchain dulu
import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  useClipboard,
  useColorModeValue,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import TraceabilityAbi from "../../../abi/TraceabilityAbi";
import { useNavigate } from "react-router-dom";

const Overlay = (props) => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

// export default function Penjualan({ session }) {
export default function Traceability({ session }) {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  // const [peternaks, setPeternaks] = useState(null);
  const [traceability, setTraceability] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState("");

  const [data, setData] = useState(null);
  const contractAddress = "0x0a6157DBDD8E0bDd38AE61384fC0590FfD372206";

  // const [nama, setNama] = useState(null);
  // const [provinsi, setProvinsi] = useState(null);
  // const [kecamatan, setKecamatan] = useState(null);
  // const [kelurahan, setKelurahan] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  const [no_kemas, setNoKemas] = useState(null);
  const [volume_hasil_kemas_botol, setVolumeHasilKemasBotol] = useState(null);
  const [area_distribusi, setAreaDistribusi] = useState(null);
  const [tgl_selesai_prod, setTglSelesaiProd] = useState(null);
  const [tgl_kadaluarsa, setTglKadaluarsa] = useState(null);
  const [no_kantung_panen, setNoKantungPanen] = useState(null);
  const [no_halal, setNoHalal] = useState(null);
  const [no_bpom, setNoBPOM] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // getPeternakSupabase();
    getTraceabilitySupabase();
  }, [session]);

  // async function getPeternakBlockchain() {
  async function getTraceabilityBlockchain() {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      let contract = new ethers.Contract(
        contractAddress,
        TraceabilityAbi,
        signer
      );
      let transaction = await contract.getAlltraceability();

      setData(transaction);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSubmit = async () => {
    // if (nama && provinsi && kecamatan && kelurahan && longitude && latitude) {
    if (
      no_kemas &&
      volume_hasil_kemas_botol &&
      area_distribusi &&
      tgl_selesai_prod &&
      tgl_kadaluarsa &&
      no_kantung_panen &&
      no_halal &&
      no_bpom
    ) {
      try {
        // const { data, error } = await supabase.from("panen").upsert({
        const { data, error } = await supabase.from("log_kemas").upsert({
          // nama: nama,
          // provinsi: provinsi,
          // kecamatan: kecamatan,
          // kelurahan: kelurahan,
          // longitude: longitude,
          // latitude: latitude,
          no_kemas: no_kemas,
          volume_hasil_kemas_botol: volume_hasil_kemas_botol,
          area_distribusi: area_distribusi,
          tgl_selesai_prod: tgl_selesai_prod,
          tgl_kadaluarsa: tgl_kadaluarsa,
          no_kantung_panen: no_kantung_panen,
          no_halal: no_halal,
          no_bpom: no_bpom,
        });

        // window.open("/panen", "_self");
        window.open("/log_kemas", "_self");
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Harap isi dengan lengkap");
    }
  };

  async function handleClick(id) {
    const contractAddress = "0x0a6157DBDD8E0bDd38AE61384fC0590FfD372206";

    console.log("contract", contractAddress);

    if (id) {
      try {
        const { data, error } = await supabase
          // .from("panen")
          .from("log_kemas")
          .select()
          .eq("id", id)
          .single();

        console.log("cek data", data);

        // insert ke blockchain
        try {
          const web3Modal = new Web3Modal();
          const connection = await web3Modal.connect();
          const provider = new ethers.providers.Web3Provider(connection);
          const signer = provider.getSigner();

          var json = JSON.stringify(data);

          const updateData = new FormData();
          // input ke blockchain
          let contract = new ethers.Contract(
            contractAddress,
            TraceabilityAbi,
            signer
          );

          for (const dataObject in data) {
            if (
              `${data[dataObject]}` == null ||
              `${data[dataObject]}` == "null"
            ) {
              data[dataObject] = "";
            }
          }
          let transaction = await contract.StoreAddTraceability(
            data.id,
            data.no_kemas,
            data.volume_hasil_kemas_botol,
            data.area_distribusi,
            data.tgl_selesai_prod,
            data.tgl_kadaluarsa,
            data.no_kantung_panen,
            data.no_halal,
            data.no_bpom,
            json,
            data.created_at
          );
          console.log(transaction.hash);
          await transaction.wait();

          // end input ke blockchain

          await alert("Data berhasil ditulis ke blockchain");
          await navigate("/traceability");
        } catch (e) {
          alert(e.message);
        }
        // end insert ke blockchain
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Data tidak ditemukan");
    }
  }

  // async function getPeternakSupabase() {
  async function getTraceabilitySupabase() {
    try {
      // let { data, error, status } = await supabase.from("panen").select();
      let { data, error, status } = await supabase.from("log_kemas").select();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // setPeternaks(data);
        setTraceability(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
              {/*Data Panen*/}
              Data Traceability
            </Heading>
            <Tabs variant="soft-rounded" colorScheme="orange" mt="5">
              <TabList>
                <Tab>Data Traceability</Tab>
                {/* <Tab>Input Data Panen</Tab> */}
                {/*<Tab>Input Data Traceability</Tab>*/}
                {/*<Tab onClick={getPeternakBlockchain}>Traceability Panen</Tab>*/}
                <Tab onClick={getTraceabilityBlockchain}>
                  Traceability Pengemasan
                </Tab>
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
                                    {/*
                                  <Th>Nama</Th>
                                  <Th>Provinsi</Th>
                                  <Th>Kecamatan</Th>
                                  <Th>Kelurahan</Th>
                                  <Th>Logitude</Th>
                                  <Th>Latitude</Th>
                                  */}
                                    <Th>No. Kemas</Th>
                                    <Th>Volume Hasil Kemas (Botol)</Th>
                                    <Th>Area Distribusi</Th>
                                    <Th>Tanggal Selesai Produksi</Th>
                                    <Th>Tanggal Kadaluarsa</Th>
                                    <Th>No. Kantung Panen</Th>
                                    <Th>No. Halal</Th>
                                    <Th>No. BPOM</Th>
                                    <Th>Aksi</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {/*{peternaks &&
                                  peternaks.map(function (p, i) {*/}
                                  {traceability &&
                                    traceability.map(function (p, i) {
                                      return (
                                        <Tr key={i}>
                                          {/*
                                        <Td>{p.nama}</Td>
                                        <Td>{p.provinsi}</Td>
                                        <Td>{p.kecamatan}</Td>
                                        <Td>{p.kelurahan}</Td>
                                        <Td>{p.longitude}</Td>
                                        <Td>{p.latitude}</Td>
                                        */}
                                          <Td>{p.no_kemas}</Td>
                                          <Td>{p.volume_hasil_kemas_botol}</Td>
                                          <Td>{p.area_distribusi}</Td>
                                          <Td>{p.tgl_selesai_prod}</Td>
                                          <Td>{p.tgl_kadaluarsa}</Td>
                                          <Td>{p.no_kantung_panen}</Td>
                                          <Td>{p.no_halal}</Td>
                                          <Td>{p.no_bpom}</Td>
                                          <Td>
                                            <Button
                                              colorScheme="green"
                                              size="sm"
                                              bg="green.400"
                                              color="white"
                                              onClick={(event) => {
                                                event.target.value = null;
                                                setOverlay(
                                                  <Overlay id={p.id} />
                                                );
                                                onOpen();
                                              }}
                                              _hover={{
                                                bg: "green.500",
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
                            </TableContainer>
                          </Flex>
                          {/*{peternaks === null || peternaks.length === 0 ? (*/}
                          {traceability === null ||
                          traceability.length === 0 ? (
                            <Flex m="8" mb="8" align="center" justify="center">
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
                        </Box>
                      </Stack>
                    </VStack>
                  </Box>
                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    {overlay}
                    <ModalContent>
                      <ModalHeader>Pemberitahuan</ModalHeader>
                      {/* <ModalCloseButton /> */}
                      <ModalBody>
                        <Text>
                          Transaksi akan ditulis ke blockchain, data yang
                          ditulis ke blockchain tidak bisa diubah dan dihapus.
                        </Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose} size="sm">
                          Close
                        </Button>{" "}
                        &nbsp;
                        {overlay && overlay.props.id ? (
                          <Button
                            colorScheme="blue"
                            size="sm"
                            onClick={() => {
                              handleClick(overlay.props.id);
                            }}
                          >
                            Submit
                          </Button>
                        ) : (
                          <Button colorScheme="blue" size="sm">
                            Submit
                          </Button>
                        )}
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </TabPanel>
                {/*
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
                          minW="75vw"
                        >
                          <VStack spacing="5">
                            
                            <FormControl isRequired>
                              <FormLabel>Nama</FormLabel>
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
                */}

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
                          minW="75vw"
                        >
                          <Flex>
                            <Table variant="simple">
                              <Thead>
                                <Tr>
                                  <Th>Wallet</Th>
                                  {/*<Th>Nama</Th>
                                  <Th>Kelurahan</Th>*/}
                                  <Th>No Kemas</Th>
                                  {/*<Th>Volume Hasil Kemas (Botol)</Th>
                                  <Th>Area Distribusi</Th>
                                  <Th>Tanggal Selesai Produksi</Th>
                                  <Th>Tanggal Kadaluarsa</Th>*/}
                                  <Th>No Kantung Panen</Th>
                                  <Th>No Halal</Th>
                                  <Th>No BPOM</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {data &&
                                  data.map(function (p, i) {
                                    return (
                                      <Tr key={i}>
                                        <Td>{p[0]}</Td>
                                        {/*<Td>{p[2]}</Td>
                                        <Td>{p[3]}</Td>*/}
                                        <Td>{p.no_kemas}</Td>
                                        {/*<Td>{p.volume_hasil_kemas_botol}</Td>
                                        <Td>{p.area_distribusi}</Td>
                                        <Td>{p.tgl_selesai_prod}</Td>
                                        <Td>{p.tgl_kadaluarsa}</Td>*/}
                                        <Td>{p.no_kantung_panen}</Td>
                                        <Td>{p.no_halal}</Td>
                                        <Td>{p.no_bpom}</Td>
                                      </Tr>
                                    );
                                  })}
                              </Tbody>
                            </Table>
                          </Flex>
                          {data === null || data.length === 0 ? (
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
