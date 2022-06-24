import React from 'react' ;
import Books from './Books';
import BookSlider from './BookSlider';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Witness from "./Witness" ;


function Home() {
  return (
    <>
        <div>
          <div className="bg-light">
          <section  >
            <BookSlider />
            <Books />
            { localStorage.getItem('userId') == null ? <SignUp /> : null }
          </section>
          </div>
        </div>
    </>
  
  )
}

export default Home