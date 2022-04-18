import React from 'react'
import {
    Flex,
    Box,
    HStack,
    Heading,
    Button,
    Input
} from '@chakra-ui/react'

function Header() {
    return (
        <Flex h="65px" px="30px" flexDir="row" justifyContent="space-between" alignItems="center" borderBottom="solid 1px" borderColor="gray.100">
            <Heading size="md">Weather app</Heading>
            <HStack>
                <Box mr="10px">
                    <Input colorScheme={'brand'} placeholder="Search entire site" />
                </Box>
                <Button variant="primary" colorScheme="brand">Sign up</Button>
                <Button variant="secondary">Log in</Button>
            </HStack>
        </Flex>
    )
}

export default Header
