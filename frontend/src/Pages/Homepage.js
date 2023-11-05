



import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from  "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from 'react-router-dom';

function Homepage() {
   const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userInfo from localStorage:", user);
 

  if (!user) {
    navigate("/chats"); // Correct usage of the navigate function
  }
  }, [navigate]);
  
  return (

       <Container maxW="xl" centerContent>
       <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        </Box>

         <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
              {/* <p>one !</p> */}
            </TabPanel>
            <TabPanel>
              {/* <p>Two</p> */}
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
        
      </Container>

  )
}

export default Homepage;


