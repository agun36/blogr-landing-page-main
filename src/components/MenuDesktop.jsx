import React from 'react';
import logo from '../images/logo.svg';
import bgPattern from '../images/bg-pattern-intro-desktop.svg'
import bgPatternCircle from '../images/bg-pattern-circles.svg'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ChakraProvider,
    Flex,
    Box,
    Spacer,
    ButtonGroup,
    Button,
    Heading,
    Link,
    Image,
    useDisclosure,
} from '@chakra-ui/react'
const MenuDesktop = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <ChakraProvider>
             <Box
                    position={'relative'}
                    zIndex={1}
                    bgImage={`linear-gradient(0deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%)), url(${bgPattern})`}
                    bgPosition='center'
                    borderBottomLeftRadius={'100px'}
                    // bgSize={'cover, cover, cover'}
                    h={{ base: '100vh', md: '100vh', xl: '80vh', '2xl': '80vh' }}
                >
                    {/* Desktop screen */}
                    {/* <Image src={bgPattern}/> */}
                    <Box
                        display={{ base: 'block', md: 'flex', xl: 'flex', '2xl': 'flex' }}
                        padding={'4rem'}
                        // minWidth='max-content' 
                        alignItems='center'
                        gap='2'>

                        <Box p='2'>
                            <Image src={logo} alt='Dan Abramov' />
                            
                        </Box>


                        <Flex gap='2'>
                            <Menu
                                isOpen={isOpen}
                                onOpen={onOpen}
                                onClose={onClose}
                            >
                                <MenuButton
                                    as={Button}
                                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    backgroundColor="transparent"
                                    px={4}
                                    py={2}
                                    fontFamily={"Overpass, sans-serif"}
                                    fontOpticalSizing={"auto"}
                                    fontWeight={"600"}
                                    fontStyle={"normal"}
                                    transition='all 0.2s'
                                    color={'white'}
                                    _active={{ bg: "transparent", textDecoration: "underline" }}
                                    _hover={{ bgColor: "transparent", textDecoration: "underline" }}

                                >
                                    Product
                                </MenuButton>
                                <MenuList
                                    fontFamily={"Overpass, sans-serif"}
                                    fontOpticalSizing={"auto"}
                                    fontWeight={"300"}
                                    fontStyle={"normal"}
                                >
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Overview</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Pricing</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Marketplace</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Features</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Integrations</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                        <Flex gap='2'>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    backgroundColor="transparent"
                                    px={4}
                                    py={2}
                                    fontFamily={"Overpass, sans-serif"}
                                    fontOpticalSizing={"auto"}
                                    fontWeight={"600"}
                                    fontStyle={"normal"}
                                    transition='all 0.2s'
                                    color={'white'}
                                    _active={{ bg: "transparent", textDecoration: "underline" }}
                                    _hover={{ bgColor: "transparent", textDecoration: "underline" }}
                                >
                                    Company
                                </MenuButton>
                                <MenuList
                                    fontFamily={"Overpass, sans-serif"}
                                    fontOpticalSizing={"auto"}
                                    fontWeight={"600"}
                                    fontStyle={"normal"}
                                >
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >About</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Team</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Blog</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Careers</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                        <Flex gap='2'>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    backgroundColor="transparent"
                                    px={4}
                                    py={2}
                                    transition='all 0.2s'
                                    color={'white'}
                                    _active={{ bg: "transparent", textDecoration: "underline" }}
                                    _hover={{ bgColor: "transparent", textDecoration: "underline" }}
                                    fontFamily={"Overpass, sans-serif"}
                                    fontOpticalSizing={"auto"}
                                    fontWeight={"600"}
                                    fontStyle={"normal"}
                                >
                                    Connect
                                </MenuButton>
                                <MenuList
                                    
                                >
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Contact</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Newsletter</MenuItem>
                                    <MenuItem
                                    _hover={
                                        {
                                            fontFamily: "Overpass, sans-serif",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "800",
                                            fontStyle: "extrabold",
                                            color:"hsl(207, 13%, 34%)",
                                            fontSize:"1rem"
                                        }
                                    }
                                    >Linkedin</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                        <Spacer />
                        <ButtonGroup
                            gap='2'
                            fontFamily={"Overpass, sans-serif"}
                            fontOpticalSizing={"auto"}
                            fontWeight={"300"}
                            fontStyle={"normal"}
                        >
                            <Button color={'white'} variant={Link}>Login</Button>
                            <Button paddingInline={'2rem'} background= 'hsl(0, 0%, 100%)'color='hsl(356, 100%, 66%)' borderRadius= '3rem' _hover={{ background: 'hsl(355, 100%, 74%)', color: 'white', borderRadius: '3rem' }} variant={Link} >Sign Up</Button>
                        </ButtonGroup>


                    </Box>

                    <Box
                        padding={'4rem'}
                        textAlign={'center'}

                    >
                        <Heading
                            color={'white'}
                            fontSize={'4rem'}
                            fontFamily= {"Overpass, sans-serif"}
                            fontOpticalSizing={"auto"}
                            fontWeight={"600"}
                            fontStyle={"normal"}
                            marginBottom={'2rem'}
                        >A modern publishing platform</Heading>
                        <Heading
                            color={'white'}
                            fontSize={'2rem'}
                            marginBottom={'2rem'}
                            fontFamily={"Overpass, sans-serif"}
                            fontOpticalSizing={"auto"}
                            fontWeight={"600"}
                            fontStyle={"normal"}
                        >Grow your audience and build your online brand</Heading>
                        <ButtonGroup gap='2'>
                            <Button
                            fontFamily={"Overpass, sans-serif"}
                            fontOpticalSizing={"auto"}
                            fontWeight={"600"}
                            fontStyle={"extrabold"}
                            fontSize={"1.5rem"}
                                color={'white'}
                                variant={Link}
                                _hover={{ background: 'hsl(355, 100%, 74%)', color: 'white', borderRadius: '3rem' }}
                            >Start for Free</Button>
                            <Button
                            fontFamily={"Overpass, sans-serif"}
                            fontOpticalSizing={"auto"}
                            fontWeight={"600"}
                            fontSize={"1.5rem"}     
                            fontStyle={"normal"}
                                paddingInline={'2rem'}
                                color={'white'}
                                variant={Link}
                                _hover={{ background: 'hsl(0, 0%, 100%)', color: 'hsl(356, 100%, 66%)', borderRadius: '3rem' }}
                            >Learn More</Button>
                        </ButtonGroup>
                    </Box>
                    <Image
                     src={bgPattern} 
                     alt='Dan Abramov'
                     position={"absolute"}
                     backgroundSize={"cover cover"}
                     width={"300rem"}
                     height={"100%"}
                    //  top={0}
                    left={"10rem"}
                     bottom={"-4rem"}
                     zIndex={-1}
                     />
                </Box>
        </ChakraProvider>
    );
}

export default MenuDesktop;
