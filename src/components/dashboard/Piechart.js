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

export default function Piechart({
  session,
  pierad = "50",
  piefont = "12px",
}) {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    getData();
  }, [session]);

  async function getData() {
    const arr = [];
    try {
      let { data, error, status } = await supabase
        .rpc("peternakan_pie_chart")
        //.rpc("data_peternakan")
        //.rpc("data_peternak_pie_chart")
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
        radius: am5.percent(pierad),
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

    series.labels.template.setAll({
      fontSize: piefont,
    });

    // end code untuk chart
  }

  return (
    <Flex mt="5">
      <div id="chartdiv"></div>
    </Flex>
  );
}
