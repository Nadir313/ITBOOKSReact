import React,{useState, useEffect} from 'react' ;
import axios from 'axios';
import { ImStarFull } from "react-icons/im" ;

import Carousel from 'react-bootstrap/Carousel';
import "../Style/style.css" ;


function BookSlider() {
    const [newBooks, setNewBooks] = useState([]) ;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    const urlNew =  "https://api.itbook.store/1.0/search/new"
    useEffect(()=>{
        axios.get(urlNew)
        .then(res => {
            setNewBooks(res.data.books) ;
        })
        .catch(err => console.log(err))
    },[])

    const [showhero, setShowHero] = useState(false);

    const herohandler = ()=>{
      setShowHero(!showhero) ;
    }

    const myhero = ["Books are your bridge to personal Freedom", "That's the thing about books. They let you travel without moving your feet","I have always imagined paradise will be a kind of library.","Every book you read Creates you, Read to create yourself","When we change the way we look at things The things  we look at Changes "]
  return (
    <>
    <article className='' > 
    <div className='hero'>
        <img className='img' onClick={herohandler} src="images/gift.png" alt="" />
      { showhero && <h3> {myhero[Math.floor(Math.random()*5)]}  </h3>}
    </div>
    <div className='myslider'>
       <Carousel id='carousel' className=' h-100 w-100 ' variant="">
           {newBooks.map((book)=>{
               return(
                    <Carousel.Item key={book.isbn} className='text-center h-100'>
                      <img
                      className="h-100"
                      src={book.image}
                      alt="First slide"
                      /> 
                    </Carousel.Item> 
               )
           })}
           <h4 className='text-center text-muted fw-bold p-2 '> {localStorage.getItem('userName') ?  <h4 className='text-success fw-bold '> <ImStarFull /> {localStorage.getItem('userName')} </h4> :null}  Check out Our newest Books</h4>
        </Carousel>
        </div>
        </article>
    </>
  )
}

export default BookSlider ;