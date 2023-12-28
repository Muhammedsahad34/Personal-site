import React from 'react';
import './About.css';


function About() {
  return (
    <>

      <div className='about-2 w-100 d-flex flex-column align-items-center'>
        <div className='text-center'>
        <h2 className='fw-bold mt-2'>About</h2>
        </div>
        
        <div className="introduction mt-2">
          <h5>Introduction</h5>
          <p align='justify'>Hello there! I'm <span className='fw-bold'>Muhammed Sahad</span>, a passionate web developer fresh out of APJ Abdul Kalam Technological University. As a recent graduate with a B-Tech in Computer Science and Engineering, I am eager to dive into the dynamic world of web development and contribute my skills to create engaging and user-friendly digital experiences.</p>
        </div>

        <div className="education mt-2">
          <h5>Education</h5>
          <p align='justify'>I recently completed my B-Tech from APJ Abdul Kalam Technological University, where I honed my skills in <span>Java Script</span> and <span>Python</span>. My coursework not only provided me with a solid foundation in web development principles but also instilled in me a strong problem-solving mindset that I am excited to apply in real-world scenarios.</p>
        </div>

        <div className="skills mt-2">
          <h5>Skills</h5>
          <p align='justify'>I specialize in <span>MERN Stack Web Developer</span>, and my technical toolkit includes proficiency in <span>Java Script, React.js, Express, Node.js</span>. During my academic journey, I had the opportunity to work on Multiple Projects, where I strengthened my ability to translate design concepts into functional and visually appealing websites.</p>
        </div>

        <div className="skills mt-2">
          <h5>Passion</h5>
          <p align='justify'>What sets me apart is not just my technical skills, but my genuine passion for creating seamless online experiences. I stay updated with the latest industry trends and emerging technologies, always eager to learn and apply new techniques to enhance my development skills.</p>
        </div>

        <div className="skills mt-2">
          <h5>What I am Looking For</h5>
          <p align='justify'>I am currently seeking opportunities to contribute my skills and enthusiasm as a web developer. Whether it's collaborating on innovative projects or tackling challenging coding problems, I am excited about the prospect of leveraging my skills to make a meaningful impact.</p>
        </div>

      </div>
    </>
  )
}

export default About