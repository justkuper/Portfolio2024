import React, { useState, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [showMore, setShowMore] = useState(false); // Track whether to show more items
    const [itemLimit, setItemLimit] = useState(4); // Default item limit

    useEffect(() => {
        // Update itemLimit based on window size
        const updateItemLimit = () => {
            if (window.innerWidth <= 768) {
                setItemLimit(4); // Show 4 items for max width of 768px
            } else {
                setItemLimit(6); // Show 6 items for larger screens
            }
        };

        updateItemLimit(); // Set initial item limit
        window.addEventListener('resize', updateItemLimit); // Update on resize

        return () => {
            window.removeEventListener('resize', updateItemLimit); // Cleanup
        };
    }, []);

    const handleShowMoreClick = () => {
        setShowMore(!showMore); // Toggle the showMore state
    };

    // Determine how many projects to display based on showMore state
    const displayedProjects = showMore ? mywork_data : mywork_data.slice(0, itemLimit); // Show based on itemLimit

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
  {displayedProjects.map((work, index) => (
    <div key={index} className="work-item">
        <a href={work.deploy} target="_blank" rel="noopener noreferrer">
      <img src={work.w_img} alt={work.w_name}  />
        </a>
      
        {(index <= 5) && (
  <a className="work-link" href={work.link} target="_blank" rel="noopener noreferrer">✍🏽</a>
)}
   </div>
  ))}
</div>


            <div className="mywork-showmore" onClick={handleShowMoreClick}>
                <p>{showMore ? 'Show less' : 'Show more'}</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
}

export default MyWork;
