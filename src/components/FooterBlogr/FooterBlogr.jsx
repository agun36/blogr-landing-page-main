import { Box, ChakraProvider,  Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import logo from "../../images/logo.svg";

const FooterBlogr = () => {
    return (
        <ChakraProvider>
            <Box
                marginTop={"4rem"}
            >
                <Box
                    borderTopRightRadius={"6rem"}
                    bgColor={"hsl(240, 10%, 16%)"}>
                    <Box
                        display={"flex"}
                        textAlign={{ base: "center", md: "left" }}
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent={{ base: "center", md: "space-between" }}
                        alignItems={{ base: "center", md: "flex-start" }}
                        flexWrap={"wrap"}
                        margin={{ base: "0rem", sm: "3rem", md: "5rem", lg: "12rem" }}
                        gap={{ base: "1rem", md: "4rem" }}
                        padding={{ base: "2rem", sm: "3rem", md: "4rem" }}
                    >
                        <Box>
                            <Image src={logo} alt="logo" />
                        </Box>
                        <Box
                            display={{ base: "block", md: "flex" }}
                            gap={{ base: "1rem", md: "8rem" }}
                        >
                            <UnorderedList
                                listStyleType={"none"}
                            >
                                <Heading
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"700"}
                                    font-style={"extrabold"}
                                    fontSize={"1.5rem"}
                                    marginBottom={"1rem"}
                                    color={"hsl(0, 0%, 100%)"}>Product</Heading>
                                <ListItem
                                fontFamily= {"Ubuntu sanSerif"}
                                fontWeight ={"500"}
                                font-style= {"extrabold"}
                                color={"hsl(240, 2%, 79%)"}>Overview</ListItem>
                                <ListItem
                                fontFamily= {"Ubuntu sanSerif"}
                                fontWeight ={"500"}
                                font-style= {"extrabold"}
                                color={"hsl(240, 2%, 79%)"}>Pricing</ListItem>
                                <ListItem
                                fontFamily= {"Ubuntu sanSerif"}
                                fontWeight ={"500"}
                                font-style= {"extrabold"}
                                color={"hsl(240, 2%, 79%)"}>Marketplace</ListItem>
                                <ListItem
                                fontFamily= {"Ubuntu sanSerif"}
                                fontWeight ={"500"}
                                font-style= {"extrabold"}
                                color={"hsl(240, 2%, 79%)"}>Features</ListItem>
                                <ListItem
                                fontFamily= {"Ubuntu sanSerif"}
                                fontWeight ={"500"}
                                font-style= {"extrabold"}
                                color={"hsl(240, 2%, 79%)"}>Integrations</ListItem>
                            </UnorderedList>
                            <UnorderedList
                                listStyleType={"none"}
                            >
                                <Heading
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"700"}
                                    font-style={"extrabold"}
                                    fontSize={"1.5rem"}
                                    marginBottom={"1rem"}
                                    color={"hsl(0, 0%, 100%)"}>Company</Heading>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>About</ListItem>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>Team</ListItem>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>Blog</ListItem>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>Careers</ListItem>
                            </UnorderedList>
                            <UnorderedList
                                listStyleType={"none"}
                            >
                                <Heading
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"700"}
                                    font-style={"extrabold"}
                                    fontSize={"1.5rem"}
                                    marginBottom={"1rem"}
                                    color={"hsl(0, 0%, 100%)"}>Connect</Heading>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>Contact</ListItem>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}>Newsletter</ListItem>
                                <ListItem
                                    fontFamily={"Ubuntu sanSerif"}
                                    fontWeight={"500"}
                                    font-style={"extrabold"}
                                    color={"hsl(240, 2%, 79%)"}
                                >Linkedin</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ChakraProvider >
    );
};

export default FooterBlogr;
