import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='project d-flex flex-column align-items-center'>
        <h2 className='text-center fw-bold pt-2'>Projects</h2>
        <div className='first-project mt-3 '>
            <h5 className='title m-2'>Title: <span>E-commerce Application</span></h5>
            <div className='d-flex me-4'>
            <h5 className='title ms-2'>Overview:</h5>
            <p align='justify' className='ms-2 cont'>Developed a feature-rich E-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a seamless shopping experience for users and includes integration with Razorpay payment gateway for secure and efficient online transactions.</p>
            </div>
            <div className='d-flex me-4'>
                <h5 className='title ms-2'>Technologies:</h5>
                <p align='justify' className='ms-2 cont fw-bold'>React.js, Express.js, Node.js, MongoDB, Bootstrap, Git</p>
            </div>
            <div className='d-flex w-100 justify-content-center'>
            <button className='mb-3 btnn rounded text-white'><Link to={'https://github.com/Muhammedsahad34/MERN-E-Commerce-Project'} className='text-decoration-none text-white'>Github repo</Link></button>
            </div>
        </div>

        <div className='first-project mt-3 '>
            <h5 className='title m-2'>Title: <span>OLX-Clone</span></h5>
            <div className='d-flex me-4'>
            <h5 className='title ms-2'>Overview:</h5>
            <p align='justify' className='ms-2 cont'>Created a completely functional OLX clone by utilising Firebase for backend services and React for the front end. Designed interfaces that are easy to use for browsing and listings. Real-time database changes and user authentication were implemented.</p>
            </div>
            <div className='d-flex me-4'>
                <h5 className='title ms-2'>Technologies:</h5>
                <p align='justify' className='ms-2 cont fw-bold'>React.js, Firebase, Git</p>
            </div>
            <div className='d-flex w-100 justify-content-center'>
            <button className='mb-3 btnn rounded text-white'><Link to={'https://github.com/Muhammedsahad34/OLX-Clone'} className='text-decoration-none text-white'>Github repo</Link></button>
            </div>
        </div>

        <div className='first-project mt-3 mb-3'>
            <h5 className='title m-2'>Title: <span>Age and Gender Prediction</span></h5>
            <div className='d-flex me-4'>
            <h5 className='title ms-2'>Overview:</h5>
            <p align='justify' className='ms-2 cont'>Designed and developed a machine learning model to predict age and gender from human voice samples. Leveraged Python and various audio processing libraries to extract features from audio data. Created a user-friendly web application using Streamlit to showcase the prediction results</p>
            </div>
            <div className='d-flex me-4'>
                <h5 className='title ms-2'>Technologies:</h5>
                <p align='justify' className='ms-2 cont fw-bold'>Python, Machine Learning, Streamlit, Git</p>
            </div>
            <div className='d-flex w-100 justify-content-center'>
            <button className='mb-3 btnn rounded text-white'><Link to={'https://github.com/Muhammedsahad34/main-project'} className='text-decoration-none text-white'>Github repo</Link></button>
            </div>
        </div>

    </div>
  )
}

export default Projects