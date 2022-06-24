import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md" ;
import { AiFillHeart } from "react-icons/ai" ;

function WishList() {
  const [wishListData, setWishListData] = useState([]) ;
  const url = "http://localhost:80/ITbooks/wishlist.php?userId="+localStorage.getItem('userId') ;

  useEffect(()=>{
    getWishListData();
  },[])

  const getWishListData =()=>{
    axios.get(url)
    .then(res =>{
      setWishListData(res.data);
    })
    .catch(err => console.log(err))
  }

  const DeleteHandler =(datum)=> ()=>{
    const id = datum.id ;
    axios.post("http://localhost:80/ITbooks/Delete.php",id)
    .then(res => {
      console.log(res.data)
    }).catch(err => console.log(err))
    window.location.reload() ;
  }

  return (
    <>
      <h3 id='wishlistTitle' >  <img id='wishlistimg' src='images/completed-amico.svg' alt="" /> <b style={{color:"darkorange"}} > <AiFillHeart /> {localStorage.getItem('userName')}'s </b>  Wislist Of books </h3>
      <article id='Thewishlist'>
        <div>

        </div>
          <div  className='row justify-content-center'>
          {wishListData.map((datum)=>{
              return(
                <div id='cardtest' key={datum.isbn} className='h-30 w-30 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                  <div className='card-header'>
                    <img src={datum.Image} alt="" />
                    <h3 onClick={DeleteHandler(datum)} style={{color:"red"}}> <MdDeleteForever /> </h3> 
                  </div>
                  <div className='card-body'>
                    <span>
                      <h6>{datum.Title}</h6>
                    </span>
                  </div>
                </div>
              )
            })}
           </div>
       <aside>
          
        </aside>
      </article>
      

    </>
  )
}

export default WishList