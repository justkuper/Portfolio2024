import React from 'react';
import './Hero.css';
import profile_img from '../../assets/prof_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MyResume from '../../assets/MyResume.pdf';
import RotatingQuote from '../RotatingQuotes/RotatingQuotes';

const Hero = () => {
    // Function to handle the download of the resume with a confirmation alert
    const downloadResume = () => {
        const userConfirmed = window.confirm("Are you sure you want to download MyResume.pdf?");
        if (userConfirmed) {
            // Proceed with the download if the user clicks "Yes"
            const link = document.createElement('a');
            link.href = MyResume; // Use the imported MyResume file path
            link.download = 'MyResume.pdf'; // The name of the file when downloaded
            document.body.appendChild(link); // Append the link to the body
            link.click(); // Trigger the download
            document.body.removeChild(link); // Remove the link from the DOM
        }
    };

    return (
        <div id='home' className='hero'>
            <div className="hero-overlay rotating-quote">
                <RotatingQuote /></div>
            <img src={profile_img} alt="" width="320" height="320" />
            <h1><span>I'm Kuper Bank,</span> full-stack developer based in California.</h1>
            <p>I am a dedicated first-year full-stack developer skilled in HTML, CSS, and JavaScript. Passionate about creating responsive, user-friendly web applications, I seek opportunities to grow and contribute to a collaborative team.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div className="hero-resume" onClick={downloadResume}>
                    My resume
                </div>
            </div>
        </div>
    );
}

export default Hero;
