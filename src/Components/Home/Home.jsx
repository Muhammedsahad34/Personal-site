import React from 'react'
import './Home.css';
import { Link,useParams } from 'react-router-dom';
import Main from '../Main/Main';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

function Home() {
    const {subpage} = useParams();
    let classes = 'text-decoration-none'
    let class2 = 'text-decoration-none bg-white rounded-5 text-dark links'
    
    
    
  return (
    <>
    <div className='w-100 bg-dark header d-flex align-items-center'>
        <div className="left text-white ms-2">
          Muhammed Sahad 
        </div>
        <div className='d-flex inside me-2'>
            <Link to={'/'} className={subpage === undefined?class2:classes} >Home</Link>
            <Link to={'/about'} className={subpage === 'about'?class2:classes} >About</Link>
            <Link to={'/project'} className={subpage === 'project'?class2:classes} >Projects</Link>
            <Link to={'/contact'} className={subpage === 'contact'?class2:classes}>Contact</Link>
        </div>
    </div>
    {subpage === undefined?<Main/>:null}
    {subpage === 'about'?<About/>:null}
    {subpage === 'contact'?<Contact/>:null}
    {subpage === 'project'?<Projects/>:null}
    </>
  )
}

export default Home