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
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default function Map({ session, pierad = "50", piefont = "12px" }) {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [pieData, setPieData] = useState(null);

  const [dataJabar, setDataJabar] = useState([]);

  useEffect(() => {
    getData();
  }, [session]);

  async function getData() {
    const arr = [];
    try {
      const { data, error } = await supabase.rpc("nama_kota_kemendagri");

      if (data) {
        console.log(data);
        setDataJabar(data);
      }
    } catch (error) {
      alert(error.message);
    }
    try {
      let { data, error, status } = await supabase
        .rpc("peternakan_pie_chart")
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
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("mapdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        homeGeoPoint: { longitude: 107.668887, latitude: -7.090911 },
        homeZoomLevel: 100,
      })
    );

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    // Set clicking on "water" to zoom out
    chart.chartContainer.get("background").events.on("click", function () {
      chart.goHome();
    });

    polygonSeries.events.on("datavalidated", function () {
      chart.goHome();
    });

    var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Picture.new(root, {
          templateField: "pictureSettings",
        }),
      });
    });

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000),
          tooltipText: "{name}",
        }),
      });
    });

    pointSeries.data.setAll([
      {
        geometry: {
          type: "Point",
          coordinates: [106.82049, -6.44385],
        },
        name: "Pondok Rajeg",
      },
    ]);

    // Make stuff animate on load
    chart.appear(1000, 100);

    // end code untuk chart
  }

  return (
    <Flex mt="5">
      <div id="mapdiv"></div>
    </Flex>
  );
}
