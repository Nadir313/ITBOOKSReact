import React,{useState,useEffect} from 'react' ;
import "../../Style/style.css" ;
import axios from 'axios';
import {MDBIcon, MDBCol } from 'mdbreact';

function Js() {
    const [data, setData ] = useState([]) ;

    const url = "https://api.itbook.store/1.0/search/ruby";

    useEffect(()=>{
        axios.get(url)
        .then(res => {
            setData(res.data.books) ;
        })
        .catch(err => console.log(err))
    },[])

  return (
    <>
         <div  className='bg-light container row '>

{data.map((datum)=>{
        return(
          <div  className='h-25 w-25 col-lg-4 col-md-4 col-sm-6 col-xs-12 '>
            <div  id='cardtest' className='card m-2'  >
               <div id='cardheadertest' className="card-header ">
                  <img style={{maxWidth:"100%",}} src={datum.image} alt="" />
               </div>
              <div className="card-body ">
                <span >
                      <h6>{datum.title}</h6> 
                      <p>{datum.subtitle}</p>
                    
                 </span> 
              </div>
            </div>
            </div>

            )
    })}
  
</div>    
    </>
  )
}

export default Js;