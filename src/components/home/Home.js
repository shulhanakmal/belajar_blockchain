import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  VStack,
  Grid,
  Heading,
  Text,
  IconButton,
  useBreakpointValue,
  Container,
  Image,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Design Projects 1",
      text: "Solusi blockchain untuk traceability madu dan propolis trigona Komunitas Peternak Lebah Priangan",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Design Projects 2",
      text: "Lebah Trigona sp adalah lebah kecil tanpa sengat (stingless bee) dari famili Meliponini dan daya adaptasi tinggi terhadap kondisi lingkungan yang ekstrem dibandingkan dengan jenis lebah lainnya. Lebah trigona juga tergolong sangat mudah dibudidayakan dan tidak memerlukan biaya tinggi dalam pemeliharaanya.",
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      title: "Design Projects 3",
      text: "Madu dan propolis dari lebah trigona kaya akan manfaat, khususnya pada dunia kesehatan dan kosmetik. Selain itu, produk lebah trigona ini memiliki harga jual yang relatif lebih mahal dibandingkan dengan madu dan propolis dari lebah Aphis sp. Madu dan propolis lebah trigona diklaim memiliki dua kali lebih banyak nutrisi dan memiliki lebih banyak mineral (potassium, magnesium, iron and zinc) serta memuat phenolic content (TPC) dan flavonoid content (TFC) yang tinggi.",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bg="#fdf2d0"
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="600px"
              position="relative"
              display="flex"
              justifyContent="center"
              maxWidth="80vw"
            >
              <Stack
                spacing={6}
                w={"full"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Box
                  bg="#fcecba"
                  borderRadius="lg"
                  p={8}
                  color="gray.700"
                  shadow="base"
                >
                  <Grid templateColumns="3fr 4fr" gap={6}>
                    <div>
                      <Box p="2" minW="100px" minH="100px">
                        <Image src={card.image} width="500px" />
                      </Box>
                    </div>
                    <div>
                      <Box p="2" minW="100px" minH="100px">
                        <Text>{card.text}</Text>
                      </Box>
                    </div>
                  </Grid>
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
