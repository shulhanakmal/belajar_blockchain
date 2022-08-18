import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiTrendingUp, FiTruck, FiSettings, FiMenu, FiClipboard } from "react-icons/fi";
import { GiBeehive, GiBee, GiBarn } from "react-icons/gi";
import { BsSpeedometer } from "react-icons/bs";
import { ReactText } from "react";

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="8vw" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"></Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const pathname = window.location.pathname;

  return (
    <Box
      bg="#f3eddc"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="9vw" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {(() => {
        if (pathname == "/") {
          return (
            <NavItem
              key="Dashboard"
              icon={BsSpeedometer}
              href="/"
              _hover={{
                textDecoration: "none",
                bg: "#ed702d",
                color: "white",
              }}
              fontSize={"18px"}
              color={"white"}
              bg="#ed702d"
            >
              <strong>Dashboard</strong>
            </NavItem>
          );
        } else {
          return (
            <NavItem
              key="Dashboard"
              icon={BsSpeedometer}
              href="/"
              _hover={{
                textDecoration: "none",
                bg: "#ed702d",
                color: "white",
              }}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
            >
              <strong>Dashboard</strong>
            </NavItem>
          );
        }
      })()}
      {(() => {
        if (
          pathname == "/peternak" ||
          pathname == "/peternakan" ||
          pathname == "/stup"
        ) {
          return (
            <NavItem
              key="Peternakan"
              icon={GiBee}
              href="/peternak"
              _hover={{
                textDecoration: "none",
                bg: "#ed702d",
                color: "white",
              }}
              fontSize={"18px"}
              color={"white"}
              bg="#ed702d"
            >
              <strong>Peternak</strong>
            </NavItem>
          );
        } else {
          return (
            <NavItem
              key="Peternakan"
              icon={GiBee}
              href="/peternak"
              _hover={{
                textDecoration: "none",
                bg: "#ed702d",
                color: "white",
              }}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
            >
              <strong>Peternak</strong>
            </NavItem>
          );
        }
      })()}

      <NavItem
        key="Panen"
        icon={GiBeehive}
        href="/panen"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Panen & Ekstraksi</strong>
      </NavItem>

      <NavItem
        key="Produksi & Pengemasan"
        icon={FiTruck}
        // href="#"
        href="/prodpeng"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Produksi & Pengemasan</strong>
      </NavItem>

      <NavItem
        key="Inventori"
        icon={GiBarn}
        // href="#"; href berfungsi utk menghubungkan tombol Inventori di Sidebar ke halaman pertama yang akan muncul saat tombol tersebut diklik.
        href="/inventori"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Inventori</strong>
      </NavItem>
      <NavItem
        key="Penjualan"
        icon={FiTrendingUp}
        // href="#"
        href="/penjualan"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Penjualan</strong>
      </NavItem>
      <NavItem
        key="Traceability"
        icon={FiClipboard}
        // href="#"
        href="/traceability"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Traceability</strong>
      </NavItem>

      <NavItem
        key="Pengaturan"
        icon={FiSettings}
        href="#"
        mt="40%"
        _hover={{
          textDecoration: "none",
          bg: "#ed702d",
          color: "white",
        }}
        fontSize={"18px"}
        color={"#ed702d"}
        bg="#f2cca3"
      >
        <strong>Pengaturan</strong>
      </NavItem>
    </Box>
  );
};

const NavItem = ({ href, icon, children, ...rest }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mt="1"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg="#f2cca3"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
