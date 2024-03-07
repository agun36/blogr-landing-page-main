import { Box, ChakraProvider, useBreakpointValue, Heading, Image,  Text } from '@chakra-ui/react';
import React from 'react';
import illustrationLaptop from '../../images/illustration-laptop-desktop.svg';
import illustrationLaptopMobile from '../../images/illustration-laptop-mobile.svg';
const PowerFulTool = () => {
    const imageSrc = useBreakpointValue({
        base: illustrationLaptopMobile,
        md: illustrationLaptopMobile,
        xl: illustrationLaptop,
      });
    return (
        <ChakraProvider>
            <Box
            marginTop={'5rem'}
            // display={'flex'}
            // alignItems={'center'}
            >
                <Box
                display={ "flex" }
                flexDirection={{base: "column", md: "column", xl: "row"}}
                // flexWrap={{base: "wrap",md: "wrap", xl: "nowrap"}}
                justifyContent={{base: "center", md: "space-between"}}
                alignItems={{base: "center", md: "center"}}
                paddingInline={{"base": "1rem", md: "4rem"}}
                gap={{base: "1rem", md: "4rem"}}
                >
                <Box
                marginLeft={{base: "0rem", md: "0rem", xl: "-10rem"}}

                >
                    <Image 
                    // width={{base: "100%", md: "100%"}}
                    src={imageSrc} alt='laptop' />
                    
                </Box>
                <Box
                display={ "flex" }
                flexDirection={{base: "column", md: "column", xl: "column"}}
                // flexWrap={{base: "wrap",md: "wrap", xl: "nowrap"}}
                justifyContent={{base: "center", md: "space-between"}}
                alignItems={{base: "center", md: "center", xl: "left"}}
                paddingInline={{"base": "1rem", md: "4rem"}}
                textAlign={{base: "center", md: "center", xl: "left"}}
                // alignItems={"center"}
                // direction={"column"}
                // paddingInline={"9rem"}
                // rowGap={'3.8rem'}
                width={{base: "100%", md: "100%", xl: "50%"}}
                >
                    <Box
                    marginBottom={"3rem"}
                    >
                        <Heading
                        fontFamily={"Overpass, sans-serif"}
                        fontOpticalSizing={"auto"}
                        fontWeight={"600"}
                        fontStyle={"extrabold"}
                        marginBottom={"1rem"}
                        color={'hsl(208, 49%, 24%)'}
                        >
                            Free, open, simple
                        </Heading>
                        <Text
                        fontFamily={"Overpass, sans-serif"}
                        fontOpticalSizing={"auto"}
                        fontWeight={"300"}
                        fontStyle={"extrabold"}
                        color={"gray.500"}
                        >
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting systems,
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                        fontFamily={"Overpass, sans-serif"}
                        fontOpticalSizing={"auto"}
                        fontWeight={"600"}
                        fontStyle={"extrabold"}
                        marginBottom={"1rem"}
                        color={'hsl(208, 49%, 24%)'}
                        >
                            Powerful tooling
                        </Heading>
                        <Text
                        fontFamily={"Overpass, sans-serif"}
                        fontOpticalSizing={"auto"}
                        fontWeight={"300"}
                        fontStyle={"extrabold"}
                        color={"gray.500"}
                        >
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                        </Text>
                    </Box>
                </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default PowerFulTool;
