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
    // Carrousel 1
    {
      title: "Design Projects 1",
      text: "Solusi blockchain untuk traceability madu dan propolis trigona Komunitas Peternak Lebah Priangan",
      image:
        "/images/LebahTrigonaCarrousel1.PNG",
    },
    // Carrousel 2
    {
      title: "Design Projects 2",
      text: "Lebah Trigona sp adalah lebah kecil tanpa sengat (stingless bee) dari famili Meliponini dan daya adaptasi tinggi terhadap kondisi lingkungan yang ekstrem dibandingkan dengan jenis lebah lainnya. Lebah trigona juga tergolong sangat mudah dibudidayakan dan tidak memerlukan biaya tinggi dalam pemeliharaanya.",
      image:
        "/images/LebahTrigonaCarrousel2.PNG",
    },
    // Carrousel 3
    {
      title: "Design Projects 3",
      text: "Madu dan propolis dari lebah trigona kaya akan manfaat, khususnya pada dunia kesehatan dan kosmetik. Selain itu, produk lebah trigona ini memiliki harga jual yang relatif lebih mahal dibandingkan dengan madu dan propolis dari lebah Aphis sp. Madu dan propolis lebah trigona diklaim memiliki dua kali lebih banyak nutrisi dan memiliki lebih banyak mineral (potassium, magnesium, iron and zinc) serta memuat phenolic content (TPC) dan flavonoid content (TFC) yang tinggi.",
      image:
        "/images/LebahTrigonaCarrousel3.PNG",
    },
    // Carrousel 4
    {
      title: "Design Projects 4",
      text: "Teknologi blockchain dapat menjaga keamanan data dan integritas data sehingga produk dari Bee Eight Farm dapat ditelusuri asal usulnya (traceable) dari awal produksi sampai ke tangan konsumen. Hal inil akan menumbuhkan kepercayaan dan kenyamanan konsumen dalam membeli produk Bee Eight Farm hingga tercapainya sustainable procurement.",
      image:
        "/images/LebahTrigonaCarrousel4.PNG",
    },
    // Carrousel 5
    {
      title: "Design Projects 5",
      text: "Bee Eight Farm merupakan salah satu peternakan lebah dan juga menjadi pusat produksi madu dan propolis Komunitas Peternak Lebah Priangan. Komunitas Peternak Lebah Priangan  terdiri dari 28 peternak lebah dengan total 35 peternakan yang tersebar di Jawa Barat.",
      image:
        "/images/LebahTrigonaCarrousel5.PNG",
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
                        <Image src={card.image} width="500px" maxHeight="450px" />
                      </Box>
                    </div>
                    <div>
                      <Box p="2" minW="100px" minH="100px">
                        {/*<style>
@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
</style>*/}
                        <Text>
                          {card.text}
                        </Text>
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
