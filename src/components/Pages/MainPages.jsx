import React from 'react';
import Future from '../FutureManagement/Future.jsx';
import { Box, ChakraProvider } from '@chakra-ui/react';
import ArtInfrastructure from '../Infrastructure/ArtInfrastructure.jsx';
import PowerFulTool from '../Powerful/PowerFulTool.jsx';

const MainPages = () => {
    return (
       <ChakraProvider>
         <Box width={'100%'}>
          <Future/>
          <ArtInfrastructure/>
          <PowerFulTool/>
        </Box>
       </ChakraProvider>
    );
}

export default MainPages;
