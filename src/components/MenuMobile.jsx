import {  AccordionItem, AccordionPanel, Box, Button, ButtonGroup, ChakraProvider, CloseButton, Image, Link, ListItem,  Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay,  UnorderedList, useDisclosure, AccordionIcon, AccordionButton, Accordion } from '@chakra-ui/react';
import logo from '../images/logo.svg';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

const MenuMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <ChakraProvider>

            <Box
                bgImage={`linear-gradient(0deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))`}
                bgPosition='center center'
                borderBottomLeftRadius={'100px'}
                height={"90svh"}
            >
                <Box
                    as='nav'
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={"4rem"}
                >
                    <Box p='2'>
                        <Image src={logo} alt='Dan Abramov' />
                    </Box>
                    <Box>
                        {/*close and open menu */}
                        {isOpen ? <CloseButton
                            onClick={onClose}
                            color={"hsl(0, 0%, 100%)"}
                            fontSize={"4rem"}
                        /> : <HamburgerIcon
                            onClick={onOpen}
                            color={"hsl(0, 0%, 100%)"}
                            fontSize={"4rem"}
                        />}
                    </Box>
                </Box>
                <Modal
                    size={{ base: "sm", md: "md" }}
                    isOpen={isOpen}
                    onClose={onClose}

                >
                    <ModalOverlay />
                    <ModalContent
                        top={"14rem"}
                    >
                        <ModalBody
                            display={"block"}
                        >
                            <Accordion
                                defaultIndex={[0]}
                                allowMultiple
                            >
                                <Box
                                    as='div'
                                    // display={"flex"}
                                    // flexDirection={"column"}
                                    // justifyContent={"center"}
                                    margin={"auto"}
                                >


                                    <AccordionItem
                                        borderWidth={0}
                                        borderBottom={0}
                                        display={"block"}
                                        _hover={{ backgroundColor: "none" }}
                                        marginTop={"1rem"}

                                    >
                                        <h2>
                                            <AccordionButton
                                                margin={"auto"}
                                                width={"auto"}
                                                css={{
                                                    borderBottom: "none",

                                                }}
                                            >
                                                <Box
                                                    color={
                                                        "hsl(208, 49%, 24%)"
                                                    }
                                                    as='span'

                                                    fontFamily={"Overpass, sans-serif"}
                                                    fontOpticalSizing={"auto"}
                                                    fontWeight={"600"}
                                                    fontStyle={"extrabold"}
                                                    fontSize={"1.5rem"}
                                                >
                                                    Product
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            borderBottom={0}
                                            pb={4}>
                                            <UnorderedList
                                                listStyleType={"none"}
                                                borderRadius={".5rem"}
                                                textAlign={"center"}
                                                lineHeight={"3rem"}
                                                background={"blackAlpha.100"}
                                                fontFamily={"Overpass, sans-serif"}
                                                fontOpticalSizing={"auto"}
                                                fontWeight={"300"}
                                                fontStyle={"normal"}
                                            >
                                                <ListItem>Overview</ListItem>
                                                <ListItem>Pricing</ListItem>
                                                <ListItem>Marketplace</ListItem>
                                                <ListItem>Features</ListItem>
                                                <ListItem>Integrations</ListItem>
                                            </UnorderedList>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem
                                        borderWidth={0}
                                        borderBottom={0}

                                        display={"block"}
                                        _hover={{ backgroundColor: "none" }}
                                        marginTop={"1rem"}

                                    >
                                        <h2>
                                            <AccordionButton
                                                margin={"auto"}
                                                width={"auto"}
                                                css={{
                                                    borderBottom: "none"
                                                }}
                                            >
                                                <Box
                                                    color={"hsl(208, 49%, 24%)"}
                                                    as='span'
                                                    fontFamily={"Overpass, sans-serif"}
                                                    fontOpticalSizing={"auto"}
                                                    fontWeight={"600"}
                                                    fontStyle={"extrabold"}
                                                    fontSize={"1.5rem"}
                                                >
                                                    Company
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            borderBottom={0}
                                            pb={4}
                                            textAlign={"center"}
                                            margin={"auto"}
                                        >
                                            <UnorderedList
                                                listStyleType={"none"}
                                                borderRadius={".5rem"}
                                                textAlign={"center"}
                                                lineHeight={"3rem"}
                                                background={"blackAlpha.100"}
                                                fontFamily={"Overpass, sans-serif"}
                                                fontOpticalSizing={"auto"}
                                                fontWeight={"300"}
                                                fontStyle={"normal"}
                                            >
                                                <ListItem>About</ListItem>
                                                <ListItem>Team</ListItem>
                                                <ListItem>Blog</ListItem>
                                                <ListItem>Careers</ListItem>
                                            </UnorderedList>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    {/* Connec */}

                                    <AccordionItem
                                        borderWidth={0}
                                        borderBottom={0}
                                        marginTop={"1rem"}
                                    >
                                        <h2>
                                            <AccordionButton
                                                margin={"auto"}
                                                width={"auto"}
                                                css={{
                                                    borderBottom: "none"
                                                }}
                                            >
                                                <Box
                                                    color={"hsl(208, 49%, 24%)"}
                                                    as='span'
                                                    fontFamily={"Overpass, sans-serif"}
                                                    fontOpticalSizing={"auto"}
                                                    fontWeight={"600"}
                                                    fontStyle={"extrabold"}
                                                    fontSize={"1.5rem"}
                                                >
                                                    Connect
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            borderBottom={0}>
                                            <UnorderedList
                                                listStyleType={"none"}
                                                borderRadius={".5rem"}
                                                textAlign={"center"}
                                                lineHeight={"3rem"}
                                                background={"blackAlpha.100"}
                                                fontFamily={"Overpass, sans-serif"}
                                                fontOpticalSizing={"auto"}
                                                fontWeight={"300"}
                                                fontStyle={"normal"}
                                            >
                                                <ListItem>Contact</ListItem>
                                                <ListItem>Newsletter</ListItem>
                                                <ListItem>Linkedin</ListItem>
                                            </UnorderedList>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Box>
                                <ModalFooter
                                    borderTop={"1px solid hsl(237, 23%, 32%)"}
                                    marginTop={"4rem"}
                                    justifyContent={"center"}
                                // margin={"auto"}
                                >
                                    <ButtonGroup
                                        as='div'
                                        flexDirection={"column"}
                                        marginBottom={"4rem"}
                                    >
                                        <Button
                                            marginBottom={"1rem"}
                                            color={"hsl(237, 23%, 32%)"}
                                            fontFamily={"Overpass, sans-serif"}
                                            fontOpticalSizing={"auto"}
                                            fontWeight={"600"}
                                            fontStyle={"extrabold"}
                                            variant={Link}
                                            fontSize={"1.5rem"}
                                        >Login</Button>
                                        <Button
                                            // width={"30%"}
                                            // marginInline={"3rem"}
                                            bgGradient={`linear-gradient(70deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))`}
                                            paddingInline={'3rem'}
                                            paddingBlock={"1.9rem"}
                                            color={'white'}
                                            borderRadius={'3rem'} variant={Link} >Sign Up</Button>
                                    </ButtonGroup>
                                </ModalFooter>
                            </Accordion>
                        </ModalBody>

                    </ModalContent>

                </Modal>
            </Box>

        </ChakraProvider >
    );
}

export default MenuMobile;
