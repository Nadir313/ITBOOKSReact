import React,{useState,useEffect} from 'react' ;
import "../Style/style.css" ;
import axios from 'axios';
import {MDBIcon, MDBCol } from 'mdbreact';
import {AiFillHeart  } from "react-icons/ai" ;
import { TbBooks } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi" ;

// import Witness from "./Witness" ;

import SideList from './SideList';

function Books() {
    const [data , setData ] = useState([]) ;
    const [search, setSearch] = useState('') ;

    const [endpoint, setEndpoint ] = useState("laravel");
    
    useEffect(()=>{
      const url = "https://api.itbook.store/1.0/search/"+endpoint;
        axios.get(url)
        .then(res => {
            setData(res.data.books) ;
        })
        .catch(err => console.log(err))
    },[endpoint])

    
    const wishListHandler =(datum)=>(e)=>{
      const wishlistbookdata = {
        Image:datum.image,
        title:datum.title,
        subtitle:datum.subtitle,
        userId:localStorage.getItem('userId')  
      }
      axios.post('http://localhost:80/ITbooks/wishlist.php',wishlistbookdata)
      .then((response)=>{
      })
      .catch(e=>{
        console.log(e) ;
      });

    }
    const collectionHandler =(datum)=> ()=>{
      const collectionbookdata = {
        Image:datum.image,
        title:datum.title,
        subtitle:datum.subtitle,
        userId:localStorage.getItem('userId')
      }
      axios.post('http://localhost:80/ITbooks/collection.php',collectionbookdata)
      .then((response)=>{
        console.log(response.config.data)
      })
      .catch(e=>{
        console.log(e) ;
      });
    }

    const searchForBook = (e)=>{
      if(e.key === "Enter"){
        setEndpoint(e.target.value);
      }
    }

  return (
    <>

    <section id='sectionid' className='w-60 '>
            <div>
                <SideList />
            </div>         
          <aside className='container'> 
            <div>
            <MDBCol md="5">
              <div className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <label htmlFor="search"><h4>Search <BiSearchAlt2 /></h4>  </label>
              <input onKeyPress={searchForBook} value={search} onChange={e => setSearch(e.target.value)}  className="bg-light form-control form-control-sm ml-3 w-50 border border-2 m-2" type="text" placeholder="Books Search" aria-label="Search" />
              </div>
            </MDBCol> 

             </div> 
            <div  className='bg-light container row '>
            {data.map((datum)=>{
                    return(
                      <div key={datum.isbn}  className='h-20 w-40 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                           <div  id='cardtest' className='card m-2'  >
                           <div id='cardheadertest' className="card-header">
                              <img style={{maxWidth:"100%",}} src={datum.image} alt="" />
                           </div>
                          <div className="card-body ">
                            <span className='d-flex border border-2'>
                             {localStorage.getItem('userId') ? <>  <h4 className='mx-2' onClick={wishListHandler(datum)} value={datum.id} style={{color:"red"}}>  <AiFillHeart />  </h4>
                              <h4 onClick={collectionHandler(datum)} style={{color:"green"}}><TbBooks/> </h4> </> : 
                              <><span>
                                  <p className='text-center text-muted fw-bold p-2'>{datum.title}</p>
                                </span> </>
                              
                              }
                             </span> 
                          </div>
                        </div>
                        </div>

                        )
                })}
              
            </div> 
            </aside>                     
    </section>
    </>
  )
}

export default Books ;