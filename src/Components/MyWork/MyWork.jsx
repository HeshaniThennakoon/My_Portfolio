import React from "react";
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mywork_data from "../../assets/mywork_data";
import arrow_icon from '../../Assets/arrow_icon.jpg';

const MyWork = () => {
    return (
        <div className="mywork">
            <div className="mywork-title">
                <img src={theme_pattern} alt="" />
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=""/>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
            
        </div>
    )
}

export default MyWork;