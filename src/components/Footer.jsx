import React from 'react' ;
import {DiJavascript1} from "react-icons/di";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function footer() {
  return (
    <>
    <footer className='bg-dark text-white border border-dark'> 
    
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">

            <div  id='footerul'>
              <h4>Learn Coding</h4>
              <ul id='footerul'>
                <li><a href="https://www.w3schools.com/">W3School</a></li>
                <li><a href="https://www.codeconquest.com/">Code Conquest</a></li>
                <li><a href="https://www.codecademy.com/">Codecademy</a></li>
                <li><a href="https://www.theodinproject.com/">The Odin Project</a></li>
                <li><a href="https://www.w3schools.com/">W3School</a></li>
              </ul>
            </div>
          </MDBCol>
          
          <MDBCol md="6">
            <h5 className="title">Partitcipate</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Sign Up</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Donate now</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        <div className='d-flex justify-content-center'>
            <img className='images' src="images/footer/linux.png" alt="" />
            <img className='images' src="images/footer/angular.png" alt="" />
            <img className='images' src="images/footer/node.png" alt="" />
            <img className='images' src="images/footer/js.png" alt="" />
            <img className='images' src="images/footer/node.png" alt="" />
            <img className='images' src="images/footer/css3.png" alt="" />
            <img className='images' src="images/footer/react.jpg" alt="" />
            <img className='images' src="images/footer/python.png" alt="" />
            <img className='images' src="images/footer/laravel.png" alt="" />
            <img className='images' src="images/footer/php.png" alt="" />
        </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> IT BookStore.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
 
    </footer>
    </>
  )
}

export default footer ;


// =====================>