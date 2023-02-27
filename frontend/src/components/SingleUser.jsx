import { Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const SingleUser = (props) => {
    const {name,picture,dob,gender,location}=props.data
  return (
    <Card width='sm' m={"auto"} mt={10}>
  <CardBody>
    <Image
      src={picture?.large}
      alt='Profile'
      borderRadius='lg'
      width={"100%"}
    />
    <Stack mt='6' spacing='3'>
      <Heading color='blue.600' size='md'>{name?.title} {name?.first} {name?.last}</Heading>
      <Text fontSize='xl'>
        Age: {dob?.age}
      </Text>
      <Text fontSize='xl'>
        Gender: {gender && gender}
      </Text>
      <Text fontSize='xl'>
        Country: {location?.country}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  {/* <CardFooter>
      <Button m={"auto"} variant='solid' colorScheme='blue'>
        View Details
      </Button>
  </CardFooter> */}
</Card>
  )
}

export default SingleUser