import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
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
} from "@chakra-ui/react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function Dashboard({ session }) {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    getData();
  }, [session]);

  async function getData() {
    const arr = [];
    try {
      let { data, error, status } = await supabase
        .rpc("peternak_pie_chart")
        .select(`*`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPieData(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  if (pieData) {
    // console.log('cek ini mal', {pieData});
    // code untuk chart

    // Create root and chart
    var root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Define data
    const label = [];
    const value = [];
    const dataChart = [];

    pieData[0].labelkelurahan.map(function (p, i) {
      label.push(p);
    });
    pieData[0].valuekelurahan.map(function (v) {
      value.push(v);
    });

    label.map(function (l, i) {
      dataChart.push({ labelkelurahan: l, valuekelurahan: value[i] });
    });

    var dataPie = dataChart;

    // Create series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "valuekelurahan",
        categoryField: "labelkelurahan",
      })
    );
    series.data.setAll(dataPie);

    // end code untuk chart
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
            <Box>
              <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                <Stack
                  spacing={{ base: 4, md: 8, lg: 20 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius="lg"
                    p={8}
                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                    shadow="base"
                    minW="70vw"
                  >
                    <Flex>
                      <Box p="2">
                        <Heading
                          fontSize={{
                            base: "2xl",
                            md: "3xl",
                          }}
                        >
                          Dashboard
                        </Heading>
                      </Box>
                      <Spacer />
                    </Flex>
                    <Flex mt="5">
                      <div id="chartdiv"></div>
                    </Flex>
                  </Box>
                </Stack>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
