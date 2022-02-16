import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useColorModeValue,
    Center
} from "@chakra-ui/react";

export default function Account({ session }) {
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  const mainColor = useColorModeValue("#00A18B", "#00A18B");
  const textColor = useColorModeValue("gray.400", "white");

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } 
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Flex position="relative" >
      <Flex h={{ sm: "initial", md: "75vh", lg: "85vh" }} w="100%" maxW="1044px" mx="auto" justifyContent="space-between" pt={{ sm: "100px", md: "0px" }}>
        <Flex alignItems="center" justifyContent="start" >
          <Flex direction="column" w="100%" background="transparent" >
            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="20px">
              Profile
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Email
              </FormLabel>
              <Input value={session.user.email} borderRadius="15px" mb="24px" fontSize="sm" type="email" placeholder="email Anda" size="lg"/>
            </FormControl>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Username
              </FormLabel>
              <Input value={username || ''} onChange={(e) => setUsername(e.target.value)} borderRadius="15px" mb="24px" fontSize="sm" type="email" placeholder="username Anda" size="lg"/>
            </FormControl>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Website
              </FormLabel>
              <Input value={website || ''} onChange={(e) => setWebsite(e.target.value)} borderRadius="15px" mb="24px" fontSize="sm" type="email" placeholder="website Anda" size="lg"/>
            </FormControl>
            <FormControl>
              <Button fontSize="sm" type="button" onClick={() => updateProfile({ username, website, avatar_url })} bg={mainColor} w="100%" h="45" mb="20px" color="white" mt="20px" _hover={{bg: "teal.200"}} _active={{bg: mainColor}}>
                Update
              </Button>
            </FormControl>
            <FormControl>
              <Button fontSize="sm" type="button" onClick={() => supabase.auth.signOut()} bg={mainColor} w="100%" h="45" mb="20px" color="white" mt="20px" _hover={{bg: "teal.200"}} _active={{bg: mainColor}}>
                SIGN OUT
              </Button>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
