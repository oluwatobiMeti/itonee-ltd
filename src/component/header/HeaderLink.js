import { useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, HStack } from '@chakra-ui/react';
function HeaderLink({dir, className}) {
  
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [show, setShow] = useState("");
  return (
    <Box display="flex" alignItems="center" flexDirection={dir} height="100%" width="60%">
      <div className='rel'>
      <div onMouseOver={() => {
        setDisplay1(true);
      }
      } onMouseOut={() =>  {
        setDisplay1(false);
      }
      } className="dropdownMenu">
      <NavLink to="/Analysis and Report">Analysis services</NavLink>
      <ExpandMoreIcon></ExpandMoreIcon>
      {display1 &&
      <div className="abs">
      <Dropdown className={className}>
      <div className="dropdownM">
        <Link color="blue.700" to={"/Academic Analysis Service"}>academic Analysis services</Link>
      </div>
      <div className="dropdownM">
        <Link color="blue.700" to={"/Business Analysis Service"}>Business Analysis services</Link>
      </div>
      </Dropdown>
      </div>
      }
      </div>
      </div>
      <div className='rel'>
      <div onMouseOver={() => {
        setDisplay3(true);
      }
      } onMouseOut={() =>  {
        setDisplay3(false);
      }
      } className="dropdownMenu">
      <NavLink to="/Analysis and Report">coaching and desertation</NavLink>
      <ExpandMoreIcon></ExpandMoreIcon>
      {display3 &&
      <div className="abs">
      <Dropdown className={className}>
      <div className="dropdownM">
        <Link color="blue.700" to={"/"}>qualitative analysis coach</Link>
      </div>
      <div className="dropdownM">
        <Link color="blue.700" to={"/"}>quantative analysis coach</Link>
      </div>
      </Dropdown>
      </div>
      }
      </div>
      </div>
      <div className='rel'>
      <div onMouseOver={() => {
        setDisplay2 (true);
      }
      } onMouseOut={() =>  {
        setDisplay2(false);
      }
      } className="dropdownMenu">
      <NavLink to="/Report">report your document</NavLink>
      <ExpandMoreIcon></ExpandMoreIcon>
      {display2 &&
      <div className="abs">
      <Dropdown className={className}>
      <div className="dropdownM">
        <Link color="blue.700" to={"/Report your Analysis"}>Report analyzed document</Link>
      </div>
      <div className="dropdownM">
        <Link color="blue.700" to={"/"}>write document</Link>
      </div>
      </Dropdown>
      </div>
      }
      </div>
      </div>
      <div className='rel'>
      <div onMouseOver={() => {
        setDisplay4 (true);
      }
      } onMouseOut={() =>  {
        setDisplay4(false);
      }
      } className="dropdownMenu">
      <NavLink to="/pricing">Pricing</NavLink>
      <ExpandMoreIcon></ExpandMoreIcon>
      {display4 &&
      <div className="abs">
      <Dropdown className={className}>
      <div className="dropdownM">
        <Link color="blue.700" to={"/Analysis prices"}>analysis prices</Link>
      </div>
      <div className="dropdownM">
        <Link color="blue.700" to={"/"}>writing prices</Link>
      </div>
      <div className="dropdownM">
        <Link color="blue.700" to={"/"}>coaching and desertation prices</Link>
      </div>
      </Dropdown>
      </div>
      }
      </div>
      </div>
    </Box>
  )
}

export default HeaderLink
