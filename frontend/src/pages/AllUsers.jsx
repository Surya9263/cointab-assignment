import React, { useEffect, useState } from 'react'
import { Alert, AlertIcon, AlertTitle, Box, CircularProgress, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleUser from '../components/SingleUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersDetail } from '../store/users/users.actions';


const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);
  useEffect(()=>{
    dispatch(getAllUsersDetail())
  },[])


  if (users.loading) {
    return (
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress isIndeterminate color="green.300" />
        <Text>Please wait</Text>
      </Box>
    );
  }

  
  if (users.error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Oops! Something went wrong, kindly refresh</AlertTitle>
      </Alert>
    );
  }
  return (
    <SimpleGrid columns={[2, 1, 3]} spacing='40px'>
      {users?.data?.map((e)=><SingleUser key={e._id} data={e} />)}
      </SimpleGrid>
  )
}

export default AllUsers