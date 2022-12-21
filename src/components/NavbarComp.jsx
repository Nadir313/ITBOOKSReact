import React from 'react' ;
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom" ;
import Home from './Home';
import WishList from "./WishList" ;
import MyCollection from './MyCollection';
import SignIn from './SignIn';
import UserProfile from './UserProfile';
import Admin from './Admin';

import "../Style/style.css" ;
import "bootstrap/dist/css/bootstrap.min.css" ;

import {Navbar,Nav,Button,Brand, Container, NavDropdown,Image, Form, FormCotrol,Toggle, Collapse, Item} from "react-bootstrap" ;
import { GrLogin } from "react-icons/gr" ;
import { AiFillHeart } from "react-icons/ai" ;
import { TbBooks } from "react-icons/tb";
import { RiLogoutCircleRFill } from 'react-icons/ri' ;
import { AiFillHome } from "react-icons/ai" ;




function NavbarComp() {
  const logoutHandler = ()=>{
    window.location.reload() ;
      localStorage.clear() ;
      window.location.href = "http://localhost:3000/Home" ;
  }

  return (
    <>
      <Router> 
       <Navbar id='navbar' className='p-2' bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-dark fw-bold' href="#"><img id='myapplogo' src="/images/newITbooks.png" alt="it" /> <span id='websiteName'> IT Books </span>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         {localStorage.getItem("userName") !== null ?
         <>     <Nav.Link id='homehover' className='mx-3 fw-bold d-flex' as={Link} to={"/Home"}> <h5 className='d-flex' > <AiFillHome /> Home</h5> </Nav.Link>
            <Nav.Link id='homehover' className='mx-3 fw-bold d-flex' as={Link} to={"/WishList"}> <h5 className='d-flex'><AiFillHeart /> WishList</h5> </Nav.Link>
            <Nav.Link id='homehover' className='mx-3 fw-bold d-flex' as={Link} to={"/MyCollection"}> <h5 className='d-flex'><TbBooks/> MyCollection</h5></Nav.Link> </> 
            :  <Nav.Link id='homehover' className='mx-3 fw-bold d-flex' as={Link} to={"/Home"}> <h5 className='d-flex' > <AiFillHome /> Home </h5> </Nav.Link>
           }
          
          <Form className='d-flex '>
          {(localStorage.getItem('userName') !== null) ? 
            <>    <Nav.Link id='sign'  className=''> <UserProfile  /> </Nav.Link> 
                   <Nav.Link id='signOUT' > <h5 className='text-secondary' > Sign out <span onClick={logoutHandler}> <RiLogoutCircleRFill/> </span>  </h5></Nav.Link>
            </> :
                 <Nav.Link id='signIn'  className='fw-bold text-success' as={Link} to={"/SignIn"}> <h4>< GrLogin className='m-2 text-success'/>Sign In</h4></Nav.Link>
          }
      
        
          </Form>
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/WishList' element={<WishList />}/>
        <Route path='/MyCollection' element={<MyCollection />}/>
        <Route path='/SignIn' element={<SignIn />}/>
      </Routes>
    </Router>

    
    </>
  )
}

export default NavbarComp ;



{/* <Image src="../../public/images/booktest.png" responsive /> */}