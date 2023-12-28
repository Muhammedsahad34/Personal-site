import React from 'react';
import './Main.css';
import image1 from '../../Assets/Images/image1.JPG'

function Main() {
    return (
        <div className='row'>
            <div className="col-12 col-sm-12 col-md-6 col-lg-8">
                <div className='left-content d-flex flex-column align-items-center justify-content-center'>
                    <div className='name '>
                        <h2 className='text-decoration-none'>Hi I am <span>Muhammed Sahad</span></h2>
                    </div>
                    <div className='about'>
                        <p align='justify'> Recent graduate with a strong passion for web development and a solid foundation in key programming
                            languages and technologies. Eager to contribute my skills in designing and building user-friendly websites
                            while continuously learning and growing in a dynamic professional environment.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className='right-content'>
                    <img src={image1} alt="Myimage" />
                </div>
            </div>

        </div>
    )
}

export default Main