import React, { useState, useEffect } from 'react' ;
import axios from 'axios' ;
import {MdDeleteForever} from "react-icons/md" ;
import { TbBooks } from "react-icons/tb";

function MyCollection() {
  const [collectionData, setCollectionData] = useState([]) ;
  const url ="http://localhost:80/ITbooks/collection.php?userId="+localStorage.getItem('userId') ;

  useEffect(()=>{
    getCollectionData() ;
  },[])

  const getCollectionData = ()=>{
    axios.get(url)
    .then(res => {
      console.log(res) 
      setCollectionData(res.data) ;
     })
    .catch(err => console.log(err))
  }

  const DeleteHandler =(book)=> ()=>{
    const id = book.id ;
    axios.post("http://localhost:80/ITbooks/deleteCollection.php",id)
    .then(res => {
      console.log(res.data)
    }).catch(err => console.log(err))
    window.location.reload() ;
  }

  return (
    <>  
          <h3 id='wishlistTitle' >  <img id='wishlistimg' src='images/Collecting-amico.svg' alt="" /> <b style={{color:"darkorange"}} > <TbBooks/> {localStorage.getItem('userName')}'s </b>  Collection Of books </h3>
          <article id='Thewishlist'>  
          <div>

          </div>
          <div className='bg-light container row'>
          {collectionData.map((book)=>{
            return(
              <div id='cardtest' key={book.isbn} className=' container h-30 w-30 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                <div className='card-header'>
                  <img src={book.Image} alt="" />
                  <h3 onClick={DeleteHandler(book)} style={{color:"red",cursor: "pointer"}}> <MdDeleteForever /> </h3> 
                </div>
                <div className='card-body'>
                  <span>
                    <h6>{book.Title}</h6>
                    <p>{book.SubTitle}</p>
                  </span>
                </div>
              </div>
            )
          })}
      </div>
      <div>

      </div>
      </article>
    </>
  )
}

export default MyCollection ;