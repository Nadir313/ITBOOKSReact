import React, { useEffect, useState } from 'react' ;
import { ImUserCheck } from "react-icons/im" ;

function UserProfile()  {
    const User = localStorage.getItem('userName') ;
    const userProfile = localStorage.getItem('userProfile') ;
    const userId = localStorage.getItem('userId') ;
  return (
    <>
        <div id='userDiv' >
            <h2>
            <ImUserCheck/>
            </h2>
            {/* <img id='userProfile' className='h-1 w-1 rounded-circle' src={'file://'+userProfile} alt="" /> */}
            <h5 className='p-2' >Welcome, {User}</h5>
        </div>
    </>
  )
}

export default UserProfile ;