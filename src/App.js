import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
      import { ChakraProvider } from '@chakra-ui/react';
import Pricing from './pages/pricing/Pricing';
import About from "./pages/about/About"
import BussinessAnalysis from './pages/businessAnalysis/BussinessAnalysis';
import AcademicAnalysis from './pages/AcademicAnalysis/AcademicAnalysis';
import ReportAnalysis from "./pages/reportAnalysis/ReportAnalysis";

function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Business Analysis Service' element={<BussinessAnalysis/>}/>
        <Route path='Academic Analysis Service' element={<AcademicAnalysis/>}/>
        <Route path='Report your Analysis' element={<ReportAnalysis/>}/>
        <Route path='Analysis prices' element={<Pricing/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
