import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Witness() {
    const [user, setUser] = useState([]) ;
    const url = "http://localhost:80/bookStore/Signin.php" ;
    useEffect(()=>{
        getUserData();
    })
    
    const getUserData = ()=>{
        axios.get(url)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => console.log(err)) ;

    }
  return (
    <>
        <div class="container">
            <div class="row">
                {user.map((person)=>{
                    return(
                        <div class="col-md-4">
                    
                        <div class="card d-flex mx-auto">
                            <div class="card-image">
                                <img class="img-fluid d-flex mx-auto" src={person.image}></img>
                            </div>
                            <div class="card-text">
                                <div class="card-title">{person.fullName}</div>
                            </div>
                            <div class="footer">
                                <span id="name">{person.Profession}</span>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Witness