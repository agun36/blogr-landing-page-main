import React from 'react';
import illustration from '../../images/illustration-editor-desktop.svg';
import { Box, ChakraProvider,Heading, Image, Text   } from '@chakra-ui/react';

const Future = () => {
    return (
        <ChakraProvider>
            <Box>
            <Box 
             display={ "flex" }
             flexDirection={{base: "column", md: "column", xl: "column"}}
             // flexWrap={{base: "wrap",md: "wrap", xl: "nowrap"}}
             justifyContent={{base: "center", md: "space-between"}}
             alignItems={{base: "center", md: "center"}}
             paddingInline={{"base": "1rem", md: "4rem"}}
             gap={{base: "2rem", md: "4rem"}}
             >
                <Box
                    textAlign={"center"}
                >
                    <Heading
                    marginTop={"5rem"}
                    marginBottom={"2rem"}
                    fontFamily={"Overpass, sans-serif"}
                    fontOpticalSizing={"auto"}
                    fontWeight={"600"}
                    fontStyle={"extrabold"}
                    >
                        Designed for the future
                    </Heading>
                </Box>
                <Box

                    display={ "flex"}
                    flexDirection={{"base": "column-reverse", md: "column-reverse", xl: "row"}}
                    gap={{base: "2rem", md: "4rem"}}
                    alignItems={"center"}
                    textAlign={{"base": "center", md: "center", xl: "left"}}
                    // overflow={{base: "visible", md: "visible", xl: "hidden"}}
                >
                    
                        <Box
                            // display={"block"}
                            width={"100%"}
                            marginLeft={{base: "0rem", md: "0rem", xl: "10rem", '2xl': "0rem"}}
                        >
                            <Box>
                                <Heading
                                fontFamily={"Overpass, sans-serif"}
                                fontOpticalSizing={"auto"}
                                fontWeight={"300"}
                                fontStyle={"extrabold"}
                                marginBottom={"1rem"}
                                >
                                    Introducing an extensible editor
                                </Heading>
                                <Text
                                fontFamily={"Overpass, sans-serif"}
                                fontOpticalSizing={"auto"}
                                fontWeight={"300"}
                                fontStyle={"extrabold"}
                                marginBottom={{base: "2rem", md: "3rem", xl: "3rem", '2xl': "3rem"}}
                                color={"gray.500"}
                                
                                >Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</Text>
                            </Box>
                            <Box>
                                <Heading
                                fontFamily={"Overpass, sans-serif"}
                                fontOpticalSizing={"auto"}
                                fontWeight={"300"}
                                fontStyle={"extrabold"}
                                marginBottom={"1rem"}
                                >
                                    Robust content management
                                </Heading>
                                <Text
                                fontFamily={"Overpass, sans-serif"}
                                fontOpticalSizing={"auto"}
                                fontWeight={"300"}
                                fontStyle={"extrabold"}
                                color={"gray.500"}
                                >Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</Text>
                            </Box>
                        </Box> 
                    
                    <Box
                        // width={"150%"}
                        // height={"100%"}
                    
                    > 
                        <Image src={illustration}
                         alt='illustration'
                        //  position={'absolute'}
                        // height={"auto"}
                        // width={"210rem"}
                        width={{base: "100%", md: "100%", xl: "100%"}}
                        // height={{base: "100%", md: "100%", xl: "100%"}}
                        objectFit={"contain"}
                        // overflow={"hidden"}
                       marginLeft={{"base": "0rem", md: "0rem", xl: "12rem"}}
                        // top={0}
                        // right={'-5%'}
                        // maxW={'100%'}
                    />
                    </Box>
                </Box>
            </Box>
            </Box>
        </ChakraProvider>
    );
}

export default Future;
