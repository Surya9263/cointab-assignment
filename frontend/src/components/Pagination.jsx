import { Button, Flex } from '@chakra-ui/react';
import React from 'react'

const Pagination = (props) => {
    const {curr,onChange,total}=props;
    console.log(curr);
    const prev=<Button px={10} colorScheme='blue' isDisabled={curr==1} onClick={()=>onChange(curr-1)}>PREV</Button>
    const next=<Button px={10} colorScheme='blue' isDisabled={curr==total} onClick={()=>onChange(curr+1)}>NEXT</Button>
    const pages=new Array(total).fill(0).map((e,i)=><Button key={i} colorScheme='blue' isDisabled={curr==i+1} onClick={()=>onChange(i+1)} >{i+1}</Button>)
  return (
    <>
    <Flex my={6} gap={4} justifyContent="center">
    {prev}
    {pages}
    {next}
    </Flex>
    </>
  )
}

export default Pagination