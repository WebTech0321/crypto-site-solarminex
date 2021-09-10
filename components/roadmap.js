import React, {useState, useEffect} from "react"
import imgRoadmap from '../assets/img/roadmap.jpg'

const RoadMap = () => {

    return (
        <div className="section section-roadmap">
            <div className="roadmap-content">
                <h1 className="title mb-3">
                    Road Map
                    <div className="text-line text-line2"></div>                        
                </h1>

                <div className="roadmap-content-image">
                    <img src={imgRoadmap}/>
                </div>
            </div>
        </div>
    );
  };
   
  
  export default RoadMap;
  