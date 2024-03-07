import './App.css';
import { Box, ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header/Header';
import MainPages from './components/Pages/MainPages';
import FooterBlogr from './components/FooterBlogr/FooterBlogr';


function App() {
  return (
    <ChakraProvider>
      <Box
      overflow={'hidden'}
      >
      <Header/>
      <MainPages/>
      <FooterBlogr/>
      </Box>
    </ChakraProvider>
  )
}

export default App;
