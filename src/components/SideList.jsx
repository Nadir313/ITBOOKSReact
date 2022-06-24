import React,{useState} from 'react'
import "../Style/style.css" ;
import {DiJavascript1} from "react-icons/di" ;
import { BiSearchAlt2 } from "react-icons/bi" ;
import { DiCss3 } from "react-icons/di" ;
import { SiHtml5 } from "react-icons/si" ;
import { FaSass } from "react-icons/fa" ;
import { GrReactjs } from "react-icons/gr" ;
import { SiAngular } from "react-icons/si" ;
import { SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { FaRust} from "react-icons/fa";
import { SiKotlin } from "react-icons/si";

function SideList() {

  const [searchForLanguage, setSearchForLanguage] = useState('') ;

  const doSearch = (e)=>{
      if(e.key == "Enter"){
        setSearchForLanguage(e.target.value)
        console.log(searchForLanguage) ;
      }
  }

  return (
    <>
        <div>
            <ul id='sideul' className='bg-light border border-1 p-4 list-group'>
                {/* <form className=" ">
                  <label htmlFor="search"><h5>Search <BiSearchAlt2 /></h5>  </label>
                <input value={searchForLanguage} onKeyPress={doSearch} onChange={e => setSearchForLanguage(e.target.value)} className="bg-light form-control form-control-sm ml-3 w-100 mb-3" type="text" placeholder="Language Search" aria-label="Search" />
                </form> */}
                <li value="HTML" className='md-lg-text-sm text-dark fw-bold p-2 list-group-item pt-2'> <a href='#'>HTML <span><SiHtml5 /></span> </a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'> <a href='#'> CSS <span><DiCss3/></span> </a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'>  <a href='#'> SASS <span>< FaSass /></span> </a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'> <a href='#'>  JS <span className='border border-2 bg-warning fw-bolder'><DiJavascript1 /> </span>  </a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'>React JS <span>< GrReactjs/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'>Angular JS <span>< SiAngular /></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'> <a href='#'>Node JS <span></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'>TypeScript <span> < SiTypescript/> </span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Vue Js <span></span></a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'> <a href='#'> Python <span>< FaPython/></span> </a> </li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Mongodb <span>< SiMongodb/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> SQL <span>< DiMysql/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> PHP <span>< SiPhp/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Ruby <span>< DiRuby/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Laravel <span>< FaLaravel/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Swift <span>< FaSwift/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Java <span>< DiJava/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Rust <span>< FaRust/></span> </a></li>
                <li className='text-dark fw-bold p-2 list-group-item'><a href='#'> Kotlin <span>< SiKotlin/></span> </a></li>
            </ul>
        </div>
    </>
  )
}

export default SideList;

{/* <IoLogoNodejs /> */}

{/* < IoLogoVue/> */}