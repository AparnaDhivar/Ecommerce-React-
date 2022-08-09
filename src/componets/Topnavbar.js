import {Navbar,Container,Nav} from 'react-bootstrap';
import Navlinks from './Navlinks';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Kids from '../pages/Kids'
function Topnavbar(props) {
  return (
    <>
   
    
      <Navbar bg="dark" variant="dark" fixed="top" >
        <Container>
        <Navbar.Brand>
            <img
              src={props.Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Shoppy"
            />
          </Navbar.Brand>
          <Navbar.Brand >Shoppy shop</Navbar.Brand>
          <Nav className="me-auto">
            <Navlinks/>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route  path="/home" element={<Home/>} />
          <Route  path="/mens" element={<Men/>}  />
          <Route  path="/womens" element={<Women/>} />
          <Route  path="/kids" element={<Kids/>} />
      </Routes>
 
    </>
  );
}


export default Topnavbar;