import React from 'react'
import {useNavigate} from "react-router-dom"
import {
    Box,
    Button,
    ButtonGroup,
    CircularProgress,
    Heading,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
  } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, getAllUsers, getAllUsersDetail } from '../store/users/users.actions';

const Home = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);
  const getAll = () => {
    dispatch(getAllUsers());
  };

  const deleteAll = () => {
    dispatch(deleteUsers());
  };

  const getDetail = () => {
    navigate("/users")
  };

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
    <div>
        <ButtonGroup>
        <Button onClick={getAll}>FETCH ALL USERS</Button>
        <Button onClick={deleteAll}>DELETE ALL USERS</Button>
        <Button onClick={getDetail}>ALL USERS DETAIL</Button>
      </ButtonGroup>
      <Heading>
        {users.msg && users.msg}
      </Heading>
    </div>
  )
}

export default Home