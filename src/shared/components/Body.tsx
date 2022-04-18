import React from 'react'
import { Container } from '@chakra-ui/react'

function Body(props: BodyProps) {
    return (
        <Container 
            minW="90%"
        >
            {props.children}
        </Container>
    )
}

interface BodyProps {
    children?: React.ReactChild
}

export default Body
