import React from 'react';
import {
  Container,
} from '@chakra-ui/react'

import Header from './shared/components/Header';
import WeatherPage from './shared/components/WeatherPage';

function App() {
  return (
    <>
      <Header />
      <Container display="flex" justifyContent={"center"} py="25px" h="100vh" minW="700px" >
        <WeatherPage />
      </Container>
    </>
  );
}

export default App;
