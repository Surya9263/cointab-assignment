import React, { useEffect, useState } from 'react'
import { Alert, AlertIcon, AlertTitle, Box, CircularProgress, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleUser from '../components/SingleUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersDetail } from '../store/users/users.actions';
import Pagination from '../components/Pagination';


const AllUsers = () => {
  const [page,setPage]=useState(1)

  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);
  useEffect(()=>{
    dispatch(getAllUsersDetail(page,10))
  },[page])


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
    console.log("error");
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Oops! No users found, kindly fetch again</AlertTitle>
      </Alert>
    );
  }
  return (
    <Box>
      <SimpleGrid columns={[2, 1, 3]} spacing='40px'>
      {users.data?.users?.length!==0 &&  users?.data?.users?.map((e)=><SingleUser key={e._id} data={e} />)}
      </SimpleGrid>
      <Pagination total={users.data && users.data.totalPages} curr={page} onChange={(value)=>setPage(value)} />
    </Box>
  )
}

export default AllUsers