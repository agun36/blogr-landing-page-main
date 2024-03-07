


import React from 'react';


import MenuMobile from '../MenuMobile';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import MenuDesktop from '../MenuDesktop';

const Header = () => {
   
    const [isLessThan756] = useMediaQuery("(max-width: 756px)");
    return (
        <ChakraProvider>
               
           
            {/* Mobile screen */}
            {isLessThan756 ? <MenuMobile /> : <MenuDesktop />}
        </ChakraProvider>
    );
}

export default Header;
