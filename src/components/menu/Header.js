import React, { useState } from 'react';
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
  Stack
} from '@chakra-ui/react';
import { supabase } from '../../supabaseClient';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mainColor = useColorModeValue("#00A18B", "#00A18B");

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link _hover={{ textDecoration: 'none', }}  href={'/'}><b>Traceability Bee</b></Link></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', xs: 'flex' }}>
                <Link 
                px={2}
                py={1}
                rounded={'md'} 
                _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'), }} 
                href={'/'}>Dashboard</Link>
                 <Link 
                px={2}
                py={1}
                rounded={'md'} 
                _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'), }} 
                href={'/peternak'}>Peternak</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => supabase.auth.signOut()}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}