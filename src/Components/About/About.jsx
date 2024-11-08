import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/pro_pic.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a passionate and dedicated first-year front-end developer, I have a strong foundation in HTML, CSS, and JavaScript, complemented by my eagerness to learn and adapt to new technologies. My academic projects and personal endeavors have allowed me to hone my skills in creating responsive and visually appealing web applications. I thrive in collaborative environments, where I can leverage my problem-solving abilities and creativity to contribute effectively to team goals.</p>
                    <p>I am particularly drawn to user experience design and am committed to developing accessible, user-friendly interfaces. My enthusiasm for coding is matched by my desire to stay current with industry trends and best practices. I am excited to bring my technical skills and fresh perspective to a dynamic team, where I can continue to grow and make a meaningful impact in the field of web development.</p> 
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>    
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>    
                    <div className="about-skill"><p>jQuery</p><hr style={{width:"50%"}} /></div>    
                </div>     
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>MANY</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About