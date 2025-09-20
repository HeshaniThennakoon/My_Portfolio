import React from "react";
import './Services.css';
import theme_pattern from '../../Assets/theme_pattern.png';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../Assets/arrow_icon.jpg';


const Services = () => {
  return (
    <div id="Services" name="Services" className="services">
        <div className="services-title">
            <img src={theme_pattern} alt="" />
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((Service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{Service.s_no}</h3>
                    <h2>{Service.title}</h2>
                    <p>{Service.desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services;