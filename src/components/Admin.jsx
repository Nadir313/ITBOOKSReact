import React, { useEffect, useState } from 'react' ;
import { MdAdminPanelSettings } from "react-icons/md" ;

function UserProfile()  {
    const userProfile = localStorage.getItem('userProfile') ;
    
  return (
    <>
        <div id='userDiv' >
            <h2>
            <MdAdminPanelSettings/>
            </h2>
            <img id='userProfile' className='h-1 w-1 rounded-circle' src={'file://'+userProfile} alt="" />
            <h5 className='p-2' >Admin</h5>
        </div>
    </>
  )
}

export default UserProfile ;