import React, { useState } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  const [select, setSelect] = useState(null);
  let classes = 'text-decoration-none'
  let class2 = 'text-decoration-none bg-white rounded-5 text-dark links'

  const setItem = (prop) => {
    setSelect(prop);
  }

  return (
    <>
      <div className='w-100 bg-dark header d-flex align-items-center'>
        <div className="left text-white ms-2">
          Muhammed Sahad
        </div>
        <div className='d-flex inside me-2'>
          <Link className={select === 'Home' ? class2 : classes} onClick={() => setItem('Home')} to={'/'}>Home</Link>
          <Link onClick={() => setItem('about')} className={select === 'about' ? class2 : classes} to={'/about'} >About</Link>
          <Link onClick={() => setItem('project')} className={select === 'project' ? class2 : classes} to={'/project'}>Projects</Link>
          <Link onClick={() => setItem('contact')} className={select === 'contact' ? class2 : classes} to={'/contact'}>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Home