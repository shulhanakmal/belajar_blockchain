import React, { useState } from "react";
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
  ModalCloseButton,
  Grid,
} from "@chakra-ui/react";

export default function Produk() {
  return (
    <>
      <Flex
        bg={useColorModeValue("#fdf2d0")}
        align="center"
        justify="center"
        css={{
          backgroundAttachment: "fixed",
        }}
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Box
                  bg={useColorModeValue("#fcecba")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                  minW="90vw"
                >
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <div>
                      <Heading
                        fontSize={{
                          base: "2xl",
                          md: "3xl",
                        }}
                        color={"#ed702d"}
                      >
                        Produk
                      </Heading>
                      {/*<Box
                        p="2"
                        mt="10"
                        minW="100px"
                        minH="100px"
                        bg={useColorModeValue("#f0c28a")}
                      >
                        <Text>Video</Text>
                      </Box>
                      <Box
                        p="2"
                        mt="5"
                        minW="100px"
                        minH="100px"
                        bg={useColorModeValue("#f0c28a")}
                      >
                        <Text>Teks</Text>
                      </Box>
                      
                      */}
                      <center><img src="/images/PropolisRemoveBg.png" alt="frozen raw propolis"  width= "300px" height="auto" /></center>
                      <center><b><h1>Eight Propolis</h1></b></center>
                    </div>
                    {/*<Box
                      p="2"
                      minW="100px"
                      minH="100px"
                      bg={useColorModeValue("#f0c28a")}
                    >
                      <Text>Foto</Text>
                    </Box>
                    */}
                    <div>
                    <center><img src="https://drive.google.com/uc?export=view&id=1VxVn7Tul4l0mnKTANbWnM9pbv9QYNFKa" alt="frozen raw propolis" width="255px" max-height="auto" /></center>
                    <center><b><h1>Madu</h1></b></center>
                    </div>
                    <div>
                    <Text align="justify">
                    <b>Eight propolis</b> merupakan produk berupa propolis lebah<i> trigona sp.</i> yang telah diproses sehingga aman dikonsumsi. Karakteristik propolis dari lebah <i>trigona sp.</i> berwarna kuning kecoklatan serta memiliki rasa dan aroma yang khas.<br/><b>Saran Pemakaian</b> <br/> Larutkan 5-10 tetes propolis pada air hangat atau teteskan langsung pada luka luar. Pemakaian disarankan maksimal 3 kali sehari.<br/>
                      <b>Khasiat</b><br/>
                    Situs WebMD melaporkan bahwa propolis dari lebah trigona memiliki kandungan <i>flavonoids</i> yang terkenal dapat:
<ul style={{listStylePosition:"inside"}}>
<li>
mengurangi risiko terkena serangan jantung,
</li>
  <li>
mengurangi risiko penyakit kanker,
</li>
  <li>
mengurangi ulcers/ anti bakteri,
</li>
  <li>
mengurangi radang/inflamasi,
</li>
  <li>
mengontrol kandungan gula darah,
</li>
  <li>
 mencegah anemia karena kaya akan vitamin B-complex,
</li>
  <li>
menjadi pelembab alami untuk mempercepat pemulihan luka luar.
</li>
</ul>
                    </Text>
                    </div>
                    
                    <div>
                      <Text align="justify">
                      <b>Madu dan propolis</b> dari lebah trigona memiliki harga jual yang relatif lebih mahal dibandingkan dengan madu dan propolis dari lebah <i>Aphis sp.</i> Satu koloni lebah trigona dalam menghasilkan sekitar 400 ml madu dan sekitar 100-150 gram <i>raw propolis</i> per tahun. Madu dan propolis lebah trigona juga diklaim memiliki dua kali lebih banyak nutrisi dan memiliki lebih banyak mineral (<i>potassium, magnesium, iron and zinc</i>) dibandingkan dengan madu dan propolis dari lebah <i>Aphis sp.</i>, serta memuat <i>phenolic content</i> (TPC) dan <i>flavonoid content</i> (TFC) yang tinggi.<br/>
                         <b>Khasiat</b><br/>
Madu trigona mempunyai manfaat sebagai suplemen untuk:
                        <ul style={{listStylePosition:"inside"}}>
                        <li><i>anti-ageing</i>,</li>
                          <li>meningkatkan libido,</li>
                          <li>meningkatkan kekebalan tubuh,
                          </li>
                          <li>
meningkatkan aktivitas antibakteri,</li>
                          <li>
mencairkan dahak,</li>
                          <li>mengobati sakit tenggorokan, batuk dan pilek,</li>
                          <li>menghilangkan sakit,</li>
                          <li>mempercepat kesembuhan,</li>
                          <li>antiseptik,</li>
                          <li>mengobati luka bakar, tersiram air panas, dan luka diabetes.</li>
                        </ul>
                      </Text>
                    </div>
                  </Grid>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
