import { useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, HStack } from '@chakra-ui/react';
import {IoIosArrowDown} from "react-icons/io"
import {MdKeyboardArrowUp} from "react-icons/md"

function MobileHeaderLink({dir, className}) {
  
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);

  return (
    <Box>
      <Box display="flex" flexDirection="column" width="100vw" height="fit-content" border="1px solid blue" onClick={() => {
        setDisplay1(!display1);
      }
      } className="dropdownMenu">
      <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
          <NavLink to="/Analysis and Report">Analysis services</NavLink>
          <Box>
          {(display1)?<MdKeyboardArrowUp/>:<IoIosArrowDown/>}
          </Box>
          </Box>
      </Box>
      {display1 &&
      <Dropdown className={className}>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/Academic Analysis Service"}>academic Analysis services</Link>
      </Box>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/Business Analysis Service"}>Business Analysis services</Link>
      </Box>
      </Dropdown>
      }
      </Box>
      <Box display="flex" flexDirection="column" width="100vw" height="fit-content" border="1px solid blue" onClick={() => {
        setDisplay3(!display3);
      }
      } className="dropdownMenu">
        <Box>
          <NavLink to="/Analysis and Report">coaching and desertation</NavLink>
          <Box>
          <Box>
          {(display3)?<MdKeyboardArrowUp/>:<IoIosArrowDown/>}
          </Box>
          </Box>
      </Box>
      {display3 &&
      <Dropdown className={className}>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/"}>qualitative analysis coach</Link>
      </Box>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/"}>quantative analysis coach</Link>
      </Box>
      </Dropdown>
      }
      </Box>
      <Box display="flex" flexDirection="column" width="100vw" height="fit-content" border="1px solid blue" onClick={() => {
        setDisplay2 (!display2);
      }
      } className="dropdownMenu">
      <Box>
      <NavLink to="/Report">report your document</NavLink>
      <Box>
          {(display2)?<MdKeyboardArrowUp/>:<IoIosArrowDown/>}
          </Box>
      </Box>
      {display2 &&
      <Dropdown className={className}>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/Report your Analysis"}>Report analyzed document</Link>
      </Box>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/"}>write document</Link>
      </Box>
      </Dropdown>
      }
      </Box>
      <Box display="flex" flexDirection="column" width="100vw" height="fit-content" border="1px solid blue" onClick={() => {
        setDisplay4 (!display4);
      }
      } className="dropdownMenu">
     <Box>
        <NavLink to="/pricing">Pricing</NavLink>
        <Box>
        <Box>
          {(display4)?<MdKeyboardArrowUp/>:<IoIosArrowDown/>}
          </Box>
          </Box>
      </Box>
      {display4 &&
      <Dropdown className={className}>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/Analysis prices"}>analysis prices</Link>
      </Box>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/"}>writing prices</Link>
      </Box>
      <Box className="dropdownM">
        <Link color="blue.700" to={"/"}>coaching and desertation prices</Link>
      </Box>
      </Dropdown>
      }
      </Box>
    </Box>
  )
}

export default MobileHeaderLink
