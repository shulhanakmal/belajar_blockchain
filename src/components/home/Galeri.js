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

export default function Galeri() {
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
                  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    <div>
                      <Heading
                        fontSize={{
                          base: "2xl",
                          md: "3xl",
                        }}
                        color={"#ed702d"}
              
                      >
                        Galeri
                      </Heading>
                      
                      <img src="https://drive.google.com/uc?export=view&id=1JaiVKdS2nkqkvYlzVcOpbnhgG_Q5jatu" alt="inspeksi stup" width="250px" height="150px" />
                     {/* <img src="/images/InspeksiStup.PNG" alt="inspeksi stup" width="250px" height="150px" />
                       */}
                      
                      {/*<Box
                        p="2"
                        mt="10"
                        minW="100px"
                        minH="100px"
                        bg={useColorModeValue("#f0c28a")}
                      >
                        <Text>Video</Text>
                      </Box>*/}
                    </div>
                    {/*<Box
                      p="2"
                      minW="100px"
                      minH="100px"
                      bg={useColorModeValue("#f0c28a")}
                    >
                      <Text>Foto</Text>
                    </Box> 
                    https://drive.google.com/file/d//view?usp=sharing
                    */}
                    <div>
                      <br></br>
                     <img src="https://drive.google.com/uc?export=view&id=1lPMQCRa0QBm1-EmFu5EzwGvezXe0Jtik" alt="ukuran lebah" width="300px" height="300px" />
                    </div>
                    <div>
                      <br></br>
                      <img src="https://drive.google.com/uc?export=view&id=131sM2IFW82XiGncyaJbD3OSWu_h43z3j" alt="Propolis di Stup"  data-rotate="90" />
                    </div>

                    <div>
                      <br></br>
                      <img src="https://drive.google.com/uc?export=view&id=1UNx6ot-NeHU7I414oFaftsZw-5SR-UxT" alt="trigona di lily" width="300px" height="300px" />
                    </div>

                    <div>
                      <img src="https://drive.google.com/uc?export=view&id=1Ru3yFn9hm9g96vXMc3qqTTey6QozXcdq" alt="raw propolis" width="300px" height="300px" />
                    </div>

                    <div>
                      <img src="https://drive.google.com/uc?export=view&id=1WQo7szYbGRQ_MRX_lp1TodTrCFzxphCs" alt="frozen raw propolis" width="300px" height="300px" />
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
