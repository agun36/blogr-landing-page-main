import { Box, ChakraProvider,  Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import PhoneIllustration from '../../images/illustration-phones.svg';
import phoneCircle from '../../images/bg-pattern-circles.svg';
const ArtInfrastructure = () => {
    return (
        <ChakraProvider>
                
            <Box
            position={'relative'} 
            marginTop={'7rem'}
            // overflow={'clip'}
            >
            <Box

                // bgImage={`url(${phoneCircle})`}
                bgPosition={'left top'}
                bgSize={'contain'}
                bgRepeat={'no-repeat'}
                backgroundColor={'hsl(240, 10%, 16%)'}
                // padding={'2rem'}
                gap={'2rem'}
                marginLeft={'-2rem'}
                marginTop={{base: '18rem', md: '10rem', xl:'14rem'}}
                marginBottom={{base: '0rem', md: '10rem', xl:'14rem'}}
                height={{base: '80vh', md: '50vh', xl: '26vw'}}
                borderTopRightRadius={'6rem'}
                borderBottomLeftRadius={'6rem'}
                // overflow={'visible'}
            >
               <Box
               display={'flex'}
               flexWrap={{base: 'wrap', md: 'wrap', xl: 'nowrap'}}
               alignItems={'center'}
               justifyContent={"space-evenly"}
               gap={'2rem'}
               
               >
               <Box
               display={'flex'}
               justifyContent={'center'}
               
            //    overflow={"visible"}
               >
                <Image 
                position={'absolute'}
                zIndex={1}
                top={{base: '-14rem', md: '-5rem'}}
                left={{base: '0%',md:'0%', xl: '10%'}}
                // marginBottom={'-10rem'}
                // marginLeft={{base: '7rem', md: '8rem'}}
                src={PhoneIllustration} alt='Phone Illustration' />
                </Box>

                <Box
                width={{base: '100%',md:'45%', xl: '40%'}}
                // marginRight={{base: '0rem', md: '7rem'}}
                position={"absolute"}
                right={0}
                // left={["100%", "0%"]}
                // zIndex={99}
                top={{base: '50%', md: "25%", xl: '30%'}}
                textAlign={{base: 'center', md: 'left'}}
                >
                    <Heading
                    fontFamily={"Overpass, sans-serif"}
                    fontOpticalSizing={"auto"}
                    fontWeight={"600"}
                    fontStyle={"extrabold"}
                    fontSize={{base: '1rem', md: '1.4rem', xl: '2.5rem'}}
                    marginBottom={'1rem'}
                    color={'hsl(0, 0%, 100%)'}
                    >
                        State of the Art Infrastructure
                    </Heading>

                    <Text
                    fontFamily={"Overpass, sans-serif"}
                    fontOpticalSizing={"auto"}
                    fontWeight={"300"}
                    fontStyle={"extrabold"}
                    fontSize={{base: '0.8rem', md: '.9rem', xl: '1.2rem'}}
                    color={'gray.400'}
                    >
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site 
                        competitive.
                    </Text>
                </Box>
               </Box>
            </Box>
            </Box>
        </ChakraProvider>
    );
}

export default ArtInfrastructure;
